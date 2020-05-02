import { NOTE_FRAGMENT } from "fragments";
import { GET_NOTES } from "queries";

export const defaults = {
    notes: [
        {
            __typename: "Note",
            id:1,
            title: "first",
            content: "# hello \n - test\n- test2"
        },
        {
            __typename: "Note",
            id:2,
            title: "first",
            content: "second"
        },
        {
            __typename: "Note",
            id:3,
            title: "first",
            content: "second"
        },
        {
            __typename: "Note",
            id:4,
            title: "first",
            content: "second"
        },
        {
            __typename: "Note",
            id:5,
            title: "first",
            content: "second"
        },
        {
            __typename: "Note",
            id:6,
            title: "first",
            content: "second"
        }
    ]
};

export const typeDefs = [`
    schema {
        query: Query
        mutation: Mutation
    }
    type Query {
        notes: [Note]!
        note(id: Int!): Note!
    }
    type Mutation {
        createNote(title: String!, content: String!)
        editNote(id: Int!, title: String!, content: String!)
        delNote(id: Int!)
    }
    type Note {
        id: Int!
        title: String!
        content: String!
    }
`];

export const resolvers = {
    Query:{
        note: (_: any, {id}: any, {cache}:any): object|null=>{
         const noteId = cache.config.dataIdFromObject({
             __typename: "Note",
             id
         })
         const note = cache.readFragment({
             fragment: NOTE_FRAGMENT,
             id: noteId
         })
         return note;
        }
    },
    Mutation: {
        createNote: (_:any,{title,content}:any,{cache}:any): object|null=>{
            const {notes} = cache.readQuery({query: GET_NOTES});
            const newNote = {
                __typename: "Note",
                id: notes.length+1,
                title,
                content
            }
            cache.writeData({
                data:{
                    notes:[newNote,...notes]
                }
            })
            return newNote;
        },
        editNote: (_:any,{id,title,content}:any,{cache}:any):object|null =>{
            const noteId = cache.config.dataIdFromObject({
                __typename: "Note",
                id
            })
            const note = cache.readFragment({
                fragment: NOTE_FRAGMENT,
                id: noteId
            })
            const updateFragement = {
                ...note,
                title,
                content
            }
            cache.writeFragment({
                id: noteId,
                fragment: NOTE_FRAGMENT,
                data: updateFragement
            })
            return updateFragement;
        },
        delNote: (_:any,{id}:any,{cache}:any):object|null =>{
            const {notes} = cache.readQuery({query: GET_NOTES});
            const clearNotes = notes.filter((note: { id: number })=> note.id !== id);
            cache.writeData({
                data:{
                    notes: clearNotes
                }
            })
            return clearNotes;
        }
    }
};
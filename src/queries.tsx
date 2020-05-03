import gql from "graphql-tag";

export const GET_NOTES = gql`
    {
        notes @client {
            id
            title
            content
        }
    }
`;

export const GET_NOTE = gql`
    query getNote($id: Int!){
        note(id: $id) @client {
            id
            title
            content
        }
    }
`;

export const CREATE_NOTE = gql`
    mutation createNote($title: String!, $content: String!) {
        createNote(title: $title, content: $content) @client
    }
`;

export const EDIT_NOTE = gql`
    mutation editNote($id: Int!, $title: String!, $content: String!) {
        editNote(id: $id, title: $title, content: $content) @client
    }
`;

export const DEL_NOTE = gql`
    mutation delNote($id: Int!) {
        delNote(id: $id) @client
    }
`;
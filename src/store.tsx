import { LocalStorageStore, ImmortalStorage } from 'immortal-db'
import { GET_NOTES } from 'queries';
import { NoteContent } from 'Routes/Notes/Notes';

const store = [LocalStorageStore];
const db = new ImmortalStorage(store);
const STORAGE_NAME: string = "data";
const IMMORTAL_NAME: string = "_immortal|data";

export const saveCache = async (cache:any) => {
    const {notes} = cache.readQuery({query: GET_NOTES})
    try {
        await db.set(STORAGE_NAME, JSON.stringify(notes));        
    } catch (error) {
        console.log(error);
    }
}

export const reStore = () => {
    const jsonNotes: string | null = localStorage.getItem(IMMORTAL_NAME);
    if(jsonNotes !==null){
        try {
            const parseNotes: NoteContent[] = JSON.parse(jsonNotes);
            return parseNotes;
        } catch (error) {
            console.log(error);
        }
    }else {
    }
    return [];
}
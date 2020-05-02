interface Routes {
    home: string,
    note: (id?: number)=> string,
    edit: (id?: number)=> string,
    add: string
}

const HOME:string = "/";
const NOTE:string = "/note/:id";
const EDIT:string = "/edit/:id";
const ADD:string = "/add";

const routes: Routes = {
    home: HOME,
    note: (id) => {
        if(id){
            return `/note/${id}`;
        }
        return NOTE;
    },
    edit: (id) => {
        if(id){
            return `/edit/${id}`;
        }
        return EDIT;
    },
    add: ADD
}

export default routes;
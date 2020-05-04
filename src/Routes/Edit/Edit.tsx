import React from "react";
import { Mutation, Query } from "react-apollo";
import { EDIT_NOTE, GET_NOTE } from "queries";
import Editor from "Components/Editor";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface PropsId {
    id?: string
}

const Edit: React.SFC<RouteComponentProps<PropsId>> = ({match, history}) =>{
    const {push} = history;
    const{params:{id}} = match;
    return (
        <Query query={GET_NOTE} variables={{id:Number(id)}}>
            {({data}:any)=>{
                return data && data.note ? <Mutation mutation={EDIT_NOTE}>
                    {(editNote:any) => <Editor onSave={editNote} redirect={push} id={data?.note?.id} title={data?.note?.title} content={data?.note?.content}  />}
                </Mutation>:null
                }}
        </Query>)
}

export default withRouter(Edit);
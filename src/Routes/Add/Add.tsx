import React from "react";
// import styled from "styled-components";
import { Mutation } from "react-apollo";
import { CREATE_NOTE } from "queries";
import Editor from "Components/Editor";
import { withRouter, RouteComponentProps } from "react-router-dom";

const Add: React.SFC<RouteComponentProps> = ({history}) =>{
    const {push} = history;
    return (
        <Mutation mutation={CREATE_NOTE}>
            {(createNote:any)=> {
                return <Editor onSave={createNote} redirect={push} /> 
            }}
        </Mutation>
    )
}

export default withRouter(Add);
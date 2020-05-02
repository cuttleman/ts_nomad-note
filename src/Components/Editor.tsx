import React, { useState } from "react";
import styled from "styled-components";
import TextareaAutosize from 'react-textarea-autosize';
import ReactMarkdown from "react-markdown";
import { GlobalContainer } from "./globalStyles";
import routes from "routes";
import { Button }from "Routes/Note/Note"

interface EVariables {
    variables:{
        title: string | {} | undefined,
        content: string | {} | undefined
    }
}
interface EProps {
    id?: number,
    title?: string,
    content?: string,
    onSave:(variables:EVariables)=>void,
    redirect: (path: string) => void
}
interface EState{
    id?: number | {},
    title?: string | {},
    content?: string | {}
}

const Container = styled.div`
    padding: 0 30px;
`;
const TitleContainer = styled.div`
    position: relative;
    margin-bottom: 30px;
`;

const Title = styled(TextareaAutosize)`
    margin-top: 40px;
    width: 270px;
    border: none;
    padding: 10px;
    background-color: #ffffff;
    display: flex;
    font-size: 28px;
    font-weight: 700;
    align-items: center;
    font-family: 'Gugi', cursive;
    border-radius: 0;
    border-bottom: 2px solid black;
`;
const Content = styled(TextareaAutosize)`
    width: 270px;
    padding: 10px;
    font-size: 20px;
    display: flex;
    border: none;
    border-radius: 0;
    border-bottom: 2px solid black;
    background-color: #ffffff;
    font-family: 'Gugi', cursive;
`;
const MContainer = styled.div`
    width: 250px;
    height: 190px;
    padding: 20px;
    overflow-y: auto;
    background-color: #ffffff;
    -webkit-box-shadow: 5px 10px 14px 3px #00000090;
    -moz-box-shadow: 5px 10px 14px 3px #00000090;
    box-shadow: 5px 10px 14px 3px #00000090;
`;

const Editor: React.FC<EProps> = (props:EProps) =>{
    const {id, title, content, onSave, redirect} = props;
    const [state, setState] = useState<EState>({
        id: id || "",
        title: title || "",
        content: content || ""
    })
    const onChange = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value, name } = event.target;
        setState({
            ...state,
            [name]: value
        })
    }
    const _onSave = () =>{
        onSave({ variables: { title:state?.title, content:state?.content } })
        redirect(routes.home);
    }
    return(
        <GlobalContainer>
            <Container>
                <MContainer>
                    <ReactMarkdown source={state?.content} />
                </MContainer>
                <TitleContainer>
                    <Title name="title" defaultValue={title?title:""} onChange={onChange} />
                    <Button onClick={_onSave}>
                        <i className="fas fa-file-import"></i>
                    </Button>
                </TitleContainer>
                <Content name="content" defaultValue={content?content:""} onChange={onChange} minRows={3} maxRows={3}/>
            </Container>
        </GlobalContainer>            
    ) 
}

export default Editor;
import React from "react";
import {Query} from "react-apollo";
import {Link} from "react-router-dom";
import styled from "styled-components";
import routes from "routes";
import { GET_NOTES } from "queries";
import GetNotes from "Components/GetNotes";
import { BtnAni, GlobalContainer, TitleAni } from "Components/globalStyles";

export interface NoteContent {
    __typename: string,
    id: number,
    title: string,
    content: string
}

export interface NotesProps {
    notes: Array<NoteContent>
}

interface DataProps {
    data: NotesProps
}

const Title = styled.div`
    font-size: 35px;
    font-weight: 600;
    margin-bottom: 10px;
    margin-left: 10px;
    transform: translateY(-5px);
    animation: ${TitleAni} 1.5s ease-in-out infinite;
`;
const TitleContainer = styled.div`
    width: 100%;
    position: fixed;
`;
const Button = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 20px;
    margin-left: 10px;
    &:active {
       animation: ${BtnAni} 0.2s linear;
    }
`;
const SubTitle = styled.div`
    font-family: 'Gaegu', cursive;
    font-weight: 700;
    font-size: 20px;
    opacity: 0.8;
    margin-left: 20px;
`;
const Contents = styled.div`
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 350px;
    overflow-y: auto;
`;

const Notes: React.SFC = () =>{
    return (
        <GlobalContainer>
            <TitleContainer>
                <Title>하루를 곱씹어보자</Title>
                <SubTitle>
                    차분히 생각해봐..
                    <Button>
                        <Link to={routes.add}>
                            <i className="fas fa-plus-square"></i>
                        </Link>
                    </Button>
                </SubTitle>
            </TitleContainer>
            <Contents>
                <Query query={GET_NOTES}>
                    {({data}: DataProps)=> data && data.notes? <GetNotes notes={data.notes}/>: null}
                </Query>
            </Contents>
        </GlobalContainer>
    )
}

export default Notes;
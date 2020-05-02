import React from "react";
import { Query } from "react-apollo";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import { GlobalContainer, BtnAni } from "Components/globalStyles";
import { GET_NOTE } from "queries";
import ReactMarkdown from "react-markdown";
import routes from "routes";

type NoteId = {
    id: string
}

type NoteProps = RouteComponentProps<NoteId>

const Container = styled.div`
    padding: 0 30px;
    max-width: 300px;
`;
const Title = styled.div`
    position: relative;
    height: 80px;
    background-color: #ffffff;
    display: flex;
    padding: 0 30px;
    font-size: 30px;
    font-weight: 700;
    align-items: center;
    margin-bottom: 30px;
    -webkit-box-shadow: 5px 10px 14px 3px #00000090;
    -moz-box-shadow: 5px 10px 14px 3px #00000090;
    box-shadow: 5px 10px 14px 3px #00000090;
`;
const Content = styled(ReactMarkdown)`
    height: 310px;
    padding: 10px 30px;
    overflow-y: auto;
    background-color: #ffffff;
    -webkit-box-shadow: 5px 10px 14px 3px #00000090;
    -moz-box-shadow: 5px 10px 14px 3px #00000090;
    box-shadow: 5px 10px 14px 3px #00000090;
`;
export const Button = styled.button`
    position: absolute;
    height: fit-content;
    width: fit-content;
    top: 0;
    bottom:0;
    right: 20px;
    margin: auto;
    background-color: transparent;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    i{
        font-size: 20px;
    }
    &:active {
       animation: ${BtnAni} 0.2s linear;
    }
`;
const Note: React.SFC<NoteProps> = ({match}:NoteProps) =>{
    const{id}=match.params;
    return (
        <Query query={GET_NOTE} variables={{id: Number(id)}}>
            {({data}:any)=> (
                    <GlobalContainer>
                        <Container>
                            <Title>
                                {data?.note?.title}
                                <Button>
                                    <Link to={routes.edit(Number(id))}>
                                        <i className="fas fa-edit"></i>
                                    </Link>
                                </Button>
                            </Title>
                            <Content source={data?.note?.content} />
                        </Container>
                    </GlobalContainer>
                )
            }
        </Query>
    )
}

export default withRouter(Note);
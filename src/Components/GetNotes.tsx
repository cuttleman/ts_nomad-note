import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import { NotesProps, NoteContent } from "Routes/Notes/Notes";
import routes from "routes";

const NLink = styled(Link)`
  margin-bottom: 25px;
`;

const Container = styled.div`
  width: 300px;
  background-color: white;
  max-width: 290px;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  -webkit-box-shadow: 5px 10px 14px 3px #00000090;
  -moz-box-shadow: 5px 10px 14px 3px #00000090;
  box-shadow: 5px 10px 14px 3px #00000090;
  transition: all 0.1s linear;
  &:active {
    transform: translateY(2px);
    -webkit-box-shadow: 4px 8px 10px 0px #00000090;
    -moz-box-shadow: 4px 8px 10px 0px #00000090;
    box-shadow: 4px 8px 10px 0px #00000090;
  }
`;
const Title = styled.div`
  width: 100%;
  font-size: 30px;
`;

const GetNotes: React.SFC<NotesProps> = ({notes}: NotesProps) => {
  const Notes =  notes.map((note: NoteContent)=> (
    <NLink to={routes.note(note.id)} key={note.id}>
      <Container>
        <Title>
          {note.title.length > 30 ? note.title.slice(0,15) : note.title }
        </Title>
      </Container>
    </NLink>));
  return (
      <>
        {Notes}
      </>
  )
};

export default GetNotes;
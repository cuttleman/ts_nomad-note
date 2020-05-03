import React, { useState } from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import { NotesProps, NoteContent } from "Routes/Notes/Notes";
import routes from "routes";
import { Button } from "Routes/Note/Note";
import { Mutation } from "react-apollo";
import { DEL_NOTE } from "queries";
import DelModal from "./delModal";

export interface modalState {
  check?: boolean,
  id: number | null
  mutation?: any
}

const ComponentBox = styled.div`
  position: relative;
  margin-bottom: 25px;
`;

const NLink = styled(Link)`
`;

const Container = styled.div`
  width: 270px;
  background-color: white;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 20px;
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
  let modal;
  const [modalE, setModalE] = useState<modalState>({
    check: false,
    id: null,
    mutation: null
  });
  const Notes =  notes.map((note: NoteContent)=> (
    <ComponentBox key={note.id}>
      <NLink to={routes.note(note.id)}>
        <Container>
          <Title>
            {note.title.length > 30 ? note.title.slice(0,15) : note.title }
          </Title>
        </Container>
      </NLink>
      <Mutation mutation={DEL_NOTE}>
          {(delNote:any) => {
            return (
              <Button onClick={() => setModalE({ check: !modalE.check, id: note.id , mutation: delNote})}>
                <i className="fas fa-trash-alt"></i>
              </Button>
            )}}
      </Mutation>
    </ComponentBox>
    ));
    // modal
    if(modalE.check){
      modal = <DelModal modal={modalE} setModal={setModalE} />
    }
  return (
      <>
        {Notes}
        {modal}
      </>
  )
};

export default GetNotes;
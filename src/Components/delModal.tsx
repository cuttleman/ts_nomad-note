import React from "react";
import styled from "styled-components";
import {modalState} from "Components/GetNotes"
import {HomeAni} from "Components/globalStyles"

interface DProps {
    modal: modalState,
    setModal: any
}

const ModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 460px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${HomeAni} 0.2s linear forwards;
`;

const Container = styled.div`
    display: flex;
    width: 150px;
    justify-content: space-around;
    background-color: white;
    padding: 25px 30px;
    border: 1px solid black;
    box-shadow: 0 0 10px black;
`;

const RemoveBtn = styled.button`
    border-radius: 0;
    padding: 5px 10px;
    border: none;
    outline: none;
    background-color: red;
    color: white;
    font-size: 18px;
`;
const Cancel = styled.button`
    border-radius: 0;
    padding: 5px 10px;
    border: none;
    outline: none;
    background-color: #b2bec3;
    font-size: 18px;
`;

const DelModal: React.SFC<DProps> = ({modal, setModal}:DProps) =>{
    const DelEvent = () =>{
        modal.mutation({variables:{id: modal.id}})
        setModal({check: false})
    }
    return (
    <ModalBox>
        <Container>
            <RemoveBtn onClick={() => DelEvent()}>삭제</RemoveBtn>
            <Cancel onClick={() => setModal({check: false})}>취소</Cancel>
        </Container>
    </ModalBox>
    )
}

export default DelModal;
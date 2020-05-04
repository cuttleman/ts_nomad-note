import React from "react";
import { HomeBtn } from "./globalStyles";
import { withRouter } from "react-router-dom";

export default withRouter(({history:{goBack},location:{pathname}}): JSX.Element | null => {
    return (pathname !== "/" ?
    <HomeBtn onClick={()=> goBack()}>
      <i className="fas fa-arrow-circle-left"></i>
    </HomeBtn>:null)
})
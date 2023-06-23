import React from "react";
import { BsArrowRight } from "react-icons/bs";

function Expericence() {
  return (
    <>
      <h2 className="section_title">Expericence</h2>
      <div className="experiance_details">
        <div className="expriance">
          <div className="arrow">
            <BsArrowRight />
          </div>
          <h4 className="expriance_title">Web Designer</h4>
          <p className="company_name">
            BM Coder | <small>2021-Present</small>
          </p>
          <p className="section_para">
            Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet
            dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea
            lorem diam ea lorem eirmod duo sit ipsum stet lorem diam
          </p>
        </div>
        <div className="expriance">
          <div className="arrow">
            <BsArrowRight />
          </div>
          <h4 className="expriance_title">ReactJs & NextJs Developer</h4>
          <p className="company_name">
            BM Coder | <small>2023-Present</small>
          </p>
          <p className="section_para">
            Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet
            dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea
            lorem diam ea lorem eirmod duo sit ipsum stet lorem diam
          </p>
        </div>
      </div>
    </>
  );
}

export default Expericence;

import React from "react";



const Aboutme = () => {

  const mydetails = 
    {
      Name: "Alpesh Desai",
      Birthday: "16 January 1994",
      Degree: "Bachelor",
      Experience: "2 Years",
      Mobile: "+91 84016 94091",
      Email: "adesai9594@gmail.com",
      Address: "Ahmedabad,Gujarat",
    };

  const renderDetails = () => {
    return Object.entries(mydetails).map(([key, value]) => (
      <li key={key} className="detail_item">
        <span>{key}: </span> {value}
      </li>
    ));
  };

  return (
    <>
      <h2 className="section_title">About Me</h2>
      <p className="section_para">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores eius
        saepe, eaque cupiditate, quae unde eos maxime magnam, quo officiis
        delectus sed ad? Laborum accusamus est fugiat doloremque qui aspernatur.
      </p>
      <ul className="mydetails">{renderDetails()}</ul>
    </>
  );
};

export default Aboutme;

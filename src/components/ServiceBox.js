import React from "react";

const ServiceBox = ({icon,title,desc}) => {
  return (
    <div className="service_box">
      <div className="service_box_icon">{icon}</div>
      <h4 className="service_title">{title}</h4>
      <p className="service_desc">{desc}</p>
    </div>
  );
};

export default ServiceBox;

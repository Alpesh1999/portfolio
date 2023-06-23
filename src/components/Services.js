import React from "react";
import ServiceBox from "./ServiceBox";
import { FaLaptopCode, FaReact, FaSearch } from "react-icons/fa";
import { AiFillAndroid } from "react-icons/ai";

const Services = () => {
  return (
    <>
      <h2 className="section_title">Services</h2>
      <div className="services">
        <ServiceBox
          icon={<FaLaptopCode />}
          title="Web Design"
          desc="Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore"
        />
        <ServiceBox
          icon={<AiFillAndroid />}
          title="App Design"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id ipsum a turpis consequat tempus."
        />
        <ServiceBox
          icon={<FaReact />}
          title="React & Next Develop"
          desc="Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore"
        />
        <ServiceBox
          icon={<FaSearch />}
          title="SEO"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id ipsum a turpis consequat tempus."
        />
      </div>
    </>
  );
};

export default Services;

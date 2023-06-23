"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AiFillStar, AiOutlinePlus } from "react-icons/ai";
import { FaLaptopCode, FaMobileAlt } from "react-icons/fa";

import portfolio1 from "../app/img/portfolio-1.png";
import portfolio2 from "../app/img/portfolio-2.jpg";
import portfolio3 from "../app/img/portfolio-3.jpg";
import portfolio4 from "../app/img/portfolio-4.jpg";
import Image from "next/image";

const MyPortfolio = () => {
  // State for active tab
  const [activeTab, setActiveTab] = useState("All");

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <h2 className="section_title">Portfolio</h2>
      <div className="portfolio">
        {/* Tab buttons */}
        <div className="tab-buttons">
          <button
            className={activeTab === "All" ? "active" : ""}
            onClick={() => handleTabClick("All")}
          >
            <AiFillStar />
            All
          </button>
          <button
            className={activeTab === "Design" ? "active" : ""}
            onClick={() => handleTabClick("Design")}
          >
            <FaLaptopCode />
            Design
          </button>
          <button
            className={activeTab === "Development" ? "active" : ""}
            onClick={() => handleTabClick("Development")}
          >
            <FaMobileAlt />
            Development
          </button>
        </div>

        {/* Portfolio items */}
        <div className="portfolio-items">
          {/* Render portfolio items based on active tab */}
          {/* Replace the code below with your actual portfolio items */}
          {activeTab === "All" && (
            <>
              <div className="portfolio-item">
                <div className="portfolio_imgbox">
                  <Image src={portfolio1} alt="img" />
                  <div className="overlay_box">
                    <Link href="#" className="portfolio_link">
                      <AiOutlinePlus />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="portfolio-item">
                <div className="portfolio_imgbox">
                  <Image src={portfolio2} alt="img" />
                  <div className="overlay_box">
                    <Link href="#" className="portfolio_link">
                      <AiOutlinePlus />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="portfolio-item">
                <div className="portfolio_imgbox">
                  <Image src={portfolio3} alt="img" />
                  <div className="overlay_box">
                    <Link href="#" className="portfolio_link">
                      <AiOutlinePlus />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="portfolio-item">
                <div className="portfolio_imgbox">
                  <Image src={portfolio4} alt="img" />
                  <div className="overlay_box">
                    <Link href="#" className="portfolio_link">
                      <AiOutlinePlus />
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === "Design" && (
            <>
              <div className="portfolio-item">
                <div className="portfolio_imgbox">
                  <Image src={portfolio1} alt="img" />
                  <div className="overlay_box">
                    <Link href="#" className="portfolio_link">
                      <AiOutlinePlus />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="portfolio-item">
                <div className="portfolio_imgbox">
                  <Image src={portfolio2} alt="img" />
                  <div className="overlay_box">
                    <Link href="#" className="portfolio_link">
                      <AiOutlinePlus />
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === "Development" && (
            <>
              <div className="portfolio-item">
                <div className="portfolio_imgbox">
                  <Image src={portfolio3} alt="img" />
                  <div className="overlay_box">
                    <Link href="#" className="portfolio_link">
                      <AiOutlinePlus />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="portfolio-item">
                <div className="portfolio_imgbox">
                  <Image src={portfolio4} alt="img" />
                  <div className="overlay_box">
                    <Link href="#" className="portfolio_link">
                      <AiOutlinePlus />
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MyPortfolio;

import React from "react";

const Skills = () => {
  const myskills = [
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 85 },
    { name: "JavaScript", percentage: 65 },
    { name: "Bootstrap", percentage: 80 },
    { name: "React", percentage: 60 },
    { name: "Next.js", percentage: 40 },
  ];
  return (
    <>
      <h2 className="section_title">Skills</h2>
      <div className="myskills">
        {myskills.map((skill, index) => (
          <div key={index} className="skill">
            <h3>{skill.name}</h3>
            <span>{`${skill.percentage}%`}</span>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;

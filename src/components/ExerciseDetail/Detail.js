import React from "react";

import { IoFitnessSharp } from "react-icons/io5";
import { IoMdFitness } from "react-icons/io";
import { MdSportsHandball } from "react-icons/md";

import "./ExerciseDetail.css";

const Detail = ({ item }) => {
  const { name, bodyPart, target, gifUrl, equipment } = item;
  const icons = [
    {
      icon: <IoFitnessSharp size={40} />,
      name: target,
    },
    {
      icon: <MdSportsHandball size={40} />,
      name: bodyPart,
    },
    {
      icon: <IoMdFitness size={40} />,
      name: equipment,
    },
  ];

  return (
    <div className="detail_container">
      <div className="detail_main">
        <img className="detail_image" src={gifUrl} alt={name} />
        <div className="detail_text_container">
          <p className="detail_name">{name}</p>
          <span className="detail_explain">
            Exercises keep you strong. {name} bup is one of the best exercises
            to target your {target}. It will help you improve your mood and gain
            energy.
          </span>
          <div className="icons_container">
            {icons.map(({ icon, name }) => (
              <span className="icon">
                {icon} <p className="icon_title">{name}</p>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

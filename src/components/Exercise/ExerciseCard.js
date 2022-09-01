import React from "react";
import { Link } from "react-router-dom";
import "./Exercise.css";

const ExerciseCard = ({ item }) => {
  return (
    <Link to={`/exercise/${item.id}`} className="exercise_card_container">
      <img
        className="exercise_card_image"
        src={item.gifUrl}
        alt={item.name}
        loading="lazy"
      />
      <div>
        <p className="exercise_card_title">
          {" "}
          {item.name.slice(0, 20)} {item.name.length > 20 ? "..." : ""}{" "}
        </p>
        <div className="exercise_card_button_container">
          <button className="exercise_card_button1 card_button">
            {item.bodyPart}
          </button>
          <button className="exercise_card_button2  card_button">
            {item.target.slice(0, 10)}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ExerciseCard;

import React, { useState } from "react";
import Exercise from "../components/Exercise/Exercise";
import Home from "../components/Home/Home";
import Search from "../components/Search/Search";

const HomePages = () => {
  const [exercise, setExercise] = useState([]);
  const [bodyName, setBodyName] = useState([]);
  const [selectBodyPart, setSelectBodyPart] = useState("all");
  const [more, setMore] = useState(9);
  return (
    <div>
      <Home />
      <Search
        exercise={exercise}
        setExercise={setExercise}
        setBodyName={setBodyName}
        setMore={setMore}
      />
      <Exercise
        selectBodyPart={selectBodyPart}
        setSelectBodyPart={setSelectBodyPart}
        bodyName={bodyName}
        exercise={exercise}
        setExercise={setExercise}
        setBodyName={setBodyName}
        more={more}
        setMore={setMore}
      />
    </div>
  );
};

export default HomePages;

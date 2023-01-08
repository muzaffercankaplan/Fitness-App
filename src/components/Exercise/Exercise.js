import React, { useEffect } from "react";
import { exerciseOptions, fetchData } from "../../Utils/FetchData";
import "./Exercise.css";
import ExerciseCard from "./ExerciseCard";
import SelectBar from "./SelectBar/SelectBar";

const Exercise = ({
  bodyName,
  exercise,
  setExercise,
  selectBodyPart,
  setSelectBodyPart,
  setBodyName,
  more,
  setMore,
}) => {
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if (selectBodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectBodyPart} `,
          exerciseOptions
        );
      }

      setExercise(exercisesData);
      setMore(9);
    };

    fetchExercisesData();
  }, [selectBodyPart, setExercise, setMore]);

  return (
    <div className="body_container">
      <div className="scroll_container">
        {bodyName.map((item, i) => (
          <div key={item.id || i}>
            <SelectBar
              item={item}
              selectBodyPart={selectBodyPart}
              setSelectBodyPart={setSelectBodyPart}
            />
          </div>
        ))}
      </div>
      <div className="exercise_container">
        <p className="exercise_title"> Show Results </p>
        <div className="exercise_main">
          {exercise?.slice(0, more).map((item, i) => (
            <ExerciseCard key={i} item={item} />
          ))}
        </div>
        {exercise.length > 0 && (
          <div className="more_container">
            <div onClick={() => setMore(more + 9)} className="more_show">
              more show...
            </div>
            {/* <BsFillArrowUpCircleFill  onClick={() => setMore(9)} size={30} /> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Exercise;

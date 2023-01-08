import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "../components/ExerciseDetail/Detail";

import { exerciseOptions, fetchData } from "../Utils/FetchData";

const ExerciseDetail = () => {
  const [oneExercise, setOneExercise] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const oneFetchData = async () => {
      const oneUrl = `https://exercisedb.p.rapidapi.com`;
      // const youtubeUrl = `https://youtube-search-and-download.p.rapidapi.com`;

      const one = await fetchData(
        `${oneUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setOneExercise(one);
    };

    oneFetchData();
  }, [id]);

  return (
    <div>
      <Detail item={oneExercise} />
      {/* <ExerciseVideo /> */}
    </div>
  );
};

export default ExerciseDetail;

import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../../Utils/FetchData";

import "./Search.css";

const Search = ({ setExercise, setBodyName, setMore }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPart = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyName(["all", ...bodyPart]);
    };

    fetchExerciseData();
  }, [setBodyName]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchExercise = exerciseData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search)
      );

      setExercise(searchExercise);
    }
    setSearch("");
    setMore(9);
  };

  return (
    <div id="Exercise" className="search_container">
      <p className="search_title">
        Awesome Exercise You <br /> Should Know
      </p>
      <form onSubmit={handleSearch} className="search_main">
        <input
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          className="search_input"
        />
        <button className="search_button">Search</button>
      </form>
    </div>
  );
};

export default Search;

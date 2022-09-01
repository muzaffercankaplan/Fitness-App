export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d32402f2d7msh5d4b6f174cf5a7fp1a02ecjsndde81b47f2e0",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

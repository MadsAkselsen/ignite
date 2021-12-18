import axios from "axios";
import moment from "moment";

const rawgAxios = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: process.env.REACT_APP_RAWG_API,
  },
});

export const getPopularGames = async () => {
  const today = moment().format("YYYY-MM-DD");
  const lastYear = moment().add(-1, "year").format("YYYY-MM-DD");

  const { data } = await rawgAxios.get("/games", {
    params: {
      dates: `${lastYear},${today}`,
      ordering: "-rating",
      page_size: 10,
    },
  });
  return data ;
};

export const getUpcomingGames = async () => {
    const today = moment().format("YYYY-MM-DD");
    const nextYear = moment().add(1, "year").format("YYYY-MM-DD");
  
    const { data } = await rawgAxios.get("/games", {
      params: {
        dates: `${today},${nextYear}`,
        ordering: "-added",
        page_size: 10,
      },
    });
    return data ;
};

export const getNewGames = async () => {
    const today = moment().format("YYYY-MM-DD");
    const lastYear = moment().add(-1, "year").format("YYYY-MM-DD");
  
    const { data } = await rawgAxios.get("/games", {
      params: {
        dates: `${lastYear},${today}`,
        ordering: "-released",
        page_size: 10,
      },
    });
    return data ;
};
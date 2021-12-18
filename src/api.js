import axios from "axios";
import moment from "moment";

const rawgAxios = axios.create({
  baseURL: "https://api.rawg.io/api",

  params: {
    key: process.env.REACT_APP_RAWG_API,
  },
});

export const popularGames = async () => {
  const today = moment().format("YYYY-MM-DD");
  //const nextYear = moment().add(1, "year").format("YYYY-MM-DD");
  const lastYear = moment().add(-1, "year").format("YYYY-MM-DD");

  const { data } = await rawgAxios.get("/games", {
    params: {
      dates: `${today},${lastYear}`,
      ordering: "-rating",
      page_size: 10,
    },
  });
  console.log(data)
  return data ;
};

popularGames()
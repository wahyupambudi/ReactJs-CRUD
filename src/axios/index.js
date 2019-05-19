import axios from "axios";

const url = "https://expres789.herokuapp.com/";

export default axios.create({
  baseURL: url
});

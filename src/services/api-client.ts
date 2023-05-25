import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "1d045460db754350b287d7523686b6e1",
  },
});

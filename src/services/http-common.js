import axios from "axios";
export default axios.create({
  baseURL: "https://qigo043dp3.execute-api.us-east-1.amazonaws.com/apirpa",
  headers: {
    "Content-type": "application/json",
  },
});

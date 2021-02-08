import Axios from "axios";

export const API_KEY = "f53dd4aea5bfc8ecd850fcbe1b08921e";

export const axios = Axios.create({
  headers: {
    "content-type": "application/json",
    "subscription-key": "f53dd4aea5bfc8ecd850fcbe1b08921e",
  },
});

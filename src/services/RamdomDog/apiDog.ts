import axios from "axios";

export const apiDog = axios.create({
    baseURL:
      "https://random.dog",
  });
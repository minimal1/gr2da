/** @format */

import axios from "../../server/node_modules/axios";

export const getGreetings = async () => {
  const response = await axios({
    url: "/api/greetings",
    method: "GET",
  });
  return response;
};

export const sendGreeting = async (greeting) => {
  const response = await axios({
    url: "/api/greeting",
    method: "POST",
    data: {
      greeting,
    },
  });
  return response;
};

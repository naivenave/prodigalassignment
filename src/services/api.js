import axios from "axios";

const url = "https://damp-garden-93707.herokuapp.com/";

export const getData1 = async (name) => {
  return await axios.get(url + name);
};
export const postData1 = async (name, data) => {
  return await axios.post(url + name, data);
};

const headers = {
  user_id: "24b456",
};

export const getData2 = async (name) => {
  return await axios.get(url + name, { headers });
};

export const postData2 = async (name, data) => {
  return await axios.post(url + name, data, { headers });
};

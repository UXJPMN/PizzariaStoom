import axios from 'axios';

//No caso não foi criado um .env pois é somente uma url e de uma mockAPI
const url = 'http://localhost:3021/pizza';

export const fetchPizzaData = async () => {
  const response = await axios.get(url);

  return response.data;
}

export const sendPizzaData = async (payload) => {
  const response = await axios.post(url, payload);

  return response.data;
};

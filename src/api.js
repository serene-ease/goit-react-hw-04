import axios from 'axios';

const API_KEY = 'xF9_PmGrqZtQpKHT7N508uvU49VG_ujQNjjqFH2CnJw';
axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers = 'Accept-Version: v1'

export const fetchImages = async (query, page) => {
  const res = await axios.get(`search/photos/?client_id=${API_KEY}`, {
    params: {
        query,
        page,
        per_page: 12
    },});
    console.log(res);
  return res.data;
};

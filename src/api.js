import axios from 'axios';

const API_KEY = 'xF9_PmGrqZtQpKHT7N508uvU49VG_ujQNjjqFH2CnJw';
axios.defaults.baseURL = 'https://api.unsplash.com/';
// axios.defaults.headers.common['Authorization'] = API_KEY;
// axios.defaults.headers = 'Accept-Version: v1';

export const fetchImages = async (query, page) => {
  console.log('api  :', query);
  const res = await axios.get(`search/photos/?client_id=${API_KEY}`, {
      params: {
      query,
      page,
      per_page: 50
    ,
    }
   
  });
  // console.log('response:',res);
  console.log('response.data :',res.data);
  return res.data;
};

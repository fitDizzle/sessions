import axios from 'axios';
const uri = process.env.REACT_APP_BASE_URI;

const API = {
  getAllClubs: () => {
    return axios.get(uri + 'clubs/').then((res) => {
      return res;
    }).catch((err) => console.log(err));
  },
};

export default API.getAllClubs;
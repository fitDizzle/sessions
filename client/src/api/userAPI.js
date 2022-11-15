import axios from 'axios';
const uri = process.env.REACT_APP_BASE_URI;

const UserAPI = {
  createUser: ({ firstName, lastName, email, zip_code, city, state, password }) => {
    const user = { firstName, lastName, email, zip_code, city, state, password };

    return axios.post(uri + '/user/', user).then((res) => {
      return res;
    }).catch((err) => console.log(err));
  },

  getUser: ({ email, password∂ }) => {
    return axios.get().then((res) => {
      return res.data.results;
    }).catch((err) => console.log(err));
  },
};

export default UserAPI;
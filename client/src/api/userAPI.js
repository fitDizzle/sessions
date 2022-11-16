import axios from 'axios';
const uri = process.env.REACT_APP_BASE_URI;

const UserAPI = {
  createUser: ({ firstName, lastName, email, city, state, zip_code, password }) => {
    const user = { firstName, lastName, email, city, state, zip_code, password };

    return axios.post(uri + 'user/', user).then((res) => {
      return res;
    }).catch((err) => console.log(err));
  },

  getUser: (credentials) => {
    console.log(credentials);
    return axios.get(uri + `user/`, { headers: credentials }).then((res) => {
      return res.data.results;
    }).catch((err) => console.log(err));
  },
};

export default UserAPI;
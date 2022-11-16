import axios from 'axios';
const uri = process.env.REACT_APP_BASE_URI;

const ListingAPI = {
  createListing: ({ userId, clubName, clubAddress, clubCity, clubState, clubZipCode, sessionCount, sessionPrice }) => {
    const listing = { userId, clubName, clubAddress, clubCity, clubState, clubZipCode, sessionCount, sessionPrice };
    console.log(listing)

    return axios.post(uri + 'listings/', listing).then((res) => {
      return res;
    }).catch((err) => console.log(err));
  },

  getListing: (credentials) => {
    console.log(credentials);
    return axios.get(uri + `user/`, { headers: credentials }).then((res) => {
      return res.data.results;
    }).catch((err) => console.log(err));
  },

  getAllListings: () => {
    return axios.get(uri + `listings/`).then((res) => {
      return res.data;
    }).catch((err) => console.log(err));
  },
};

export default ListingAPI;
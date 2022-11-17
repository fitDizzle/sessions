import React from "react";
import { userSelector } from "react-redux";

const Profile = () => {
  const user = userSelector((state) => state.user.value);

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user.firstName + ' ' + user.lastName}</p>
      <p>email: {user.email}</p>
    </div>
  )
};

export default Profile;
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProfileBanner from "../components/ProfileBanner";
import ProfileIMG from "../components/ProfileIMG";

const Friend = () => {
  const [friend, setFriend] = useState([]);

  const getFriend = async () => {
    const { data } = await axios.get(
      "https://json-worksop-02.herokuapp.com/users"
    );
    setFriend(data);
  };

  useEffect(() => {
    getFriend();
  }
  , []);

  return (
    <div>
      <ProfileBanner />
      <ProfileIMG data={friend} />
    </div>
  );
};

export default Friend;

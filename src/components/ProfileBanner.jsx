import React from "react";
import { Avatar, Button } from "@mui/material";
import { Image } from "react-bootstrap";

const ProfileBanner = () => {
  return (
    <div>
      <div>
        <div style={{height: '30vh'}} className='overflow-hidden'>
            <Image src="https://res.cloudinary.com/dy8n5pg1g/image/upload/v1654803725/workshop/1_v9gdjx.png" alt="banner" />
        </div>
        <div className="d-flex justify-content-around text-center align-items-center my-5">
            <div>
              <p>10.7 M</p>
              <small>Followers</small>
            </div>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <div>
              <p>10.7 M</p>
              <small>Likes</small>
            </div>
        </div>
      </div>

      <div className="text-center">
          <h1>Name</h1>
          <p>Description</p>
          <Button variant="contained" className="mx-1" style={{width: '40%'}}>
            Follow
          </Button>
          <Button variant="contained" className="mx-1" style={{width: '40%'}}>
            Messages
          </Button>
      </div>
    </div>
  );
};

export default ProfileBanner;

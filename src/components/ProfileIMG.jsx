import axios from "axios";
import React, { useEffect, useState } from "react";

const ProfileIMG = ({ data }) => {

  return (
    <div>
      {data.map((element) => {
        return (
          <div key={element.fotos[1].id}>
            <img src={element.fotos[0].imagen} alt="" />
            <img src={element.fotos[1].imagen} alt="" />
            <img src={element.fotos[2].imagen} alt="" />
            <img src={element.fotos[3].imagen} alt="" />
            <img src={element.fotos[4].imagen} alt="" />
            <img src={element.fotos[5].imagen} alt="" />
            
          </div>
        );
      })}
    </div>
  );
};

export default ProfileIMG;

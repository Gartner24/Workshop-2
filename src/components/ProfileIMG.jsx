import React from "react";

const ProfileIMG = ({ data }) => {
  // console.log(data[0].fotos.map(foto => foto.id));
  //   const itemData = data.map((item) => item.fotos);
  //   itemData.map((item) => {
  //   })
  const newData = data.map(foto => foto.fotos)
  const newnewData = newData.map(foto => foto.forEach(e => {return e}))
  return (
    <div>
        {
            // newnewData.forEach(e=> )
        }
    </div>
  );
};

export default ProfileIMG;

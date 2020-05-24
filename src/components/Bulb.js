import React from "react";

function Bulb({ bulbsInfo, changeBulbStatus, id }) {
  return (
    <div>
      <img
        src={
          bulbsInfo.bulbStatus["bulb" + id]
            ? bulbsInfo.bulbLinks.shine
            : bulbsInfo.bulbLinks.dark
        }
        alt=""
        onClick={changeBulbStatus}
      />
    </div>
  );
}

export default Bulb;

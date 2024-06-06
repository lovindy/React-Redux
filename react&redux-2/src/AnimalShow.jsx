import React, { useState } from "react";
import kdam from "./svg/kdam.png";
import trey from "./svg/trey.png";
import kla from "./svg/kla.png";
import klok from "./svg/klok.png";
import pkorng from "./svg/pkorng.png";
import mon from "./svg/mon.png";

const pngMap = {
  kdam,
  trey,
  kla,
  klok,
  pkorng,
  mon,
};

const AnimalShow = ({ type }) => {
  return (
    <div>
      <img src={pngMap[type]} alt="Animal image" />
    </div>
  );
};

export default AnimalShow;

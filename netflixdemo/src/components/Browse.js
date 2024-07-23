import React, { useEffect } from "react";
import Header from "./Header";
import useNowMovie from "../hooks/useNowMovie";
import MainCon from "./MainCon";
import SecCon from "./SecCon";

const Browse = () => {
  useNowMovie();
  return (
    <div>
      <Header />
      <MainCon />
      <SecCon />
    </div>
  );
};

export default Browse;

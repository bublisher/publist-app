//import React, { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";

const View = () => {
  //const [data, setData] = useState({});

  let { no } = useParams();

  //useEffect(() => {}, []);

  return (
    <>
      <div>View {no}</div>
    </>
  );
};

export default View;

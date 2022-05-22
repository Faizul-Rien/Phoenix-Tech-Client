import React from "react";
import error from '../../Images/404.webp';

const NotFound = () => {
  return (
    <div>
      <img style={{height:'580px'}} className="w-full" src={error} alt="" />
    </div>
  );
};

export default NotFound;

import React from "react";
import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <header className="text-white">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
        <img src={profile} alt="" />
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { ReactComponent as StoreLogo } from "../../assets/images/Logo.svg";

const Header: React.FC = () => {
  return (
    <header>
      <div className="container py-6">
        <div className="row">
          <div className="col-lg-4">
            <StoreLogo />
          </div>
          <div className="col-lg-8 d-flex flex-row align-items-center justify-content-center">
            <h1>Shopping List</h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

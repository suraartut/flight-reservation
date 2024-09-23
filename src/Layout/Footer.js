import React from "react";
import "./Footer.css"; // Footer için stil dosyasını içeri aktar

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container mx-auto">
        <p className="my-0.5">
          &copy; {currentYear} Flight Reservation System. All rights reserved.
        </p>
        <p className="my-0.5">Created by Schiphol</p>
      </div>
    </footer>
  );
};

export default Footer;

import styles from "./Header.module.css";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="bg-[#ec1d24] flex justify-center mb-20">
      <ul>
        <li>
          <a href="/" className={styles.title}>
            MARVEL APP
          </a>
        </li>
      </ul>
    </nav>
  );
};

import styles from "./Header.module.css";
import React from "react";

export const Navbar = () => {
  return (
    <section className="bg-[#ec1d24] flex justify-center mb-20">
      <h1 className={styles.title}>MARVEL APP</h1>
    </section>
  );
};

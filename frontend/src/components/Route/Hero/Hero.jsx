import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          LubriFiltres<br />
        </h1>
        <h6 className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
        Le N°1 de la distribution en gros de Lubrifiants et filtres automobiles en Tunisie.
        </h6>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                   Passer une commande !
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

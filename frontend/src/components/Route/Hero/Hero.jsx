import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundColor: "#cccccc",
      }}
      
    >
      <div className={`${styles.section} w-[60%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#0f0e0e] font-[600] capitalize`}
        >
          LubriFiltres<br />
        </h1>
        <h5 className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
        Le site N°1 de la distribution en gros de Lubrifiants et filtres automobiles en Tunisie.
        </h5>
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

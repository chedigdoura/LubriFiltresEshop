import React from "react";
import styles from "../../styles/styles";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="flex justify-between w-full">
        <div className="flex items-start">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/11/Shell-Logo-700x394.png"
            alt=" Shell"
            style={{width:"150px", objectFit:"contain"}}
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://logos-world.net/wp-content/uploads/2023/05/TotalEnergies-Logo-500x281.png"
            style={{width:"150px", objectFit:"contain"}}
            alt="Total Energie - logo"
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://logos-world.net/wp-content/uploads/2023/03/Motul-Logo-500x281.png"
            style={{width:"150px", objectFit:"contain"}}
            alt="Motul-logo"
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://logos-world.net/wp-content/uploads/2023/02/Mobil-Logo-500x281.png"
            style={{width:"150px", objectFit:"contain"}}
            alt="Mobil-logo"
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://logos-world.net/wp-content/uploads/2022/07/Castrol-Logo-500x281.png"
            style={{width:"150px", objectFit:"contain"}}
            alt="Castrol-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;

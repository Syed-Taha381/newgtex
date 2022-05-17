import Link from "next/link";
import styles from "../../styles/Home.module.css";
import {
    FaChevronRight
  } from "react-icons/fa";

const Connect = () => {
  return (
    <div className={`${styles.connectBg} mt-[44px]`}>
      <div className="px-[15px]">
        <h4 className="text-[28px] black-color semiblod font-medium leading-[31px] text-center my-[22px]">
          CONNECT
        </h4>
        <p className="mb-[25px] lg:text-[18px] text-[13px] leading-[26px] medium font-normal black-color text-center">
          The best products and services built for the best people. <br />Sign up to
          enjoy 20% off your first order.
        </p>
        <div className="relative">
            <input type="text" name="email" placeholder="Enter your email address" className="lg:w-[543.2px] w-[100%] py-[5px] px-[15px] h-[45px] border-[0] medium font-normal text-[11px] leading-[16px] inputColor focus:outline-none" />
            <FaChevronRight className="absolute top-[40%] right-[16px] text-[10px] leading-[10px] inputColor font-normal" />
        </div>
      </div>
    </div>
  );
};

export default Connect;

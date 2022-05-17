import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { FaInstagram } from "react-icons/fa";
import first from "../../assets/images/instagram/1.jpg";
import second from "../../assets/images/instagram/2.jpg";
import third from "../../assets/images/instagram/3.jpg";
import fourth from "../../assets/images/instagram/4.jpg";
import fifth from "../../assets/images/instagram/5.jpg";
import sixth from "../../assets/images/instagram/6.jpg";
import seven from "../../assets/images/instagram/7.jpg";

const InstaFeed = () => {
  return (
    <>
      <div className="text-center mt-[27.5px]">
        <h3 className="uppercase text-[28px] leadimg-[31px] black-color semiblod font-medium mb-[20px] text-center">
          LOOKS YOU LOVE
        </h3>
        <p className="text-[16px] leading-[28px] black-color font-bold text-center mb-[15px]">
          Here’s what your colleagues are loving right now. Tag @medelita.co for
          your chance to be featured.
        </p>
      </div>
      <div className="px-[20px] flex justify-between">
        <div
          className={`w-[39%] h-[513px] ${styles.firstImg} ${styles.aaja} relative`}
        >
          <Image  alt="image" src={first} className={`cursor-pointer ${styles.firstImg}`} />
          <span
            className={`absolute bg-[#e1e1e1] top-[0] left-[0] bottom-[0] right-[0] overflow-hidden w-[100%] h-[100%] cursor-pointer opacity-[0.7] ${styles.showme}`}
          >
            <FaInstagram className="text-[35px] black-color font-medium h-[100%] m-auto black" />
          </span>
        </div>
        <div className="w-[19.5%]">
          <div className={`${styles.second} relative ${styles.aaja}`}>
            <Image  alt="image" src={second} className={`${styles.second}`} />
            <span
              className={`absolute bg-[#e1e1e1] top-[0] left-[0] bottom-[0] right-[0] overflow-hidden w-[100%] h-[100%] cursor-pointer opacity-[0.7] ${styles.showme}`}
            >
              <FaInstagram className="text-[35px] black-color font-medium h-[100%] m-auto black" />
            </span>
          </div>
         <div className={`${styles.second} relative ${styles.aaja}`}>
            <Image  alt="image" src={third} className={`${styles.second}`} />
            <span
              className={`absolute bg-[#e1e1e1] top-[0] left-[0] bottom-[0] right-[0] overflow-hidden w-[100%] h-[100%] cursor-pointer opacity-[0.7] ${styles.showme}`}
            >
              <FaInstagram className="text-[35px] black-color font-medium h-[100%] m-auto black" />
            </span>
          </div>
        </div>
        <div className="w-[19.5%]">
          <div className={`${styles.second} relative ${styles.aaja}`}>
            <Image  alt="image" src={fourth} className={`${styles.second}`} />
            <span
              className={`absolute bg-[#e1e1e1] top-[0] left-[0] bottom-[0] right-[0] overflow-hidden w-[100%] h-[100%] cursor-pointer opacity-[0.7] ${styles.showme}`}
            >
              <FaInstagram className="text-[35px] black-color font-medium h-[100%] m-auto black" />
            </span>
          </div>
         <div className={`${styles.second} relative ${styles.aaja}`}>
            <Image  alt="image" src={fifth} className={`${styles.second}`} />
            <span
              className={`absolute bg-[#e1e1e1] top-[0] left-[0] bottom-[0] right-[0] overflow-hidden w-[100%] h-[100%] cursor-pointer opacity-[0.7] ${styles.showme}`}
            >
              <FaInstagram className="text-[35px] black-color font-medium h-[100%] m-auto black" />
            </span>
          </div>
        </div>
        <div className="w-[19.5%]">
          <div className={`${styles.second} relative ${styles.aaja}`}>
            <Image  alt="image" src={sixth} className={`${styles.second}`} />
            <span
              className={`absolute bg-[#e1e1e1] top-[0] left-[0] bottom-[0] right-[0] overflow-hidden w-[100%] h-[100%] cursor-pointer opacity-[0.7] ${styles.showme}`}
            >
              <FaInstagram className="text-[35px] black-color font-medium h-[100%] m-auto black" />
            </span>
          </div>
         <div className={`${styles.second} relative ${styles.aaja}`}>
            <Image  alt="image" src={seven} className={`${styles.second}`} />
            <span
              className={`absolute bg-[#e1e1e1] top-[0] left-[0] bottom-[0] right-[0] overflow-hidden w-[100%] h-[100%] cursor-pointer opacity-[0.7] ${styles.showme}`}
            >
              <FaInstagram className="text-[35px] black-color font-medium h-[100%] m-auto black" />
            </span>
          </div>
        </div>
      </div>
      <div className="w-[130px] bg-[#fff] h-[40px] border-[1px] border-black mx-auto mt-[30px] mb-[74px] uppercase font-normal text-[14px] medium black py-[10px] px-[9px] leading-[17px] text-center cursor-pointer">
            Learn More
      </div>
    </>
  );
};

export default InstaFeed;

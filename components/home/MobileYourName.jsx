import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import MobileImage from "../../assets/images/embroidery-desktop.jpg";

const MobileYourName = () => {
  return (
    <div className={`${styles.MobileShow}`}>
      <span className={`${styles.YourMobile}`}>
        <Image src={MobileImage} alt="Hero Image" />
      </span>
      <div className="pt-[30px] pb-[30px]">
        <h1 className="mb-[22px] text-center uppercase font-semibold text-[28px] leading-[31px] black-color medium">
        IT&apos;S YOUR NAME, NOT OURS
        </h1>
        <p className="mb-[11px] text-[18px] leading-[23px] medium black-color font-normal pl-[10px]">
          Get through your jampacked day in the utmost of comfort and style.
        </p>
        <div className="flex justify-start pt-[20px] pl-[12px]">
          <div>
            <Link href="#">
              <a
                className={`uppercase mb-[10px] mr-[10px] py-[12px] px-[35px] text-center bg-[#e8ecef] ${styles.buttonText} tracking-[0.3px] text-[13px] font-semibold medium leading-[24px] hover:bg-[#241f21] white-color `}
              >
                Get Started
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileYourName;

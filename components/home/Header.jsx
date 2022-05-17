import styles from "../../styles/Home.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.backgroungHeader}>
      <h1 className="text-[33px] font-semibold leading-[36px] white-color medium pl-[80px] mb-[20px]">
        ANYTHING BUT UNIFORM
      </h1>
      <p className="text-[19px] leading-[30px] white-color font-normal medium max-w-[556px] mb-[20px] break-normal pl-[80px]">
        Get through your jam-packed day in the utmost of comfort and style.
      </p>
      <div className="flex pl-[80px] mb-[55px]">
        <div>
          <Link href="#">
            <a
              className={`uppercase mb-[10px] mr-[10px] py-[12px] px-[35px] text-center bg-[#e8ecef] ${styles.buttonText} tracking-[0.3px] text-[13px] font-medium medium leading-[24px] hover:bg-[#241f21] white-color `}
            >
              SHOP EMBER
            </a>
          </Link>
        </div>
        <div>
          <Link href="#">
            <a
              className={`uppercase mb-[10px] mr-[10px] py-[12px] px-[35px] text-center bg-[#e8ecef] ${styles.buttonText} tracking-[0.3px] text-[13px] font-medium medium leading-[24px] hover:bg-[#241f21] white-color `}
            >
              SHOP EMBER
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

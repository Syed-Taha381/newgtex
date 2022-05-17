import Link from "next/link";
import styles from "../../styles/Home.module.css";

const YourName = () => {
  return (
    <div className={`${styles.backgroungImage}`}>
      <div className="flex h-full">
        <div className="w-[50%] self-stretch"></div>
        <div className="py-[60px] w-[50%] flex flex-col justify-end">
          <h2 className="uppercase mt-[27.5px] mb-[30px] text-[40px] leading-[54px] black-color font-normal medium tracking-[0.4px] max-w-[360px] break-normal">
            IT&apos;S YOUR NAME, NOT OURS
          </h2>
          <p className="mb-[30px] text-[16px] leading-[26px] black-color font-normal max-w-[670px] medium break-normal">
            Unlike other brands, we reserve the chest space for YOUR name and
            title embroidery — not our logo.
          </p>
          <div>
            <Link href="#">
              <a
                className={`uppercase mb-[10px] mr-[10px] py-[12px] px-[35px] text-center bg-[#e8ecef] ${styles.buttonText} tracking-[0.3px] text-[13px] font-medium medium leading-[24px] hover:bg-[#241f21] white-color `}
              >
                GET STARTED
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourName;

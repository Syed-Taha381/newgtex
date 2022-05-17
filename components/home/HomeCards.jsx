import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Models from "../../assets/images/models.jpg";

const HomeCards = ({reverse, mt, pb, marginTop}) => {
  return (
    <div className={`flex px-[20px] ${reverse} ${mt} ${pb} ${marginTop}`}>
      <div className="w-[50%]">
        <Image src={Models} alt="Models" />
      </div>
      <div className="w-[50%] p-[40px] flex flex-col justify-end">
        <h2 className="uppercase mt-[27.5px] mb-[30px] text-[40px] leading-[54px] black-color font-normal medium tracking-[0.4px] max-w-[360px] break-normal">
          INTRODUCING EMBER
        </h2>
        <p className="mb-[30px] text-[16px] leading-[26px] black-color font-normal medium">
          Meet your new go-to scrub top. Lightweight, ultra comfortable, and
          cool yet polished. Don’t think twice, just slip it on and go.
        </p>
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

export default HomeCards;

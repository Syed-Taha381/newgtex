import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import logo from "../../assets/images/Gtexuniforms-logo.jpg";
import Image from "next/image";
import Link from "next/link";


const Footer = () => {
  return (
    <footer className="w-full pt-[64px] flex justify-between pl-[20px] pr-[20px] mb-[12px]">
      <div className="w-[25%] pl-[15px]">
        <h2 className="text-[28px] leading-[35px] black-color bold mb-[10px] mt-[2.2rem]">
          ELEVATE <br /> YOUR <br />
          APPEARANCE™
        </h2>
        <div className="flex gap-x-[15px]">
          <FaFacebookSquare className="text-[21px] footer-icon-color leading-[21px] font-normal cursor-pointer" />
          <FaInstagramSquare className="text-[21px] footer-icon-color leading-[21px] font-normal  cursor-pointer" />
          <FaTwitter className="text-[21px] footer-icon-color leading-[21px] font-normal  cursor-pointer" />
          <FaYoutube className="text-[21px] footer-icon-color leading-[21px] font-normal  cursor-pointer" />
        </div>
        <div className={`mt-[1px] footerLogo`}>
          <Image src={logo} alt="logo" />
          <div className="flex flex-row justify-between items-center -mt-[40px] relative mt-[10px]">
            <p className="text-[13px] leading-[28px] black-color medium font-normal">
              © 2022, All Rights Reserved.
            </p>
            <Link href="#">
              <a className="text-[14px] leading-[28px] black-color medium font-normal">
                Privacy
              </a>
            </Link>
            <p> | </p>
            <Link href="#">
              <a className="text-[14px] leading-[28px] black-color medium font-normal pt-[3.25px]">
                Terms
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[22%]">
        <h4 className="text-[18px] leading-[20px] semiblod black-color mb-[40px]">
          Contact
        </h4>
        <div className="flex flex-col gap-y-[10px]">
          <div>
            <p className="text-[15px] leading-[20px] black-color semiblod mb-[5px]">
              Call
            </p>
            <Link href="#">
              <a className="text-[15px] leading-[20px] black-color font-normal medium pb-[7px] hover:underline underline-offset-[5px]">
                +92330 8123425
              </a>
            </Link>
          </div>
          <div>
            <p className="text-[15px] leading-[20px] black-color semiblod mb-[5px]">
              Email
            </p>
            <Link href="#">
              <a className="text-[15px] leading-[20px] black-color font-normal medium pb-[7px] hover:underline underline-offset-[5px]">
                info@gtexuniforms.com
              </a>
            </Link>
          </div>
          <div>
            <p className="text-[15px] leading-[20px] black-color semiblod mb-[5px]">
              Write
            </p>
            <Link href="#">
              <a className="text-[15px] leading-[20px] black-color font-normal medium pb-[7px] hover:underline underline-offset-[5px]">
                Suit #1, Saima Arcade, Sharfabad, Karachi.
              </a>
            </Link>
          </div>
          <div>
            <p className="text-[15px] leading-[20px] black-color semiblod mb-[5px]">
              Office Hours
            </p>
            <p className="text-[15px] leading-[20px] black-color font-normal medium mb-[5px]">
              Monday - Friday
            </p>
            <p className="text-[15px] leading-[20px] black-color font-normal medium">
              10am - 7pm PST
            </p>
          </div>
        </div>
      </div>
      <div className="w-[22%]">
        <h4 className="text-[18px] leading-[20px] semiblod black-color mb-[40px]">
          HELP
        </h4>
        <div className="">
          <div className="flex flex-col gap-y-[10px]">
            <Link href="#">
              <a className="text-[15px] leading-[20px] black-color font-normal medium pb-[7px] hover:underline underline-offset-[5px]">
                Help & FAQs
              </a>
            </Link>
            <Link href="#">
              <a className="text-[15px] leading-[20px] black-color font-normal medium pb-[7px] hover:underline underline-offset-[5px]">
                Shipping & Returns
              </a>
            </Link>
            <Link href="#">
              <a className="text-[15px] leading-[20px] black-color font-normal medium pb-[7px] hover:underline underline-offset-[5px]">
                At-Home-Try ON
              </a>
            </Link>
            <Link href="#">
              <a className="text-[15px] leading-[20px] black-color font-normal medium pb-[7px] hover:underline underline-offset-[5px]">
                Size Guides
              </a>
            </Link>
            <Link href="#">
              <a className="text-[15px] leading-[20px] black-color font-normal medium pb-[7px] hover:underline underline-offset-[5px]">
                Care Guide
              </a>
            </Link>
            <Link href="#">
              <a className="text-[15px] leading-[20px] black-color font-normal medium pb-[7px] hover:underline underline-offset-[5px]">
                Custom Embroidery
              </a>
            </Link>
            <Link href="#">
              <a className="text-[15px] leading-[20px] black-color font-normal medium pb-[7px] hover:underline underline-offset-[5px]">
                Group Orders
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[22%]">
        <h4 className="text-[18px] leading-[20px] semiblod black-color mb-[40px]">
          QUICK LINKS
        </h4>
        <div className="flex flex-col gap-y-[10px]">
          <Link href="#">
            <a className="text-[15px] leading-[20px] black-color font-normal medium pb-[7px] hover:underline underline-offset-[5px]">
              Lab Coats
            </a>
          </Link>
          <Link href="#">
            <a className="text-[15px] leading-[20px] black-color font-normal medium pb-[7px] hover:underline underline-offset-[5px]">
              Scrubs
            </a>
          </Link>
          <Link href="#">
            <a className="text-[15px] leading-[20px] black-color font-normal medium pb-[7px] hover:underline underline-offset-[5px]">
              Scrub Jackets
            </a>
          </Link>
          <Link href="#">
            <a className="text-[15px] leading-[20px] black-color font-normal medium pb-[7px] hover:underline underline-offset-[5px]">
              Underscrubs
            </a>
          </Link>
          <Link href="#">
            <a className="text-[15px] leading-[20px] black-color font-normal medium pb-[7px] hover:underline underline-offset-[5px]">
              Face Masks
            </a>
          </Link>
          <Link href="#">
            <a className="text-[15px] leading-[20px] black-color font-normal medium pb-[7px] hover:underline underline-offset-[5px]">
              Stethoscopes
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

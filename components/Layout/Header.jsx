import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/images/logo.png";
import cartIcon from "../../assets/images/icon-cart.svg";
import women1 from "../../assets/images/mega-menu/women1.jpg";
import women2 from "../../assets/images/mega-menu/women2.jpg";
import men1 from "../../assets/images/mega-menu/men1.jpg";
import men2 from "../../assets/images/mega-menu/men2.jpg";

const Header = () => {
  return (
    <header className="max-container full-widt h-[64px]">
      <div className="flex flex-warp justify-between items-center pl-[35px] pr-[35px] h-[64px]">
        <div className="w-[10%] h-[64px]">
          <span className={`${styles.spanImg}`}>
            <Image src={logo} alt="Gtexuniforms-logo" className={styles.imgW} />
          </span>
        </div>
        <div className="w-[60%] flex gap-x-[40px] ">
          <div className="menu h-[64px] flex items-center">
            <p className="text-[14px] leading-[20px] font-medium cursor-pointer black-color semiblod relative uppercase ">
              Women
            </p>
            <div className="flex w-[100%] py-[40px] px-[30px] absolute z-10 bg-[#fff] left-[0] top-[64px] border-t-[1px] border-[#cdcdcd] megamenu hidden">
              <div className="flex w-[50%]">
                <ul className="w-[25%]">
                  <li className="text-[14px] leading-[20px] mb-[15px] font-semibold medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Women Home</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-semibold medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>New Arrivals</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-normal medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>
                        Kits {" "}
                        <span className="red-color text-[12px] medium font-light leading-[17px]">
                          New
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-normal medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Polos</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-normal medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>J. Wright Lab Coat</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-normal medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Calyx Scrub Top</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-normal medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Strata Fleece</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-semibold medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Best Sellers</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-semibold medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Shop All</a>
                    </Link>
                  </li>
                </ul>
                <ul className="w-[25%]">
                  <li className="text-[14px] leading-[20px] mb-[15px] font-semibold medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Lab Coats</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-normal medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Premium Stretch</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-normal medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>
                      Premium
                      </a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-normal medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>
                      Performance
                      </a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-semibold medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Outerwear</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-normal medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Strata Vest</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-normal medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Strata Jacket</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-normal medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Quantum Jacket</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-semibold medium red-color hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Sale</a>
                    </Link>
                  </li>
                </ul>
                <ul className="w-[25%]">
                  <li className="text-[14px] leading-[20px] mb-[15px] font-semibold medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Scrubs</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-normal medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Scrub Tops</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-normal medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Scrub Pants</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-normal medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Scrub Jackets</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-semibold medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Apparel</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-normal medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Polos</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-normal medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Underscrubs</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-normal medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Performance Tees</a>
                    </Link>
                  </li>
                </ul>
                <ul className="w-[25%]">
                  <li className="text-[14px] leading-[20px] mb-[15px] font-semibold medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Accessories</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-normal medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>
                      Face Masks
                      </a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-normal medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Medical Hijabs</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-normal medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Stethoscopes</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-normal medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Gift Cards</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex w-[50%] justify-between">
                <div className="w-[49%] text-center">
                  <Link href="#">
                    <a>
                      <Image  alt="image" src={women1} className={styles.zoomEffect} />
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="text-[14px] leading-[20px] subcolor font-normal medium mt-[15px] mb-[11px] text-center uppercase">STRATA FLEECE JACKETS</a>
                  </Link>
                </div>
                <div className="w-[49%] text-center">
                  <Link href="#">
                    <a>
                      <Image  alt="image" src={women2} className={styles.zoomEffect} />
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="text-[14px] leading-[20px] subcolor font-normal medium mt-[15px] mb-[11px] text-center uppercase">J. WRIGHT LAB COAT</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="menu h-[64px] flex items-center">
            <p className="text-[14px] leading-[20px] font-medium cursor-pointer black-color semiblod relative uppercase">
              Men
            </p>
            <div className="flex w-[100%] py-[40px] px-[30px] absolute z-10 bg-[#fff] left-[0] top-[64px] border-t-[1px] border-[#cdcdcd] megamenu hidden">
              <div className="flex w-[50%]">
                <ul className="w-[25%]">
                  <li className="text-[14px] leading-[20px] mb-[15px] font-semibold medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Women Home</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-semibold medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>New Arrivals</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-normal medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>
                        Kits {" "}
                        <span className="red-color text-[12px] medium font-light leading-[17px]">
                          New
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-normal medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Polos</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-normal medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>J. Wright Lab Coat</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-normal medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Calyx Scrub Top</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-normal medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Strata Fleece</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-semibold medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Best Sellers</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-semibold medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Shop All</a>
                    </Link>
                  </li>
                </ul>
                <ul className="w-[25%]">
                  <li className="text-[14px] leading-[20px] mb-[15px] font-semibold medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Lab Coats</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-normal medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Premium Stretch</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-normal medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>
                      Premium
                      </a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-normal medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>
                      Performance
                      </a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-semibold medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Outerwear</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-normal medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Strata Vest</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-normal medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Strata Jacket</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-normal medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Quantum Jacket</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-semibold medium red-color hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Sale</a>
                    </Link>
                  </li>
                </ul>
                <ul className="w-[25%]">
                  <li className="text-[14px] leading-[20px] mb-[15px] font-semibold medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Scrubs</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-normal medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Scrub Tops</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-normal medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Scrub Pants</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-normal medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Scrub Jackets</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-semibold medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Apparel</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-normal medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Polos</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-normal medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Underscrubs</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-normal medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Performance Tees</a>
                    </Link>
                  </li>
                </ul>
                <ul className="w-[25%]">
                  <li className="text-[14px] leading-[20px] mb-[15px] font-semibold medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Accessories</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-normal medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>
                      Face Masks
                      </a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-normal medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Medical Hijabs</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-normal medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Stethoscopes</a>
                    </Link>
                  </li>
                  <li className="text-[14px] leading-[20px] mb-[15px] font-normal medium subcolor hover:underline underline-offset-[5px]">
                    <Link href="#">
                      <a>Gift Cards</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex w-[50%] justify-between">
                <div className="w-[49%] text-center">
                  <Link href="#">
                    <a>
                      <Image alt="image" src={men1} className={styles.zoomEffect} />
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="text-[14px] leading-[20px] subcolor font-normal medium mt-[15px] mb-[11px] text-center uppercase">STRATA FLEECE JACKETS</a>
                  </Link>
                </div>
                <div className="w-[49%] text-center">
                  <Link href="#">
                    <a>
                      <Image alt="image" src={men2} className={styles.zoomEffect} />
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="text-[14px] leading-[20px] subcolor font-normal medium mt-[15px] mb-[11px] text-center uppercase">J. WRIGHT LAB COAT</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className=" h-[64px] flex items-center">
            <p className="text-[14px] leading-[20px] font-medium cursor-pointer black-color semiblod uppercase">
              Collections
            </p>
          </div>
          <div className=" h-[64px] flex items-center">
            <p className="text-[14px] leading-[20px] font-medium cursor-pointer black-color semiblod uppercase">
              Group oders
            </p>
          </div>
          <div className=" h-[64px] flex items-center">
            <p className="text-[14px] leading-[20px] font-medium cursor-pointer black-color semiblod uppercase">
              about us
            </p>
          </div>
          <div className=" h-[64px] flex items-center">
            <p className="text-[14px] leading-[20px] font-medium cursor-pointer black-color semiblod uppercase">
              Blog
            </p>
          </div>
        </div>
        <div className="w-[17%] flex justify-between">
          <Link href="#">
            <a className="text-[14px] leading-[20px] font-medium cursor-pointer black-color medium">
              Search
            </a>
          </Link>
          <Link href="#">
            <a className="text-[14px] leading-[20px] font-medium cursor-pointer black-color medium">
              log In
            </a>
          </Link>
          <Link href="#">
            <a className="flex justify-between items-center w-[33%]">
              <Image src={cartIcon} alt="Icom" />
              <p className="text-[14px] leading-[20px] font-medium cursor-pointer black-color medium">
                bag
              </p>
              <p className="text-[14px] leading-[20px] font-normal cursor-pointer black-color medium">
                0
              </p>
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

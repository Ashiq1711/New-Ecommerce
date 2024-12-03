import banneOne from "../assets/images/banner/bannerImgOne.jpg";
import bannerTwo from "../assets/images/banner/bannerImgTwo.jpg";
import bannerThree from "../assets/images/banner/bannerImgThree.jpg";
import { FaHome } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { MdOutlineDetails } from "react-icons/md";
import { BiSolidUserDetail } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
export const headerNavigation = [
  { icons: <FaHome />, title: "Home", link: "/" },

  { icons: <FaShoppingBag />, title: "Shop", link: "/shop" },

  { icons: <MdOutlineDetails />, title: "About", link: "/about" },

  { icons: <BiSolidUserDetail />, title: "Contact", link: "/contact" },

  { icons: <FaShoppingCart />, title: "Orders", link: "/orders" },
];

export const BannerImages = [
  {
    title: "New Arrivals",
    discount: "Discount up tp 50% off",
    from: "500",
    sale: "Flash Sale",
    image: banneOne,
  },
  {
    title: "New Arrivals",
    discount: "Discount up tp 50% off",
    from: "999",
    sale: "Big Sale",
    image: bannerTwo,
  },
  {
    title: "New Arrivals",
    discount: "Discount up tp 50% off",
    from: "99",
    sale: "Flash Sale",
    image: bannerThree,
  },
];

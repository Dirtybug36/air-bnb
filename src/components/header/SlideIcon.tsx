import NavigationData from "../../api/NavigationData";

import Slider from "react-slick";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SampleNextArrow: React.FC = (props) => (
  <div
    {...props}
    className="absolute right-1 top-0      w-10 h-16 text-opacity-20 hover:text-opacity-50 text-yellow-950 "
  >
    <div className="bg-white w-full h-full">
      <IoIosArrowDropright size={31} />
    </div>
  </div>
);

const SamplePrevArrow: React.FC = (props) => (
  <div
    {...props}
    className="absolute  left-0 z-10  text-opacity-20 hover:text-opacity-50   w-11 h-16   text-yellow-950  "
  >
    <div className="bg-white w-full h-full ">
      <IoIosArrowDropleft size={31} />
    </div>
  </div>
);
export const SlideIcon: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
    ],
  };

  const data = NavigationData.map((icons) => (
    <div
      key={icons.id}
      className="flex items-center justify-center   h-full w-full   opacity-50 hover:opacity-100"
    >
      <div className="  pl-3">{icons.icon}</div>
      <div className=" truncate">{icons.label}</div>
    </div>
  ));
  return (
    <>
      <Slider {...settings}>{data}</Slider>
    </>
  );
};

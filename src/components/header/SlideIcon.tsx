import NavigationData from "../../api/NavigationData";
import { RiSoundModuleFill } from "react-icons/ri";
import Slider from "react-slick";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SampleNextArrow: React.FC = (props) => (
  <div {...props} className="absolute right-1 top-2  ">
    <div>
      <IoIosArrowDropright size={30} />
    </div>
  </div>
);

const SamplePrevArrow: React.FC = (props) => (
  <div {...props} className="absolute     h-full w-20  rounded-full  ">
    <div>
      <IoIosArrowDropleft size={30} />
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
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const data = NavigationData.map((icons) => (
    <div
      key={icons.id}
      className="flex items-center justify-center h-full w-full shrink-0  opacity-50 hover:opacity-100"
    >
      <div>{icons.icon}</div>
      <div>{icons.label}</div>
    </div>
  ));
  return (
    <>
      <Slider {...settings}>{data}</Slider>
    </>
  );
};

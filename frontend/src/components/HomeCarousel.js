import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import CarouselCard from "./ui/CarouselCard";
import CarouselCardBrand from "./ui/CarouselCardBrand";
import { Link } from "react-router-dom";

const HomeCarousel = ({ data, color }) => {
  const cardNumbers = data.title === "by character" ? 5 : 4;

  return (
    <div className="carousel-container">
      {(data.title == "by character") | (data.title == "by brand") ? (
        <div
          className="carousel-button-container"
          style={{ backgroundColor: data.color }}
        >
          <Link to="products" style={{ textDecoration: "none" }}>
            <button className="carousel-button">{data.button}</button>
          </Link>
        </div>
      ) : (
        <span></span>
      )}
      <Carousel
        plugins={[
          "infinite",
          "arrows",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: cardNumbers,
            },
          },
        ]}
      >
        {data.title === "by brand"
          ? data.sections.map((card, index) => (
              <Link to={card.url} style={{ textDecoration: "none" }}>
                <CarouselCardBrand
                  img={card.image}
                  title={card.desc}
                  color="green"
                  key={index}
                />
              </Link>
            ))
          : data.sections.map((card, index) => (
              <Link to={card.url} style={{ textDecoration: "none" }}>
                <CarouselCard
                  img={card.image}
                  title={card.desc}
                  color={color}
                  key={index}
                />
              </Link>
            ))}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;

// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "./images/slider/sl1.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// import './BookCards.css';
// import '../home/BannerCard.css';
const BookCards = ({ headline, books }) => {
  //console.log(bookss);
  BookCards.propTypes = {
    headline: PropTypes.string.isRequired, // Validate headline prop as a required string
    books: PropTypes.arrayOf(PropTypes.object).isRequired, // Validate books prop as an array of objects
  };
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
  );

  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };

  const append = () => {
    setSlides([...slides, "Slide " + ++appendNumber.current]);
  };

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };
  //console.log(books);
  // console.log(books.length);
  const arr = [...books];
  // console.log(arr);
  // let arr1;
  // if (arr.length == 0) {
  //   console.log("No books");
  //   arr1 = [...arr];
  // }

  return (
    <>
      <div className="my-16 px-4 lg:px-24">
        <h2
          className="text-5xl text-center font-bold my-5"
          style={{ color: "#4d4d4d" }}
        >
          {headline}
        </h2>
      </div>
      <div>
        {/* cards-Virtual slides */}
        <div
          style={{
            width: "100%",
            height: "100%",

            position: "relative",
            // height: "100%",
            background: "#eee",
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontSize: "14px",
            color: "#000",
            margin: "0",
            padding: 0,
          }}
        >
          <Swiper // style={{width:"100%", height:"100%"}}
            style={{
              width: "100%",
              height: "450px",
              margin: "20px ",
            }}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            // className="mySwiper  "
          >
            const flat= 0;
            {arr.map((bookss) => (
              //console.log(book)
              <SwiperSlide key={bookss._id}>
                <Link to={`/book/${bookss._id}`}>
                  <div>
                    <div
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    >
                      <img
                        src={bookss.book.imageUrl}
                        alt=""
                        className=""
                        style={{ height: "280px" }}
                      />
                    </div>
                    <div>
                      <h5 style={{ color: "black" }}>
                        {bookss.book.bookTitle}
                      </h5>
                      <p style={{ color: "#777777" }}>
                        {bookss.book.authorName}
                      </p>
                      <div>
                        <p
                          style={{
                            fontSize: "15px",
                            color: "red",
                          }}
                        >
                          Prize :-{bookss.book.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default BookCards;
// import React from "react";

// const BookCards = ({ bookss, headline }) => {
//   return <div></div>;
// };

// export default BookCards;

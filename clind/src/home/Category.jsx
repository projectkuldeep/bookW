// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import Rom from "../components/images/category/romance.jpg";
import Action from "../components/images/category/Action.jpg";
import Mis from "../components/images/category/mistory.avif";
import bio from "../components/images/category/biography.png";
import chi from "../components/images/category/child.png";
import adt from "../components/images/category/adult.webp";
import fnt from "../components/images/category/fantasy.webp";
import Hor from "../components/images/category/horr.jpeg";
import sci from "../components/images/category/sci.jpg";
const Category = () => {
  return (
    <div>
      <h3
        style={{
          margin: "80px 0 0 0",
          padding: "0 0 0 10px ",

          fontWeight: "bold",
        }}
      >
        BROWSE GENRES{" "}
        <Link to="/EveryBook">
          <sub style={{ fontWeight: "300" }}>(View All)</sub>
        </Link>
      </h3>

      <hr />

      {/* a single section with flex */}

      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {/* containing multiple divs */}
        <div
          style={{
            flex: "0 0 auto",

            margin: "30px",

            backgroundColor: "white",
            height: "230px",
          }}
        >
          {" "}
          <Link to={`/EveryCategory/Romance`}>
            <img
              src={Rom}
              alt="Placeholder"
              style={{ width: "350px", height: "220px" }}
            />
            <h3
              style={{
                margin: "-120px 0 0 100px",
                background: "black",
                color: "white",
                fontWeight: "700",
              }}
            >
              Romance
            </h3>
          </Link>
        </div>

        <div
          style={{
            flex: "0 0 auto",

            margin: "30px",

            backgroundColor: "white",
            height: "230px",
          }}
        >
          {" "}
          <Link to={`/EveryCategory/Action`}>
            <img
              src={Action}
              alt="Placeholder"
              style={{ width: "350px", height: "220px" }}
            />
            <h3
              style={{
                margin: "-120px 0 0 50px",
                background: "white",
                color: "white",
                fontWeight: "700",
              }}
            >
              Action & Advanture
            </h3>
          </Link>
        </div>

        <div
          style={{
            flex: "0 0 auto",

            margin: "30px",

            backgroundColor: "white",
            height: "230px",
          }}
        >
          <Link to={`/EveryCategory/Myster`}>
            <img
              src={Mis}
              alt="Placeholder"
              style={{ width: "350px", height: "220px" }}
            />
            <h3
              style={{
                margin: "-120px 0 0 60px",
                background: "white",
                color: "white",
                fontWeight: "700",
              }}
            >
              Myster & Thriller
            </h3>
          </Link>
        </div>

        <div
          style={{
            flex: "0 0 auto",

            margin: "30px",
            backgroundColor: "white",
            height: "230px",
          }}
        >
          <Link to={`/EveryCategory/Bio`}>
            <img
              src={bio}
              alt="Placeholder"
              style={{ width: "350px", height: "220px" }}
            />
            <h3
              style={{
                margin: "-120px 0 0 20px",
                background: "white",
                color: "white",
                fontWeight: "700",
              }}
            >
              Biographies & History
            </h3>
          </Link>
        </div>

        <div
          style={{
            flex: "0 0 auto",

            margin: "30px",

            backgroundColor: "white",
            height: "230px",
          }}
        >
          <Link to={`/EveryCategory/Children`}>
            <img
              src={chi}
              alt="Placeholder"
              style={{ width: "350px", height: "220px" }}
            />
            <h3
              style={{
                margin: "-120px 0 0 100px",
                background: "white",
                color: "white",
                fontWeight: "700",
              }}
            >
              Childrens
            </h3>
          </Link>
        </div>

        <div
          style={{
            flex: "0 0 auto",

            margin: "30px",

            backgroundColor: "white",
            height: "230px",
          }}
        >
          <Link to={`/EveryCategory/Young`}>
            <img
              src={adt}
              alt="Placeholder"
              style={{ width: "350px", height: "220px" }}
            />
            <h3
              style={{
                margin: "-120px 0 0 90px",
                background: "white",
                color: "white",
                fontWeight: "700",
              }}
            >
              Young Adult
            </h3>
          </Link>
        </div>

        <div
          style={{
            flex: "0 0 auto",

            margin: "30px",
            backgroundColor: "white",
            height: "230px",
          }}
        >
          <Link to={`/EveryCategory/Fantasy`}>
            <img
              src={fnt}
              alt="Placeholder"
              style={{ width: "350px", height: "220px" }}
            />
            <h3
              style={{
                margin: "-120px 0 0 100px",
                background: "white",
                color: "white",
                fontWeight: "700",
              }}
            >
              Fantasy
            </h3>
          </Link>
        </div>

        <div
          style={{
            flex: "0 0 auto",

            margin: "30px",

            backgroundColor: "white",
            height: "230px",
          }}
        >
          <Link to={`/EveryCategory/Horror`}>
            <img
              src={Hor}
              alt="Placeholder"
              style={{ width: "350px", height: "220px" }}
            />
            <h3
              style={{
                margin: "-120px 0 0 110px",
                background: "white",
                color: "white",
                fontWeight: "700",
              }}
            >
              Horror
            </h3>
          </Link>
        </div>

        <div
          style={{
            flex: "0 0 auto",

            margin: "30px",

            backgroundColor: "white",
            height: "230px",
          }}
        >
          <Link to={`/EveryCategory/Sci`}>
            <img
              src={sci}
              alt="Placeholder"
              style={{ width: "350px", height: "220px" }}
            />
            <h3
              style={{
                margin: "-120px 0 0 80px",
                background: "white",
                color: "white",
                fontWeight: "700",
              }}
            >
              Science Fiction
            </h3>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Category;

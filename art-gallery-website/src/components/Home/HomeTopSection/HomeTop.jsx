import style from "./HomeTop.module.css";
import { NavLink } from "react-router-dom";
import arrowRight from "./../../../assets/icon-arrow-right.svg";
import heroImg from "./../../../assets/desktop/image-hero@2x.jpg";

export function HomeTop() {
  return (
    <section className={style.homeTopContainer}>
      <h1>
        Modern <br /> Art Gallery
      </h1>
      <h1>
        Modern <br /> Art Gallery
      </h1>
      <div className={style.topGrid}>
        <div className={style.blackBg}></div>
        <img
          src={heroImg}
          alt="a man and a woman standing in front of a paint hanging on a white wall"
          className={style.heroImg}
        />
      </div>

      <p>
        The arts in the collection of the Modern Art Gallery all started from a
        spark of inspiration. Will these pieces inspire you? Visit us and find
        out.
      </p>
      <div>
        <NavLink
          to="/location"
          style={{ textDecoration: "none" }}
          className={style.location}
        >
          <button className={style.btn1}>Our Location</button>
          <button className={style.btn2}>
            <img src={arrowRight} alt="arrow right icon" />
          </button>
        </NavLink>
      </div>
    </section>
  );
}

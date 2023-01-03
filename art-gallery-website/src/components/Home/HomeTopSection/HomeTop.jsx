import style from "./HomeTop.module.css";
import { NavLink } from "react-router-dom";
import arrowRight from "./../../../assets/icon-arrow-right.svg";

export function HomeTop() {
  return (
    <section className={style.homeTopContainer}>
      <h1>
        Modern <br /> Art Gallery
      </h1>
      <p>
        The arts in the collection of the Modern Art Gallery all started from a
        spark of inspiration. Will these pieces inspire you? Visit us and find
        out.
      </p>
      <div>
        <NavLink to="/location" style={{ textDecoration: "none" }} className={style.location}>
          <button className={style.btn1}>Our Location</button>
          <button className={style.btn2}>
            <img src={arrowRight} alt="arrow right icon" />
          </button>
        </NavLink>
      </div>
    </section>
  );
}

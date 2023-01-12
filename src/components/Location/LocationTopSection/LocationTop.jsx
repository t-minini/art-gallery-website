import { NavLink } from "react-router-dom";
import style from "./LocationTop.module.css";
import map from "./../../../assets/desktop/image-map@2x.png";
import arrowLeft from "./../../../assets/icon-arrow-left.svg";

export function LocationTop() {
  return (
    <header className={style.locationTopContainer}>
      <img
        src={map}
        alt="map location for the Modern Art Gallery"
        className={style.map}
      />
      <NavLink
        to="/"
        style={{ textDecoration: "none" }}
        className={style.locationBtn}
      >
        <span className={style.btn2}>
          <img src={arrowLeft} alt="arrow left icon" />
        </span>
        <span className={style.btn1}>back to home</span>
      </NavLink>
    </header>
  );
}

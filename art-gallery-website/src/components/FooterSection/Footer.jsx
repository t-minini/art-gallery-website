import style from "./Footer.module.css";
import facebook from "./../../assets/icon-facebook.svg";
import instagram from "./../../assets/icon-instagram.svg";
import twitter from "./../../assets/icon-twitter.svg";

export function Footer() {
  return (
    <footer className={style.footerContainer}>
      <h3>
        Modern <br /> Art Gallery
      </h3>
      <p>
        The Modern Art Gallery is free to all visitors and open seven days a
        week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
      </p>
      <div className={style.icons}>
        <img
          src={facebook}
          alt="facebook icon in white color"
          className={style.facebook}
        />
        <img
          src={instagram}
          alt="instagram icon in white color"
          className={style.instagram}
        />
        <img
          src={twitter}
          alt="twitter icon in white color"
          className={style.twitter}
        />
      </div>
    </footer>
  );
}

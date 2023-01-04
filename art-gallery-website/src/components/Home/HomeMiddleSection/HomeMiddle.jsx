import style from "./HomeMiddle.module.css";
import img1 from "./../../../assets/desktop/image-grid-1@2x.jpg";
import img2 from "./../../../assets/desktop/image-grid-2@2x.jpg";
import img3 from "./../../../assets/desktop/image-grid-3@2x.jpg";

export function HomeMiddle() {
  return (
    <section className={style.homeMiddleContainer}>
      <div className={style.gridMiddle}>
        <div className={style.yourDay}>
          <h2>
            Your day at <br /> the gallery
          </h2>
          <p>
            Wander through our distinct collections and find new insights about
            our artists. Dive into the details of their creative process.
          </p>
        </div>
        <img
          src={img1}
          alt="a room of a art gallery, with white walls, paintings hanging on it, and in the middle of the room, an orange and squared piece of art"
          className={style.img1}
        />
        <img
          src={img2}
          alt="a room of a art gallery, with white walls, paintings hanging on it, and in the middle of the room, an orange and squared piece of art"
          className={style.img2}
        />
        <img
          src={img3}
          alt="a room of a art gallery, with white walls, paintings hanging on it, and in the middle of the room, an orange and squared piece of art"
          className={style.img3}
        />
        <div className={style.comeAndInspired}>
          <h2>
            Come &amp; be <br />
            inspired
          </h2>
          <p>
            We’re excited to welcome you to our gallery and see how our
            collections influence you.
          </p>
        </div>
      </div>
    </section>
  );
}

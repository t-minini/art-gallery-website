import style from "./LocationMiddle.module.css";



export function LocationMiddle() {
  
  return (
    <section className={style.locationMiddleContainer}>
      <div className={style.ourLocation}>
        <h2>
          our location
        </h2>
        <div>
          <h3>99 King Street</h3>
          <address>
            Newport <br /> RI 02840 <br />
            United States of America
          </address>
          <p>
            Our newly opened gallery is located near the Edward King House on 99
            King Street, the Modern Art Gallery is free to all visitors and open
            seven days a week from 8am to 9pm.
          </p>
        </div>
      </div>
    </section>
  );
}

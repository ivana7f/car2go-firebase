import React, { useContext } from "react";
import about from "../../../img/about.jpg";
import CountUp from "react-countup";
import { FaCarSide } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import classes from "./AboutPage.module.scss";
import ValuesContext from "../../../store/values-context";

function AboutPage() {
  const valuesCtx = useContext(ValuesContext);

  return (
    <div className={classes.aboutPage}>
      <section className={classes.about}>
        <div>
          <h2>The best car rental deals</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Fringilla phasellus faucibus scelerisque eleifend donec pretium
            vulputate sapien nec. Sed risus ultricies tristique nulla aliquet
            enim. Ullamcorper sit amet risus nullam. Non sodales neque sodales
            ut etiam sit amet nisl purus. Tortor aliquam nulla facilisi cras
            fermentum odio eu. Placerat orci nulla pellentesque dignissim enim.
            Sed cras ornare arcu dui vivamus arcu. Habitant morbi tristique
            senectus et netus. Scelerisque eleifend donec pretium vulputate.
            Venenatis cras sed felis eget velit aliquet sagittis. Augue interdum
            velit euismod in pellentesque massa placerat duis ultricies. Amet
            mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien.
            Ut placerat orci nulla pellentesque dignissim. Tellus cras
            adipiscing enim eu turpis egestas pretium aenean. Vel elit
            scelerisque mauris pellentesque pulvinar pellentesque habitant
            morbi. Ornare aenean euismod elementum nisi quis.
          </p>
        </div>
        <div>
          <img src={about} alt="car" className={classes.aboutImg} />
        </div>
      </section>
      <section className={classes.counter}>
        <div className={classes.counterItem}>
          <FaCarSide size="5rem" color="#1f5c90" />
          <CountUp
            end={50}
            className={classes.number}
            delay="1"
            duration={1}
            suffix="+"
          />
          <p>Cars</p>
        </div>
        <div className={classes.counterItem}>
          <IoIosPeople size="5rem" />
          <CountUp
            end={1000}
            className={classes.number}
            delay="1"
            duration={1}
            suffix="+"
          />
          <p>Customers</p>
        </div>
        <div className={classes.counterItem}>
          <FaStar size="5rem" color="#ffd43b" />
          <CountUp
            end={valuesCtx.rating}
            className={classes.number}
            delay="1"
            duration={1}
            decimal="."
            decimals={1}
          />
          <p>Rating</p>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;

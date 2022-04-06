import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/joy.jpg"
          alt="An image showing Max"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Fahad</h1>
      <p>
        Blog about web development - All About My experiences about framework
        and library that i have learn
      </p>
    </section>
  );
}

export default Hero;

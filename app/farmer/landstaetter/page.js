import Image from 'next/image';
import pigsOutside from '../../../public/images/pigsOutside.jpg';
import styles from '../singleFarmer.module.scss';

export default function LandstaetterPage() {
  return (
    <div className={styles.singleFarmer}>
      <Image
        className={styles.singleFarmPageIcon}
        src={pigsOutside}
        alt="pigs living outside"
      />
      <div className={styles.sizeText}>
        <section className={styles.sectionOne}>
          <h1>
            Welcome to Landstätter's Farm - A Haven of Pristine Pastures and
            Premium Meats!
          </h1>
          <p>
            Welcome to Landstätter's Farm, a place where the tranquility of the
            countryside merges seamlessly with our passion for raising
            exceptional livestock. Here, amidst rolling green pastures and open
            skies, our family has dedicated themselves to the art of meat
            production, ensuring that every cut we offer is of the highest
            quality for your culinary pleasure.
          </p>
          <p>
            Our farm is not just a place of work; it is our home, where
            generations of the Landstätter family have honed their skills and
            expertise in the craft of raising superior meats. We take pride in
            providing our animals with a nurturing environment and the freedom
            to roam, resulting in meats that are renowned for their tenderness,
            flavor, and unmatched quality.
          </p>
        </section>
        <h2>Our Philosophy - Ethical Farming, Uncompromising Excellence</h2>
        <p>
          At Landstätter's Farm, our philosophy centers around the principles of
          ethical farming and unwavering excellence. We believe that animals
          should be treated with respect, care, and kindness throughout their
          lives. Our commitment to animal welfare is reflected in every aspect
          of our farming practices.
        </p>
        <p>
          Our pigs enjoy a life of comfort and contentment, raised on spacious
          pastures with ample access to fresh air and natural forage. We
          prioritize their well-being, providing them with a stress-free
          environment and a wholesome diet, resulting in meat that is not only
          delicious but also raised in harmony with nature.
        </p>
        <p>
          Craftsmanship is at the heart of everything we do. From the moment our
          animals are born to the final cut of meat, we employ time-honored
          techniques and attention to detail to ensure the highest standards of
          quality. Our dedication to excellence extends to every step of the
          process, from careful breeding and humane handling to expert butchery
          and precise aging.
        </p>
        <p>
          When you choose Landstätter's Farm, you are not just purchasing meat;
          you are embracing a commitment to flavor, quality, and responsible
          farming practices. Our meats are more than just a meal; they are a
          testament to the harmony between animal, land, and our shared culinary
          heritage.
        </p>
        <p>
          Welcome to Landstätter's Farm, where the beauty of the countryside
          converges with our dedication to providing you with premium meats.
          Join us as we embark on a culinary journey, savoring the flavors of
          tradition, the bounty of the land, and the excellence of Landstätter's
          meats.
        </p>
      </div>
    </div>
  );
}

import Image from 'next/image';
import appleField from '../public/images/appleField.jpg';
import pigMeadow from '../public/images/pigMeadow.jpg';
import mountainCows from '../public/images/mountainCows.jpg';
import styles from './homepage.module.scss';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className={styles.homepage}>
      <section className="styles.marketplaceDescription">
        <h1>🚜Welcome to UnitedFarmers Marketplace!🚜</h1>

        <p>
          By supporting UnitedFarmers Marketplace, you not only enjoy the
          benefits of regional, fresh products but also help farmers earn a fair
          income to sustain high-quality production. We prioritize transparency
          and traceability, ensuring you know exactly where your food comes
          from.
        </p>
        <p>
          Say goodbye to impersonal grocery chains and embrace a new way of
          shopping that values freshness, locality, and community. With OurFarm
          Marketplace, you support local farmers, foster sustainability, and
          savor the unmatched taste of farm-fresh produce.
        </p>
        <p>
          Join us on this journey to reconnect with your food. Browse our
          selection, order online, and let us prepare and pack your order with
          care.
        </p>
        <p>
          Welcome to UnitedFarmers Marketplace - your trusted source for fresh,
          local, and ethically sourced food, bringing you closer to the farmers
          who nourish our communities.
        </p>
      </section>
      <section>
        <h2>Our direct farmers </h2>

        <Link href="/farmer/huber" className={styles.linkDecoration}>
          <h3>🌱 Meet the Huber Family 🌱</h3>
        </Link>
        <div className={styles.centerImage}>
          <Image
            src={appleField}
            className={styles.homepageImages}
            alt="apple field"
          />
        </div>

        <p>
          For four generations, the Huber Family has lovingly tended to their
          fertile fields, focusing their efforts on cultivating exceptional
          vegetables and fruits. With a deep-rooted passion for sustainable
          farming practices, they take pride in delivering produce of the
          highest quality. From juicy tomatoes to crisp cucumbers and vibrant
          greens, their diverse range of seasonal offerings is hand-picked at
          the peak of ripeness, ensuring optimal taste and nutritional goodness.
          Experience the flavors of tradition and enjoy farm-fresh goodness
          straight from the fields of the Huber Family.
        </p>
      </section>
      <section>
        <Link href="/farmer/landstaetter" className={styles.linkDecoration}>
          <h3>🐖 Welcome to Landstätter's Pork Paradise 🐖</h3>
        </Link>
        <div className={styles.centerImage}>
          <Image
            src={pigMeadow}
            className={styles.homepageImages}
            alt="pig meadow"
          />
        </div>
        <p>
          Step into Bauer's Pork Paradise, where the Bauer Family specializes in
          producing premium meats, particularly succulent pork. Their commitment
          to animal welfare and ethical farming practices shines through in
          every mouthwatering cut. Raised on spacious pastures, their pigs enjoy
          a happy and stress-free life, resulting in meat that is tender,
          flavorful, and of the highest quality. From juicy pork chops to savory
          sausages, Bauer's Pork Paradise offers an array of carefully crafted
          pork products that will delight your taste buds. Indulge in the
          exceptional taste of their heritage-bred pork and experience true pork
          perfection.
        </p>
      </section>
      <section>
        <Link href="/farmer/mueller" className={styles.linkDecoration}>
          <h3>🏔️ Discover Müller's Alpine Dairy 🏔️</h3>
        </Link>
        <div className={styles.centerImage}>
          <Image
            src={mountainCows}
            className={styles.homepageImages}
            alt="mountain cows"
          />
        </div>
        <p>
          Nestled in the picturesque Alps, Müller's Alpine Dairy is a haven for
          milk enthusiasts. Here, the Müller Family's cows graze on lush alpine
          pastures, producing milk of unparalleled richness and freshness. From
          this pristine milk, they craft an exquisite range of dairy delights.
          Delicate butter, artisanal cheeses, creamy yogurts, and heavenly ice
          creams are just a few of the treasures awaiting you. Müller's Alpine
          Dairy takes pride in their traditional craftsmanship and unwavering
          commitment to quality. Experience the natural goodness of their dairy
          products and savor the taste of the alpine meadows in every creamy
          bite.
        </p>
      </section>
    </div>
  );
}

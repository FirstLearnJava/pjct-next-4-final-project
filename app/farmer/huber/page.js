import Image from 'next/image';
import lettuceIcon from '../../../public/images/lettuceIcon.jpg';
import styles from '../singleFarmer.module.scss';

export default function HuberPage() {
  return (
    <div className={styles.singleFarmer}>
      <Image className={styles.singleFarmPageIcon} src={lettuceIcon} />
      <div className={styles.sizeText}>
        <section className={styles.sectionOne}>
          <h1>
            Welcome to Huber Family Farm - A Place Where Farming is a Way of
            Life!
          </h1>
          <p>
            Welcome to Huber Family Farm, our cherished home and the heart of
            our agricultural legacy. Here, in the midst of the picturesque
            countryside, we, the Huber family, work tirelessly to bring you the
            finest, locally grown produce.
          </p>
          <p>
            As a family spanning four generations, farming is not just our
            profession; it is an integral part of our identity. The land we
            cultivate is not only a source of sustenance but also a source of
            pride and connection to our roots. Our farm is a haven where we
            live, work, and thrive, surrounded by the beauty of nature.
          </p>
          <p>
            At Huber Family Farm, we approach our work with unwavering
            dedication and a deep respect for the land. Guided by sustainable
            farming practices, we work in harmony with nature to cultivate
            healthy crops that nourish both body and soul. Our expansive fields
            are nurtured by the fertile soil, creating the perfect conditions
            for our plants to flourish.
          </p>
        </section>
        <h2>Our Philosophy - Nurturing Tradition, Sustaining the Future</h2>
        <p>
          At Huber Family Farm, our philosophy is rooted in preserving tradition
          while embracing innovation. We believe in honoring the agricultural
          wisdom passed down through generations, while also staying attuned to
          modern advancements in farming techniques.
        </p>
        <p>
          We specialize in cultivating exceptional vegetables and fruits,
          meticulously caring for each crop from seed to harvest. By preserving
          heirloom and specialty varieties, we celebrate the rich tapestry of
          agricultural heritage and offer our customers a chance to savor unique
          flavors and textures rarely found elsewhere.
        </p>
        <p>
          We are firm believers in the power of sustainable farming. We
          prioritize practices that promote soil health, biodiversity, and
          environmental sustainability. From using organic fertilizers to
          implementing integrated pest management strategies, we strive to
          minimize our ecological footprint and ensure the long-term vitality of
          our farm.
        </p>
        <p>
          But Huber Family Farm is more than just a place of cultivation; it is
          a labor of love. Each family member plays a vital role in our daily
          operations, bringing their unique skills, knowledge, and passion to
          the table. Together, we work hand in hand, nurturing our crops with
          care and attention to deliver the highest quality produce to our
          valued customers.
        </p>
        <p>
          When you choose Huber Family Farm, you are not only supporting a
          local, family-owned business; you are becoming a part of our
          agricultural journey. Join us in savoring the fruits of our labor and
          experience the true essence of farm-to-table freshness.
        </p>
        <p>
          Welcome to Huber Family Farm, where farming is not just a way of life,
          but a celebration of tradition, sustainability, and the enduring bond
          between land, family, and community.
        </p>
      </div>
    </div>
  );
}

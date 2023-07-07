import Image from 'next/image';
import styles from './shopHomePage.module.scss';
import meatAndCheese from '../../public/images/meatAndCheese.jpg';
import vegetablesAndFruits from '../../public/images/vegetablesAndFruits.jpg';
import milkProductsAndEggs from '../../public/images/milkProductsAndEggs.jpg';
import Link from 'next/link';

export default function ShopPage() {
  return (
    <div className={styles.flexProductFields}>
      <Link
        className={styles.productFieldLinks}
        href="/shop/vegetablesAndFruits"
      >
        <Image
          className={styles.productFieldImage}
          src={vegetablesAndFruits}
          width="250"
          height="250"
        />
        <div className={styles.positionProductFieldsDescription}>
          <span className={styles.centerPFDescription}>
            Vegetables and Fruits
          </span>
        </div>
      </Link>
      <Link
        className={styles.productFieldLinks}
        href="/shop/milkProductsAndEggs"
      >
        <Image
          className={styles.productFieldImage}
          src={milkProductsAndEggs}
          width="250"
          height="250"
        />
        <div className={styles.positionProductFieldsDescription}>
          <span className={styles.centerPFDescription}>
            Dairy products and Eggs
          </span>
        </div>
      </Link>
      <Link className={styles.productFieldLinks} href="/shop/meatAndCheese">
        <Image
          className={styles.productFieldImage}
          src={meatAndCheese}
          width="250"
          height="250"
        />
        <div className={styles.positionProductFieldsDescription}>
          <span className={styles.centerPFDescription}>Meat products</span>
        </div>
      </Link>
    </div>
  );
}

import Link from 'next/link';
import styles from './shopLayout.module.scss';

export default function LAYOUT({ children }) {
  return (
    <section>
      <ul className={styles.unorderedList}>
        <Link className={styles.sidebarLinks} href="/shop/vegetablesAndFruits">
          <li>vegetables & fruits</li>
        </Link>
        <Link className={styles.sidebarLinks} href="/shop/milkProductsAndEggs">
          <li>dairy products</li>
        </Link>
        <Link className={styles.sidebarLinks} href="/shop/meatAndCheese">
          <li>meat products</li>
        </Link>
      </ul>
      {children}
    </section>
  );
}

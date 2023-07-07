import { Sql } from 'postgres';

export const products = [
  {
    id: 1,
    type: 'vegetable',
    name: 'potato',
    price: 129,
  },
  {
    id: 2,
    type: 'vegetable',
    name: 'carrot',
    price: 159,
  },
  {
    id: 3,
    type: 'vegetable',
    name: 'tomato',
    price: 229,
  },
  {
    id: 4,
    type: 'vegetable',
    name: 'sweet potato',
    price: 279,
  },
  {
    id: 5,
    type: 'vegetable',
    name: 'zucchini',
    price: 139,
  },
  {
    id: 6,
    type: 'vegetable',
    name: 'cucumber',
    price: 99,
  },
];

export async function up(sql: Sql) {
  for (const product of products) {
    await sql`
    INSERT INTO products
    (type, name, price)
    VALUES
    (${product.type}, ${product.name}, ${product.price})`;
  }
}

export async function down(sql: Sql) {
  for (const product of products) {
    await sql`
  DELETE FROM products WHERE id=${product.id}`;
  }
}

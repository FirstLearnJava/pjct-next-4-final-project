import { Sql } from 'postgres';

export type Vegetables = {
  id: number;
  type: string;
  name: string;
  price: number;
};

export async function up(sql: Sql) {
  await sql`CREATE TABLE products (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    type varchar(50) NOT NULL,
    name varchar(50) NOT NULL,
    price integer NOT NULL
  )`;
}

export async function down(sql: Sql) {
  await sql`
  DROP TABLE products`;
}

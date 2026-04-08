import { mssqlTable, int, varchar, datetime } from 'drizzle-orm/mssql-core';

export const autoresTable = mssqlTable('autores', {
  id: int('id').primaryKey().identity(),
  nome: varchar('nome', { length: 100 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  criadoEm: datetime('criado em').notNull().defaultGetDate(),
});

export type Autor = typeof autoresTable.$inferSelect;
export type CriarAutor = typeof autoresTable.$inferInsert;

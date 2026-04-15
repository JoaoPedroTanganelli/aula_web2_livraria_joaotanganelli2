import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from '../schemas/index';

export type drizzleDB = ReturnType<typeof drizzle<typeof schema>>;

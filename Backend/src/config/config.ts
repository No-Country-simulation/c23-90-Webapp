import dotenv from "dotenv";
import { InterfaceConfig } from "../interfaces/config.interface";

dotenv.config();



const PORT: number = process.env.PORT as unknown as number;

export const config: InterfaceConfig = {
  hostDatabase: process.env.HOST_DATABASE as string,
  nameDatabase: process.env.NAME_DATABASE as string,
  userDatabase: process.env.USER_DATABASE as string,
  passwordDatabase: process.env.PASSWORD_DATABASE as string,
  port: PORT,
  nodeEnv: process.env.NODE_ENV as string,
};

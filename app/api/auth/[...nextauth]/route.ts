import NextAuth from "next-auth";
import {authCfg} from "@/src/shared/configs/authCfg";

const handler = NextAuth(authCfg);

export {handler as GET, handler as POST}
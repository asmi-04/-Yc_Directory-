// import Next from "next-";

// declare module "next-" {
//   interface Session {
//     id: string;
//   }

//   interface JWT {
//     id: string;
//   }
// }
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    id?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
  }
}
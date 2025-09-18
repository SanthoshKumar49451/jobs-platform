// middleware.ts

import NextAuth from "next-auth";

export const { auth } = NextAuth({
  session: { strategy: "jwt" },
  providers: [], 
});


export default auth



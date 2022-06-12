import { createContext, useEffect, useState } from "react";

type User = {
    // name: string;
    email: string;
    name: string;
    phone: string;
    mobile: string;
    // avatar_url: string;
}

// type AuthContextType = {
//     isAuthenticated: boolean;
//     user: User;
   
//   }

export const AuthContext = createContext({} as User)
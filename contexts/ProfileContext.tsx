import { createContext, useEffect, useState } from "react";

const [hasedit, sethasedit] = useState(false);

export const AuthContext = createContext({} as {hasedit,sethasedit})
import { createContext } from "react";

const UserContext = createContext({storedCredentials:{},setStoredCredentials:()=>{}})

export default UserContext;
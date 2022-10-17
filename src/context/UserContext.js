import { createContext } from "react";

const UserContext = createContext({ storeUser: {}, setstoreUser: () => { } })

export default UserContext;
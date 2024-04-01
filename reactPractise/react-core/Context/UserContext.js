import React from "react";

const UserContext = React.createContext('codeevoluation')

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer }
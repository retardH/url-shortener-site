import { createContext, useState } from "react";

const initialContext = {
  links: [{ longLink: "", shortLink: "" }],
  setLinks: () => {},
};
export const LinkContext = createContext(initialContext);

const LinkContextProvider = ({ children }) => {
  const [links, setLinks] = useState([]);
  const value = {
    links: links,
    setLinks: setLinks,
  };
  return <LinkContext.Provider value={value}>{children}</LinkContext.Provider>;
};

export default LinkContextProvider;

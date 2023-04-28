import { useContext, useState } from "react";
import { LinkContext } from "../contexts/links-context-provider";
import axios from "axios";

const Shortener = () => {
  const [input, setInput] = useState("");
  const { setLinks } = useContext(LinkContext);
  const shortenLinkBtnHandler = async (link) => {
    try {
      const response = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${link}`
      );
      if (response.data.ok) {
        setLinks((prevLinks) => [
          ...prevLinks,
          {
            longLink: response.data.result.original_link,
            shortLink: response.data.result.full_short_link,
          },
        ]);
      }
      setInput("");
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <div className="w-full px-4 md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto mb-8 bg-darkViolet py-6 md:py-8 flex items-center flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 rounded-md bg-shortenerImgMobile md:bg-shortenerImgDesktop bg-no-repeat bg-right-top md:bg-repeat md:bg-auto">
      <input
        type="text"
        className="p-3 rounded-md shrink flex-1 w-full md:w-auto focus:outline-cyan outline-none"
        placeholder="Shorten a link here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-cyan py-3 px-4 w-full md:w-auto rounded-md text-white hover:brightness-125"
        onClick={() => shortenLinkBtnHandler(input)}
      >
        Shorten It
      </button>
    </div>
  );
};

export default Shortener;

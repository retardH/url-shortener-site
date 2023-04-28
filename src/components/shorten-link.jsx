import { useState } from "react";

const ShortenLink = ({ longLink, shortLink }) => {
  const [isCopied, setIsCopied] = useState(false);
  const copyTextToClipboard = async (text) => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  };
  const copyBtnHandler = () => {
    copyTextToClipboard(shortLink)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-md w-full md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto py-2 px-4 md:gap-2 mb-8">
      <span className="text-base border-b-0.5 md:border-b-0 border-b-grayishBlue text-veryDarkViole py-2 md:w-3/6 truncate">
        {longLink}
      </span>
      <span className="text-base md:text-end text-cyan py-2 md:w-2/6">
        {shortLink}
      </span>
      <button
        className="w-full cursor-pointer md:w-1/6 bg-cyan py-2 text-center rounded-md mb-2 md:mb-0 text-white hover:brightness-125"
        onClick={copyBtnHandler}
      >
        {isCopied ? "Copied" : "Copy"}
      </button>
    </div>
  );
};

export default ShortenLink;

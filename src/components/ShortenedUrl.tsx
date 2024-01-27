import { useState } from "react";

interface Params {
  original: string;
  shortened: string;
}

export default function ShortenedUrl({ original, shortened }: Params) {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    navigator.clipboard.writeText(shortened);
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 1000);
  }

  return (
    <div className="rounded-lg flex flex-col gap-4 bg-white py-4 items-start lg:flex-row lg:items-center">
      <p className="px-4 text-VeryDarkBlue">{original}</p>
      <div className="h-0.5 w-full bg-[#f0f1f6] lg:hidden"></div>
      <p className="px-4 text-Cyan lg:ml-auto">{shortened}</p>
      <div className="px-4 w-full lg:w-auto">
        <button
          className={`${
            clicked
              ? "bg-DarkViolet w-full rounded-lg py-2 px-4 text-white font-bold"
              : "PrimaryBtn w-full rounded-lg py-2"
          }`}
          onClick={() => {
            handleClick();
          }}
        >
          {clicked ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}

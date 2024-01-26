import { FormEvent, useState } from "react";
import ShortenedUrl from "./ShortenedUrl";
import MobileBackground from "../assets/bg-shorten-mobile.svg";
import DesktopBackground from "../assets/bg-shorten-desktop.svg";
import axios from "axios";

interface UrlItem {
  original: string;
  shortened: string;
}

interface ResponseShortenedURL {
  long: string;
  short: string;
}

export default function ShortenSection() {
  const [formattedUrls, setFormattedUrls] = useState<Array<UrlItem>>([]);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  async function handleClick(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (value) {
      axios
        .post(
          `https://csclub.uwaterloo.ca/~phthakka/1pt-express/addURL?long=${value}`,
          {},
          { headers: { "Content-Type": "application/json" } },
        )
        .then((value) => {
          const parsedData: ResponseShortenedURL = value.data;
          setFormattedUrls([
            ...formattedUrls,
            {
              original: parsedData.long,
              shortened: "https://1pt.co/" + parsedData.short,
            },
          ]);
          setValue("");
          setError(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setError(true);
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <form
        className="bg-DarkViolet p-4 flex flex-col gap-4 rounded-lg overflow-hidden relative flex-wrap lg:flex-row lg:px-24 lg:py-12"
        onSubmit={(event) => {
          handleClick(event);
        }}
      >
        <img
          src={MobileBackground}
          className="h-full absolute z-0 top-[-20%] right-[-10%] lg:hidden"
        />
        <img
          src={DesktopBackground}
          className="h-full z-0 hidden top-0 w-full left-0 lg:absolute lg:inline"
        />
        <input
          type="text"
          className="p-4 rounded-lg z-10 grow w-full lg:w-auto"
          style={error ? { border: "2px red solid" } : {}}
          placeholder="Shorten a link here..."
          value={value}
          onChange={(event) => {
            setValue(event.currentTarget.value);
          }}
        />
        <button
          type="submit"
          className="w-full PrimaryBtn rounded-lg z-10 lg:max-w-fit"
        >
          Shorten It!
        </button>
        {error && (
          <span className="basis-full text-Red italic z-10">
            Please add a link
          </span>
        )}
      </form>
      {formattedUrls &&
        formattedUrls.map((value, index) => {
          return (
            <ShortenedUrl
              original={value.original}
              shortened={value.shortened}
              key={index}
            />
          );
        })}
    </div>
  );
}

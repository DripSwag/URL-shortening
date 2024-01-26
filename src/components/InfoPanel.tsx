interface Params {
  title: string;
  body: string;
  image: string;
  styling?: string;
}

export default function InfoPanel({ title, body, image, styling }: Params) {
  return (
    <div
      className={`bg-white text-center pb-8 px-6 rounded-md relative lg:text-left ${
        styling ? styling : ""
      }`}
    >
      <div className="relative w-24 aspect-square rounded-full bg-DarkViolet top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 flex p-6 lg:left-0 lg:translate-x-0">
        <img src={image} />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-[1.6rem] text-VeryDarkViolet my-2">
          {title}
        </h1>
        <p className="text-GrayViolet leading-7">{body}</p>
      </div>
    </div>
  );
}

import { useState } from "react";

function Mobile() {
  const [viewModal, setViewModal] = useState(false);

  return (
    <>
      <button
        className="flex flex-col gap-0.5 ml-auto lg:hidden"
        onClick={() => {
          setViewModal(!viewModal);
        }}
      >
        <div className="w-4 h-0.5 rounded-lg bg-Gray"></div>
        <div className="w-4 h-0.5 rounded-lg bg-Gray"></div>
        <div className="w-4 h-0.5 rounded-lg bg-Gray"></div>
      </button>
      {viewModal ? (
        <div className="absolute translate-y-[60%] w-full pr-8 z-50">
          <div className="bg-DarkViolet w-full rounded-lg flex flex-col py-8 items-center text-white px-4 gap-6">
            <a className="font-bold" href="#">
              Features
            </a>
            <a className="font-bold" href="#">
              Pricing
            </a>
            <a className="font-bold" href="#">
              Resources
            </a>
            <div className="h-0.5 w-full bg-VeryDarkViolet rounded-lg my-2"></div>
            <a className="font-bold" href="#">
              Login
            </a>
            <a className="PrimaryBtn text-sm py-3 w-full text-center" href="#">
              Sign Up
            </a>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

function Desktop() {
  return (
    <div className="hidden w-full lg:flex lg:items-center lg:gap-4 ml-4">
      <a
        href="#"
        className="text-Gray font-bold text-sm hover:text-VeryDarkViolet"
      >
        Features
      </a>
      <a
        href="#"
        className="text-Gray font-bold text-sm hover:text-VeryDarkViolet"
      >
        Pricing
      </a>
      <a
        href="#"
        className="text-Gray font-bold text-sm hover:text-VeryDarkViolet"
      >
        Resources
      </a>
      <div className="ml-auto flex gap-4 items-center">
        <a
          href="#"
          className="text-Gray font-bold text-sm hover:text-VeryDarkViolet"
        >
          Login
        </a>
        <a href="#" className="PrimaryBtn py-3">
          Sign Up
        </a>
      </div>
    </div>
  );
}

export default function Nav() {
  return (
    <nav className="h-max px-4 py-8 flex items-center relative w-full max-w-6xl">
      <p className="text-VeryDarkViolet font-bold text-xl lg:text-3xl">
        Shortly
      </p>
      <Mobile />
      <Desktop />
    </nav>
  );
}

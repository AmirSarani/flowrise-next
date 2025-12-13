import React from "react";

export const Unleash = () => {
  return (
    <div className="w-full h-[380px]  py-[64px] px-[24px] flex justify-center items-center">
      <div className="w-[1152px] h-[252px]  flex justify-center items-center">
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-4xl m-auto shadow-xl md:px-12 px-4 py-12 grid place-items-center rounded-lg bg-gradient-to-tr from-cyan-50 via-white to-emerald-50">
            <h2 className="font-bold leading-tight tracking-tight font-display text-slate-700 text-2xl md:text-3xl font-semibold text-center mb-4">
              Unleash your inner productivity
            </h2>
            <p className="text-center text-slate-600 mb-8">
              Sync your tasks and wellness to your unique rhythm.
            </p>
            <a
              className="block w-fit bg-cyan-700 hover:bg-cyan-800 transition-colors duration-200 ease-in-out py-3 px-12 rounded-full font-display text-white font-bold text-base tracking-wider"
              rel="noreferrer"
              href="https://prismic.io"
            >
              Try it free
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

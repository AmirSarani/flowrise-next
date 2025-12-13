import React from "react";

function Hero() {
  return (
    <div className="w-full h-[1180px]  py-[64px] px-[24px] flex justify-center items-center">
      <div className="w-[1152px] h-[1052px]  flex justify-center items-center">
        <div className="grid grid-cols-1 place-items-center text-center">
          <h1 className="font-bold leading-tight tracking-tight font-display text-slate-700 text-5xl md:text-7xl md:mb-8 mb-4 mt-12 first:mt-0 last:mb-0">
            Productivity that flows <br /> with your life.
          </h1>

          <p className="text-2xl font-normal leading-10 font-body text-slate-600 mb-4 md:mb-8 max-w-md">
            Unleash your potential by harmonizing your daily tasks and habits
            with your unique energy rhythms.
          </p>

          <a
            className="block w-fit bg-cyan-700 hover:bg-cyan-800 transition-color duration-200 ease-in-out py-3 px-12 rounded-full font-display text-white font-bold text-base tracking-wider mb-8 md:mb-10"
            rel="noreferrer"
            href="https://prismic.io"
          >
            Try for free
          </a>

          <img
            alt="The Flowrise Dashboard"
            loading="lazy"
            width="1138"
            height="809"
            decoding="async"
            className="drop-shadow-xl max-w-4xl w-full"
            srcSet="
      https://images.prismic.io/flowrise-prismic/3a5c3afc-4044-443e-8572-39cb7d650a9d_app-screenshot.png?auto=compress%2Cformat&fit=max&w=1200 1x,
      https://images.prismic.io/flowrise-prismic/3a5c3afc-4044-443e-8572-39cb7d650a9d_app-screenshot.png?auto=compress%2Cformat&fit=max&w=3840 2x
    "
            src="https://images.prismic.io/flowrise-prismic/3a5c3afc-4044-443e-8572-39cb7d650a9d_app-screenshot.png?auto=compress%2Cformat&fit=max&w=3840"
            style={{ color: "transparent" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;

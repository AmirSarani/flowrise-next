import React from "react";

export const PicSec1 = () => {
  return (
    <div className="w-full h-[745px]  py-[64px] px-[24px] flex justify-center items-center">
      <div className="w-[1152px] h-[616px]  flex justify-center items-center">
        <div className="grid gap-8 md:grid-cols-2 place-items-center">
          <img
            alt="A woman meditating"
            loading="lazy"
            width="580"
            height="639"
            decoding="async"
            className="rounded-lg"
            srcSet="
      https://images.prismic.io/flowrise-prismic/97b37f0c-388e-4f8a-afd6-62884ca000fb_image+20.png?auto=format%2Ccompress&fit=max&w=640 1x,
      https://images.prismic.io/flowrise-prismic/97b37f0c-388e-4f8a-afd6-62884ca000fb_image+20.png?auto=format%2Ccompress&fit=max&w=1200 2x
    "
            src="https://images.prismic.io/flowrise-prismic/97b37f0c-388e-4f8a-afd6-62884ca000fb_image+20.png?auto=format%2Ccompress&fit=max&w=1200"
            style={{ color: "transparent" }}
          />

          <div className="grid gap-4">
            <h2 className="font-bold leading-tight tracking-tight font-display text-slate-700 text-4xl md:text-5xl">
              Harmonize your schedule
            </h2>
            <p className="max-w-md text-lg font-body text-slate-600">
              Align tasks with your natural energy rhythms. Embrace tailored
              productivity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

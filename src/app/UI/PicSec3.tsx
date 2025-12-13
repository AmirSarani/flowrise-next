import React from "react";

export const PicSec3 = () => {
  return (
    <div className="w-full h-[745px]  py-[64px] px-[24px] flex justify-center items-center">
      <div className="w-[1152px] h-[616px]  flex justify-center items-center">
        <div className="grid gap-8 md:grid-cols-2 place-items-center">
          <img
            alt="A smiling woman in glasses painting"
            loading="lazy"
            width="580"
            height="585"
            decoding="async"
            className="rounded-lg"
            srcSet="
      https://images.prismic.io/flowrise-prismic/f1d3a3ad-29df-405f-a26d-5f1e578888ae_image+17.png?auto=compress%2Cformat&fit=max&w=640 1x,
      https://images.prismic.io/flowrise-prismic/f1d3a3ad-29df-405f-a26d-5f1e578888ae_image+17.png?auto=compress%2Cformat&fit=max&w=1200 2x
    "
            src="https://images.prismic.io/flowrise-prismic/f1d3a3ad-29df-405f-a26d-5f1e578888ae_image+17.png?auto=compress%2Cformat&fit=max&w=1200"
            style={{ color: "transparent" }}
          />

          <div className="grid gap-4">
            <h2 className="font-bold leading-tight tracking-tight font-display text-slate-700 text-4xl md:text-5xl">
              Productivity and self care
            </h2>
            <p className="max-w-md text-lg font-body text-slate-600">
              Beyond task completion. Embrace self-care routines, foster a
              healthier lifestyle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

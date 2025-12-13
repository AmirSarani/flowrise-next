import React from "react";

export const PicSec2 = () => {
  return (
    <div className="w-full h-[745px]  py-[64px] px-[24px] flex justify-center items-center">
      <div className="w-[1152px] h-[616px]  flex justify-center items-center">
        <div className="grid gap-8 md:grid-cols-2 place-items-center">
          <img
            alt="Two workers laughing in front of laptops"
            loading="lazy"
            width="580"
            height="585"
            decoding="async"
            className="rounded-lg md:order-2"
            srcSet="
      https://images.prismic.io/flowrise-prismic/70a50fe1-1bc6-4dad-b271-c78b3260f3a4_image+16.png?auto=compress%2Cformat&fit=max&w=640 1x,
      https://images.prismic.io/flowrise-prismic/70a50fe1-1bc6-4dad-b271-c78b3260f3a4_image+16.png?auto=compress%2Cformat&fit=max&w=1200 2x
    "
            src="https://images.prismic.io/flowrise-prismic/70a50fe1-1bc6-4dad-b271-c78b3260f3a4_image+16.png?auto=compress%2Cformat&fit=max&w=1200"
            style={{ color: "transparent" }}
          />

          <div className="grid gap-4">
            <h2 className="font-bold leading-tight tracking-tight font-display text-slate-700 text-4xl md:text-5xl">
              Mindful task tracking
            </h2>
            <p className="max-w-md text-lg font-body text-slate-600">
              Blend productivity with mindfulness. Understand your patterns,
              enhance focus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

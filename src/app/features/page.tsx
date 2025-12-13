const features = () => {
  return (
    <section
      className="px-4 py-10 md:py-14 md:px-6 lg:py-16"
      data-slice-type="hero"
      data-slice-variation="horizontal"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
          <div className="grid grid-rows-[1fr,auto,auto] h-fit">
            <h1 className="font-bold leading-tight tracking-tight font-display text-slate-700 text-5xl md:text-7xl md:mb-8 mb-4 mt-12 first:mt-0 last:mb-0">
              Features for finding focus
            </h1>
            <p className="text-2xl font-normal leading-10 font-body text-slate-600 mb-4 md:mb-8 max-w-md">
              Harness our innovative feature set to propel your productivity
              power. Make every moment count, stress less.
            </p>
            <a
              className="block w-fit bg-cyan-700 hover:bg-cyan-800 transition-colors duration-200 ease-in-out py-3 px-12 rounded-full font-display text-white font-bold text-base tracking-wider mb-8 md:mb-10"
              rel="noreferrer"
              href="https://prismic.io"
            >
              Try for Free
            </a>
          </div>

          <img
            loading="lazy"
            width="875"
            height="583"
            decoding="async"
            className="drop-shadow-xl max-w-4xl w-full"
            srcSet="https://images.prismic.io/flowrise-prismic/6d478893-acae-4d1f-b11a-91f0f49e8bf1_image+15.png?auto=compress%2Cformat&fit=max&w=1080 1x, https://images.prismic.io/flowrise-prismic/6d478893-acae-4d1f-b11a-91f0f49e8bf1_image+15.png?auto=compress%2Cformat&fit=max&w=1920 2x"
            src="https://images.prismic.io/flowrise-prismic/6d478893-acae-4d1f-b11a-91f0f49e8bf1_image+15.png?auto=compress%2Cformat&fit=max&w=1920"
            alt="A camera lens held in front of mountains, demonstrating focus"
            style={{ color: "transparent" }}
          />
        </div>
      </div>
    </section>
  );
};

export default features;

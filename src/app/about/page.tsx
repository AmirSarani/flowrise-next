const about = () => {
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
              About the Flowrise team
            </h1>
            <p className="text-2xl font-normal leading-10 font-body text-slate-600 mb-4 md:mb-8 max-w-md">
              We’ve been seeking our own inner focus for over 8 years. We’re a
              passionate team trying to make the world a better place.
            </p>
            <a
              className="block w-fit bg-cyan-700 hover:bg-cyan-800 transition-colors duration-200 ease-in-out py-3 px-12 rounded-full font-display text-white font-bold text-base tracking-wider mb-8 md:mb-10"
              rel="noreferrer"
              href="https://prismic.io"
            >
              Join us!
            </a>
          </div>

          <img
            loading="lazy"
            width="875"
            height="584"
            decoding="async"
            className="drop-shadow-xl max-w-4xl w-full"
            srcSet="https://images.prismic.io/flowrise-prismic/9bae64f0-a765-4d87-b201-8110082df860_image+18.png?auto=compress%2Cformat&fit=max&w=1080 1x, https://images.prismic.io/flowrise-prismic/9bae64f0-a765-4d87-b201-8110082df860_image+18.png?auto=compress%2Cformat&fit=max&w=1920 2x"
            src="https://images.prismic.io/flowrise-prismic/9bae64f0-a765-4d87-b201-8110082df860_image+18.png?auto=compress%2Cformat&fit=max&w=1920"
            alt="Flowrise team"
            style={{ color: "transparent" }}
          />
        </div>
      </div>
    </section>
  );
};

export default about;

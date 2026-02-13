import React from "react";

function OurUsers() {
  return (
    <div className="w-full h-auto py-[64px] px-[24px]  flex justify-center items-center ">
      <div className="w-[1152px] h-auto  flex justify-center items-center ">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="font-bold leading-tight tracking-tight font-display text-slate-700 text-3xl md:text-4xl text-center mb-9 font-semibold">
            What our users say
          </h2>

          <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
            {/* Card 1 */}
            <div className="border border-gray-300 bg-white shadow-lg rounded-lg px-8 md:px-14 py-10 md:py-16 grid content-between">
              <p className="text-xl md:text-2xl font-normal font-body text-slate-600 mb-8">
                "Flowrise has made burnout a thing of the past. It's a
                game-changer for work-life balance. It's not just a productivity
                app—it's a lifestyle enhancer."
              </p>

              <div className="flex items-center">
                <img
                  alt="Ayesha W's Picture"
                  loading="lazy"
                  width="56"
                  height="56"
                  decoding="async"
                  className="rounded-full mr-4 aspect-square"
                  srcSet="
            https://images.prismic.io/flowrise-prismic/f764b8ac-087e-4a35-af36-472e16f3e012_Ayesha+W.png?auto=compress%2Cformat&ar=1:1&fit=crop&w=64 1x,
            https://images.prismic.io/flowrise-prismic/f764b8ac-087e-4a35-af36-472e16f3e012_Ayesha+W.png?auto=compress%2Cformat&ar=1:1&fit=crop&w=128 2x
          "
                  src="https://images.prismic.io/flowrise-prismic/f764b8ac-087e-4a35-af36-472e16f3e012_Ayesha+W.png?auto=compress%2Cformat&ar=1:1&fit=crop&w=128"
                  style={{ color: "transparent" }}
                />

                <div>
                  <p className="text-base font-medium text-slate-700">
                    Ayesha W.
                  </p>
                  <p className="text-base text-slate-600">
                    Digital Marketing Specialist
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="border border-gray-300 bg-white shadow-lg rounded-lg px-8 md:px-14 py-10 md:py-16 grid content-between">
              <p className="text-xl md:text-2xl font-normal font-body text-slate-600 mb-8">
                "Before Flowrise, I was always running against the clock. Now, I
                work in harmony with my natural rhythms. My productivity and
                wellbeing have never been better!"
              </p>

              <div className="flex items-center">
                <img
                  alt="Mark R's Picture"
                  loading="lazy"
                  width="56"
                  height="56"
                  decoding="async"
                  className="rounded-full mr-4 aspect-square"
                  srcSet="
            https://images.prismic.io/flowrise-prismic/5b9934bc-fb43-4289-a196-286eee5d3305_Mark+R.png?auto=compress%2Cformat&ar=1:1&fit=crop&w=64 1x,
            https://images.prismic.io/flowrise-prismic/5b9934bc-fb43-4289-a196-286eee5d3305_Mark+R.png?auto=compress%2Cformat&ar=1:1&fit=crop&w=128 2x
          "
                  src="https://images.prismic.io/flowrise-prismic/5b9934bc-fb43-4289-a196-286eee5d3305_Mark+R.png?auto=compress%2Cformat&ar=1:1&fit=crop&w=128"
                  style={{ color: "transparent" }}
                />

                <div>
                  <p className="text-base font-medium text-slate-700">
                    Mark R.
                  </p>
                  <p className="text-base text-slate-600">Nonprofit founder</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="border border-gray-300 bg-white shadow-lg rounded-lg px-8 md:px-14 py-10 md:py-16 grid content-between">
              <p className="text-xl md:text-2xl font-normal font-body text-slate-600 mb-8">
                "Flowrise has revolutionized my workday! It adapts to my energy
                and helps me optimize my daily tasks. I'm more productive and
                happier than ever!"
              </p>

              <div className="flex items-center">
                <img
                  alt="Profile picture of Emily W"
                  loading="lazy"
                  width="56"
                  height="56"
                  decoding="async"
                  className="rounded-full mr-4 aspect-square"
                  srcSet="
            https://images.prismic.io/flowrise-prismic/2d477b17-e0a7-445b-87f7-9f28c848c373_Emily+W.png?auto=compress%2Cformat&ar=1:1&fit=crop&w=64 1x,
            https://images.prismic.io/flowrise-prismic/2d477b17-e0a7-445b-87f7-9f28c848c373_Emily+W.png?auto=compress%2Cformat&ar=1:1&fit=crop&w=128 2x
          "
                  src="https://images.prismic.io/flowrise-prismic/2d477b17-e0a7-445b-87f7-9f28c848c373_Emily+W.png?auto=compress%2Cformat&ar=1:1&fit=crop&w=128"
                  style={{ color: "transparent" }}
                />

                <div>
                  <p className="text-base font-medium text-slate-700">
                    Emily W.
                  </p>
                  <p className="text-base text-slate-600">UX Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurUsers;

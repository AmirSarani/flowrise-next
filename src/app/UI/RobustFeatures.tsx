export const RobustFeatures = () => {
  return (
    <div className="w-full h-[460px]  py-[64px] px-[24px] flex justify-center items-center">
      <div className="w-[1152px] h-[332px]  flex justify-center items-center">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="font-bold leading-tight tracking-tight font-display text-slate-700 text-3xl md:text-4xl text-center mb-12">
            Robust features
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 max-w-5xl gap-x-8 gap-y-12 mx-auto sm:place-items-start place-items-center">
            {/* Feature 1 */}
            <div className="max-w-xs grid sm:place-items-start place-items-center">
              <div className="mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  fill="none"
                  viewBox="0 0 80 80"
                >
                  <path
                    stroke="#0891B2"
                    strokeWidth="5"
                    d="M6.7 40c0-12.6 0-18.9 3.9-22.8 3.9-3.9 10.2-3.9 22.7-3.9h13.4c12.5 0 18.8 0 22.7 4 4 3.8 4 10.1 4 22.7v6.7c0 12.5 0 18.8-4 22.7-3.9 4-10.2 4-22.7 4H33.3c-12.5 0-18.8 0-22.7-4-4-3.9-4-10.2-4-22.7V40z"
                  ></path>
                  <path
                    stroke="#0891B2"
                    strokeLinecap="round"
                    strokeOpacity="0.5"
                    strokeWidth="5"
                    d="M23.3 13.3v-5M56.7 13.3v-5M8.3 30h63.4"
                  ></path>
                  <path
                    fill="#0891B2"
                    d="M60 56.7a3.3 3.3 0 11-6.7 0 3.3 3.3 0 016.7 0zM60 43.3a3.3 3.3 0 11-6.7 0 3.3 3.3 0 016.7 0zM43.3 56.7a3.3 3.3 0 11-6.6 0 3.3 3.3 0 016.6 0zM43.3 43.3a3.3 3.3 0 11-6.6 0 3.3 3.3 0 016.6 0zM26.7 56.7a3.3 3.3 0 11-6.7 0 3.3 3.3 0 016.7 0zM26.7 43.3a3.3 3.3 0 11-6.7 0 3.3 3.3 0 016.7 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="font-bold leading-tight tracking-tight font-display text-slate-700 text-2xl md:text-3xl mb-3 font-medium sm:text-left text-center">
                Scheduling
              </h3>
              <p className="text-base font-medium font-body text-slate-600 sm:text-left text-center">
                Create task schedules synced to your natural energy peaks and
                troughs.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="max-w-xs grid sm:place-items-start place-items-center">
              <div className="mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  fill="none"
                  viewBox="0 0 80 80"
                >
                  <g
                    stroke="#0891B2"
                    strokeWidth="5"
                    clipPath="url(#clip0_1_1478)"
                  >
                    <path strokeLinecap="round" d="M73.3 73.3H6.7"></path>
                    <path
                      strokeOpacity="0.5"
                      d="M70 73.3v-25a5 5 0 00-5-5H55a5 5 0 00-5 5v25"
                    ></path>
                    <path d="M50 73.3V16.7c0-4.7 0-7.1-1.5-8.6-1.4-1.4-3.8-1.4-8.5-1.4s-7 0-8.5 1.4C30 9.6 30 12 30 16.7v56.6"></path>
                    <path
                      strokeOpacity="0.5"
                      d="M30 73.3V31.7a5 5 0 00-5-5H15a5 5 0 00-5 5v41.6"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1478">
                      <rect width="80" height="80" fill="#fff" rx="16.6"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="font-bold leading-tight tracking-tight font-display text-slate-700 text-2xl md:text-3xl mb-3 font-medium sm:text-left text-center">
                Analytics
              </h3>
              <p className="text-base font-medium font-body text-slate-600 sm:text-left text-center">
                Track your productivity trends with comprehensive data and
                insights.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="max-w-xs grid sm:place-items-start place-items-center">
              <div className="mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  fill="none"
                  viewBox="0 0 80 80"
                >
                  <g
                    stroke="#0891B2"
                    strokeWidth="5"
                    clipPath="url(#clip0_1_1492)"
                  >
                    <path
                      strokeOpacity="0.5"
                      d="M26.7 26.7h26.6v26.6H26.7V26.7z"
                    ></path>
                    <path d="M53.3 53.3h10a10 10 0 11-10 10v-10zM26.7 53.3h-10a10 10 0 1010 10v-10zM53.3 26.7h10a10 10 0 10-10-10v10zM26.7 26.7h-10a10 10 0 1110-10v10z"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1492">
                      <rect width="80" height="80" fill="#fff" rx="16.6"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="font-bold leading-tight tracking-tight font-display text-slate-700 text-2xl md:text-3xl mb-3 font-medium sm:text-left text-center">
                Integrations
              </h3>
              <p className="text-base font-medium font-body text-slate-600 sm:text-left text-center">
                Incorporate wellness practices into your daily plan with
                reminders for meditation, hydration, and more.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="max-w-xs grid sm:place-items-start place-items-center">
              <div className="mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  fill="none"
                  viewBox="0 0 80 80"
                >
                  <g
                    stroke="#0891B2"
                    strokeWidth="5"
                    clipPath="url(#clip0_1_1501)"
                  >
                    <path d="M49.9 30.2L40 40l-9.9-9.8C20.4 20.6 15.5 15.8 17 11.6l.4-1c2-4 9-4 22.7-4 13.8 0 20.7 0 22.7 4l.4 1c1.4 4.2-3.5 9-13.2 18.6z"></path>
                    <path
                      strokeOpacity="0.5"
                      d="M30.1 49.8L40 40l9.9 9.8c9.7 9.6 14.6 14.4 13.2 18.6l-.4 1c-2 4-9 4-22.7 4-13.8 0-20.7 0-22.7-4a7 7 0 01-.4-1c-1.4-4.2 3.5-9 13.2-18.6z"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_1_1501">
                      <rect width="80" height="80" fill="#fff" rx="16.6"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="font-bold leading-tight tracking-tight font-display text-slate-700 text-2xl md:text-3xl mb-3 font-medium sm:text-left text-center">
                Focus Timer
              </h3>
              <p className="text-base font-medium font-body text-slate-600 sm:text-left text-center">
                Use the built-in Pomodoro timer for focused work sessions with
                customizable intervals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

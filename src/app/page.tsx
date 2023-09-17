"use client";
import Spline from "@splinetool/react-spline";
import Link from "next/link";

export default function Page() {
  return (
    <div className="relative bottom-8 flex h-screen flex-col items-center justify-center md:flex-row">
      {/* Left Column: Text */}
      <div className="mx-8 mb-8 w-full text-center md:mb-0 md:w-1/2">
        <h1
          className="leading-tighter mb-4 text-4xl font-extrabold tracking-tighter text-black md:text-7xl"
          data-aos="zoom-y-out"
        >
          Unlock your financial{" "}
          <span className="bg-gradient-to-r from-[#641AE6] to-[#FFE2F5] bg-clip-text text-transparent">
            freedom
          </span>
        </h1>

        <div className="mx-auto max-w-3xl">
          <p
            className="mb-8 text-xl text-gray-800"
            data-aos="zoom-y-out"
            data-aos-delay="150"
          >
            With FinanShell, take control of your expenses, budget like a pro,
            and learn the secrets of successful investing from our community.
          </p>

          <div
            className="mx-auto mb-4 max-w-xs sm:flex sm:max-w-none sm:justify-center"
            data-aos="zoom-y-out"
            data-aos-delay="300"
          >
            <div className="mb-4 sm:mb-0">
              <Link href="/sign-up">
                <button className="btn btn-primary w-full text-white hover:bg-blue-700">
                  Register
                </button>
              </Link>
            </div>
            <div className="mt-4 sm:ml-4 sm:mt-0">
              <Link href="/sign-in">
                <button className="btn btn-secondary w-full text-white hover:bg-gray-800">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Spline Object */}
      <div className="flex h-[300px] w-full items-center justify-center md:h-auto md:w-1/2">
        <div className="h-full w-full">
          <Spline scene="https://prod.spline.design/tGhfhJAi87C1Sz5s/scene.splinecode" />
        </div>
      </div>
    </div>
  );
}

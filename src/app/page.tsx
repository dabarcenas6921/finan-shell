"use client";
import Spline from "@splinetool/react-spline";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex h-screen -translate-y-16 transform items-center justify-center">
      {" "}
      {/* Added transform and translate utilities */}
      {/* Left Column: Text */}
      <div className="mx-8 w-1/2 text-center">
        <h1
          className="leading-tighter mb-4 text-4xl font-extrabold tracking-tighter text-white md:text-7xl"
          data-aos="zoom-y-out"
        >
          Unlock your financial{" "}
          <span className="bg-gradient-to-r from-[#641AE6] to-[#FFE2F5] bg-clip-text text-transparent">
            freedom
          </span>
        </h1>

        <div className="mx-auto max-w-3xl">
          <p
            className="mb-8 text-xl text-gray-400"
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
            <div>
              <Link href="/sign-up">
                <button className="btn btn-primary mb-4 w-full text-white hover:bg-blue-700 sm:mb-0 sm:w-auto">
                  Register
                </button>
              </Link>
            </div>
            <div>
              <Link href="/sign-in">
                <button className="btn btn-secondary w-full text-white hover:bg-gray-800 sm:ml-4 sm:w-auto">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Right Column: Spline Object */}
      <div className="flex w-1/2 items-center justify-center">
        <div className="h-screen w-screen">
          <Spline scene="https://prod.spline.design/tGhfhJAi87C1Sz5s/scene.splinecode" />
        </div>
      </div>
    </div>
  );
}

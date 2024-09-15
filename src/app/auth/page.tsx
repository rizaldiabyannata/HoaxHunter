"use client";

import Logo from "@/components/logo";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "@/components/ui/button";
import { IM_Fell_Double_Pica_SC } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";

const imFellDoublePicaSC = IM_Fell_Double_Pica_SC({
  subsets: ["latin"],
  weight: "400",
});

export default function Auth() {
  const router = useRouter();
  return (
    <div className="bg-onyx flex flex-col">
      <BackgroundBeamsWithCollision className="flex justify-center items-center  py-32">
        <h1
          className={`${imFellDoublePicaSC.className} text-white text-6xl font-bold flex flex-row`}
        >
          HoaxHun
          <span>
            <Logo />
          </span>
          er
        </h1>
      </BackgroundBeamsWithCollision>
      <div className="bg-blue-charcoal rounded-t-3xl h-[60%]">
        <div className="mt-16 px-4 flex flex-col justify-center items-center space-y-10">
          <div className="flex flex-col justify-center items-center space-y-4 text-white text-center w-72">
            <h2 className="text-2xl font-bold">Login or sign up</h2>
            <p>
              Please select your preferred method to continue setting up your
              account
            </p>
          </div>
          <div className="grid grid-rows-3 gap-2 w-full">
            <Button
              size={"xl"}
              className="w-full h-12"
              onClick={() => router.push("/auth/register/email")}
            >
              Continue with Email
            </Button>
            <Button
              variant="outline"
              size={"xl"}
              className="w-full h-12"
              onClick={() => router.push("/auth/register/phone")}
            >
              Continue with Phone
            </Button>
            <div className="grid grid-cols-2 space-x-2">
              <Button variant="outline" size={"xl"} className="h-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="scale-[2]"
                  width="0.98em"
                  height="1em"
                  viewBox="0 0 256 262"
                >
                  <path
                    fill="#4285f4"
                    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                  />
                  <path
                    fill="#34a853"
                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                  />
                  <path
                    fill="#fbbc05"
                    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
                  />
                  <path
                    fill="#eb4335"
                    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                  />
                </svg>
              </Button>
              <Button variant="outline" size={"xl"} className="h-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="scale-[2]"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="#1877f2"
                    d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
                  />
                  <path
                    fill="#fff"
                    d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"
                  />
                </svg>
              </Button>
            </div>
            <div className="flex justify-center items-center mt-2">
              <Link
                className="text-white hover:text-green-600 text-lg"
                href="/auth/login"
              >
                I already have an account
              </Link>
            </div>
          </div>
          <div className="px-6 text-center pb-4">
            <p className="text-white text-sm">
              If you are creating a new account, Terms & Conditions and Privacy
              Policy will apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

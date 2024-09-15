"use client";
import Logo from "@/components/logo";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IM_Fell_Double_Pica_SC } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";

const imFellDoublePicaSC = IM_Fell_Double_Pica_SC({
  subsets: ["latin"],
  weight: "400",
});

export default function Login() {
  const router = useRouter();
  return (
    <div className="bg-onyx flex flex-col">
      <BackgroundBeamsWithCollision className="flex justify-center items-center py-32">
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
      <div className="bg-blue-charcoal rounded-t-3xl h-[70%] pb-10">
        <div className="mt-10 px-4 flex flex-col justify-center items-center space-y-10">
          <div className="flex flex-col justify-center items-center space-y-4 text-white text-center">
            <h2 className="text-2xl font-bold">Login</h2>
            <p className="text-xs">
              Please enter information to login to your account. If you
              don&apos;t have an account, please register first.
            </p>
          </div>
          <form className="px-4 w-full flex flex-col justify-start" action="">
            <div className="flex flex-col space-y-2 mb-4">
              <Label className="text-white font-semibold text-lg" htmlFor="">
                Email or Phone
              </Label>
              <Input
                type="text"
                name=""
                id=""
                placeholder="Enter your email or phone number"
              />
            </div>
            <div className="flex flex-col space-y-2 mb-4">
              <Label className="text-white font-semibold text-lg" htmlFor="">
                Password
              </Label>
              <Input
                type="password"
                name=""
                id=""
                placeholder="Enter your password"
              />
            </div>
            <Button size={"xl"}>Login</Button>
          </form>
        </div>
        <div className="flex justify-center mt-6">
          <Link className="text-white hover:text-green-500" href="/auth">
            Haven&apos;t account?
          </Link>
        </div>
      </div>
    </div>
  );
}

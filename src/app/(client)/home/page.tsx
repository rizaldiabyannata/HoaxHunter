import { IM_Fell_Double_Pica_SC, Press_Start_2P } from "next/font/google";
import Img from "next/image";
import { Search } from "@/components/ui/search";

const imFellDoublePicaSC = IM_Fell_Double_Pica_SC({
  subsets: ["latin"],
  weight: "400",
});

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <div className="flex flex-col bg-onyx p-4">
      <div className="flex flex-col justify-start">
        <h1 className={`${pressStart2P.className} text-base text-white`}>
          Hai, Jhon Doe
        </h1>
        <p className="text-[#9B9B9B] text-xs mt-1 font-normal">Selamat Malam</p>
      </div>
      <div className="flex flex-row justify-between">
        <div className="w-full border rounded-lg p-4 mt-4">
          <div className="flex flex-col justify-start ">
            <div className="flex flex-row justify-start space-x-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M16 4h6v16h-6zM2 14h6v6H2zm13-4H9v10h6z"
                />
              </svg>
              <h2 className={`${pressStart2P.className} text-sm text-white`}>
                Status
              </h2>
            </div>
            <div
              className={`${imFellDoublePicaSC.className} flex flex-col justify-start text-white`}
            >
              <p>Hoaxes Debunked: 42</p>
              <p>Accuracy Rate: 95%</p>
              <p>Rank: Truth Seeker</p>
            </div>
          </div>
        </div>
      </div>
      <Search className="mt-4 text-white" />
    </div>
  );
}

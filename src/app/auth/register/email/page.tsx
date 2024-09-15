"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useRouter } from "next/navigation";

export default function Email() {
  const router = useRouter();
  return (
    <div className="bg-onyx px-4 h-full">
      <div className="flex justify-start items-center py-4 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 24 24"
          onClick={(e) => router.back()}
        >
          <path
            fill="white"
            d="m7.825 13l4.9 4.9q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-6.6-6.6q-.15-.15-.213-.325T4.426 12t.063-.375t.212-.325l6.6-6.6q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L7.825 11H19q.425 0 .713.288T20 12t-.288.713T19 13z"
          />
        </svg>
      </div>
      <div className="flex flex-col space-y-2 text-white text-start mb-4">
        <h1 className="text-xl font-semibold">Get going with email</h1>
        <p className="text-pretty pr-2">
          It’s helpful to provide a good reason for why the email address is
          required.
        </p>
      </div>
      <form action="">
        <div className="flex flex-col space-y-2 mb-4">
          <Label className="text-white font-semibold text-lg" htmlFor="">
            Username
          </Label>
          <Input type="text" name="" id="" placeholder="Enter your username" />
        </div>
        <div className="flex flex-col space-y-2 mb-4">
          <Label className="text-white font-semibold text-lg" htmlFor="">
            Email
          </Label>
          <Input type="email" name="" id="" placeholder="Enter your email" />
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
        <div className="flex flex-col space-y-2 mb-4">
          <Label className="text-white font-semibold text-lg" htmlFor="">
            Confirm password
          </Label>
          <Input
            type="password"
            name=""
            id=""
            placeholder="Confirm your password"
          />
        </div>
        <div className="mt-16 flex flex-row">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-white text-sm font-medium pl-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            By clicking here, I state that I have read and understood the terms
            and conditions.
          </label>
        </div>
        <div className="py-4">
          <Button className="w-full" type="submit" size="lg" variant="default">
            Sign up
          </Button>
        </div>
      </form>
    </div>
  );
}

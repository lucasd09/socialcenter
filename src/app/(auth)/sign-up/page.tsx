"use client";

import { Button } from "@/components/button";
import { useRouter } from "next/navigation";
import { SignUpForm } from "./sign-up-form";
import { Logo } from "@/components/logo";

export default function Page() {
  const router = useRouter();

  const handleRedirectSignIn = () => {
    router.push("sign-in");
  };

  return (
    <div className="w-full h-screen max-w-xl p-8 flex items-center justify-center bg-background">
      <div className="w-full max-w-md space-y-6">
        <Logo className="justify-center" />
        <h2 className="text-3xl font-extrabold text-center">
          Create an account for free
        </h2>

        <SignUpForm />

        <div className="flex justify-end items-center text-sm">
          <p>Already have an account?</p>
          <Button
            variant={"link"}
            onClick={handleRedirectSignIn}
          >
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { Button } from "@/components/button";
import { Icon } from "@/components/icon";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SignInForm } from "./sign-in-form";
import { Logo } from "@/components/logo";

export default function Page() {
  const router = useRouter();

  const handleRedirectSignUp = () => {
    router.push("sign-up");
  };

  return (
    <div className="w-full h-screen max-w-xl flex items-center justify-center p-8 bg-background">
      <div className="w-full max-w-md space-y-6">
        <Logo className="justify-center" />
        <h2 className="text-3xl font-extrabold text-center">
          Sign in to your account
        </h2>

        <SignInForm />

        <div className="flex justify-between items-center text-sm">
          <div className="grow">
            <Link href="/">
              <Button
                variant="ghost"
                className="px-2 gap-2 font-normal"
              >
                <Icon src={ArrowLeft} />
                <p>Go back</p>
              </Button>
            </Link>
          </div>

          <p>Doesn't have an account?</p>
          <Button
            variant={"link"}
            onClick={handleRedirectSignUp}
          >
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { CheckCircle, Code, Lock, Zap } from "lucide-react";
import { Button } from "@/components/button";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link
          className="flex items-center justify-center"
          href="#"
        >
          <Zap className="h-6 w-6 text-primary" />
          <span className="sr-only">NextJS Template</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:text-primary"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:text-primary"
            href="#pricing"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:text-primary"
            href="#faq"
          >
            FAQ
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Next.js Template with Auth & Components
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Jumpstart your Next.js projects with our powerful template.
                  Built-in authentication, pre-styled components, and more!
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg">Try it Out</Button>
                <Button
                  variant="outline"
                  size="lg"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className=" px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Key Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-card text-card-foreground">
                <Lock className="h-8 w-8 mb-2 text-primary" />
                <h3 className="text-xl font-bold">Built-in Authentication</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Secure user authentication system ready to use out of the box.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-card text-card-foreground">
                <Code className="h-8 w-8 mb-2 text-primary" />
                <h3 className="text-xl font-bold">Pre-styled Components</h3>
                <p className="text-sm text-muted-foreground text-center">
                  A rich set of customizable UI components to speed up
                  development.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-card text-card-foreground">
                <Zap className="h-8 w-8 mb-2 text-primary" />
                <h3 className="text-xl font-bold">Performance Optimized</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Built with performance in mind, ensuring fast load times and
                  smooth interactions.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32"
        >
          <div className=" px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Simple Pricing
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col p-6 bg-card text-card-foreground rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Starter</h3>
                <p className="text-muted-foreground mb-4">
                  Perfect for small projects
                </p>
                <p className="text-4xl font-bold mb-6">$0,00</p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                    Basic authentication
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                    10 pre-built components
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                    Community support
                  </li>
                </ul>
                <Button className="mt-auto">Get Started</Button>
              </div>
              <div className="flex flex-col p-6 bg-card text-card-foreground rounded-lg shadow-lg border-2 border-primary">
                <h3 className="text-2xl font-bold mb-4">Pro</h3>
                <p className="text-muted-foreground mb-4">
                  Best for growing businesses
                </p>
                <p className="text-4xl font-bold mb-6">$0,00</p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                    Advanced authentication
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                    30 pre-built components
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                    Priority support
                  </li>
                </ul>
                <Button className="mt-auto">Get Started</Button>
              </div>
              <div className="flex flex-col p-6 bg-card text-card-foreground rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                <p className="text-muted-foreground mb-4">
                  For large-scale applications
                </p>
                <p className="text-4xl font-bold mb-6">Free</p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                    Custom authentication solutions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                    Unlimited components
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                    24/7 dedicated support
                  </li>
                </ul>
                <Button className="mt-auto">Contact Sales</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Get Started?
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of developers who are building faster with our
                  Next.js template.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button
                  className="w-full"
                  size="lg"
                >
                  Get Started Now
                </Button>
                <p className="text-xs text-muted-foreground">
                  No credit card required. Start your free 14-day trial today.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          © 2023 Next.js Template. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="#"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

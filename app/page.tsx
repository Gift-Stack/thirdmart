/* eslint-disable @next/next/no-img-element */
import { Icons } from "@/components/icons";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <Icons.Mountain className="h-6 w-6" />
          <span className="sr-only">Thirdmart</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Features
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            DeFi
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Testimonials
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Pricing
          </Link>
        </nav>
      </header>

      {/* 3D Model */}
      {/* <section className="h-screen w-screen flex items-center justify-center">
        <iframe
          src="https://my.spline.design/particles-53df9134c6d2dc358c8feb9f963e358f/"
          width="100%"
          height="100%"
          style={{
            zIndex: 0,
            transform: "scale3d(1none,1none,1none)",
            transformStyle: "preserve-3d",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            display: "flex",
            position: "relative",
            top: "0%",
            bottom: "0%",
            left: "0%",
            right: "0%",
          }}
        ></iframe>
      </section> */}

      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Unleash the Power of Visual Composer with DeFi
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Our cutting-edge frontend framework seamlessly integrates
                  Visual Composer with DeFi capabilities, empowering you to
                  create stunning, feature-rich websites with ease.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <Link
                  href="/app/getting-started"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Get Started
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
            <img
              src="https://generated.vusercontent.net/placeholder.svg"
              width="1270"
              height="300"
              alt="Hero"
              className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="features">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Elevate Your Web Experiences
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our frontend framework seamlessly integrates Visual Composer
                  with cutting-edge DeFi capabilities, empowering you to create
                  stunning, feature-rich websites with ease.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">
                  Visual Composer Integration
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Leverage the power of Visual Composer, the leading
                  drag-and-drop page builder, to create visually stunning
                  websites with ease.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">DeFi Capabilities</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Seamlessly integrate DeFi features, such as cryptocurrency
                  wallets, token swaps, and staking, into your web applications.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">User-Friendly Interface</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Enjoy a clean, intuitive, and responsive user interface that
                  makes it a breeze to build and manage your web projects.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Scalable and Secure</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our framework is built with scalability and security in mind,
                  ensuring your web applications can handle growing traffic and
                  user demands.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Extensive Documentation</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Explore our comprehensive documentation and tutorials to get
                  up and running quickly, with support for developers of all
                  skill levels.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Customizable Themes</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Choose from a wide selection of pre-built themes or create
                  your own custom designs to match your brand&apos;s unique
                  style.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
          id="defi"
        >
          <div className="container grid items-center justify-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Unlock the Power of DeFi
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Seamlessly integrate DeFi features, such as cryptocurrency
                wallets, token swaps, and staking, into your web applications
                with our cutting-edge framework.
              </p>
            </div>
            <div className="flex space-x-4 lg:justify-end">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Learn More
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="testimonials">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What Our Customers Say
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Hear from the developers and businesses who have transformed
                their web experiences with our cutting-edge frontend framework.
              </p>
            </div>
            <div className="divide-y rounded-lg border">
              <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <img
                      src="https://generated.vusercontent.net/placeholder.svg"
                      width="140"
                      height="70"
                      alt="Logo"
                      className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    />
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      &quot; Our website has never looked better since we
                      started using this framework. Highly recommended! &quot;
                    </p>
                    <p className="text-sm font-medium">
                      - John Doe, CEO of Acme Inc.
                    </p>
                  </div>
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <img
                      src="https://generated.vusercontent.net/placeholder.svg"
                      width="140"
                      height="70"
                      alt="Logo"
                      className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    />
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      &quot;The DeFi integration has been a game-changer for our
                      business. We&apos;re able to offer our customers more
                      financial services than ever before.&quot;
                    </p>
                    <p className="text-sm font-medium">
                      - Jane Smith, CTO of Blockchain Inc.
                    </p>
                  </div>
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-8">
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <img
                      src="https://generated.vusercontent.net/placeholder.svg"
                      width="140"
                      height="70"
                      alt="Logo"
                      className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    />
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      &quot;The Visual Composer integration is a lifesaver. We
                      can now create stunning websites without having to write a
                      single line of code.&quot;
                    </p>
                    <p className="text-sm font-medium">
                      - Michael Johnson, Freelance Web Developer
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <img
                      src="https://generated.vusercontent.net/placeholder.svg"
                      width="140"
                      height="70"
                      alt="Logo"
                      className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    />
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      &quot;The user-friendly interface makes it a breeze to
                      manage our website. We&apos;re able to make updates and
                      changes in no time.&quot;
                    </p>
                    <p className="text-sm font-medium">
                      - Sarah Lee, Marketing Manager at Startup X
                    </p>
                  </div>
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <img
                      src="https://generated.vusercontent.net/placeholder.svg"
                      width="140"
                      height="70"
                      alt="Logo"
                      className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    />
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      &quot;The customizable themes have allowed us to create a
                      website that perfectly reflects our brand&apos;s unique
                      style and identity.&quot;
                    </p>
                    <p className="text-sm font-medium">
                      - David Kim, Creative Director at Design Agency
                    </p>
                  </div>
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <img
                      src="https://generated.vusercontent.net/placeholder.svg"
                      width="140"
                      height="70"
                      alt="Logo"
                      className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

"use client";
import { Button } from "@/components/ui/button";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  // Active useState
  const [activeTab, setActiveTab] = useState("organize"); //organize, hired, boards
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        {/*Hero section */}
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-4xl text-center ">
            <h1 className="text-black mb-6 text-6xl font-bold ">
              A better way to track job application.
            </h1>
            <p className="text-muted-foreground mb-10">
              Capture, organize, and manage your job search in one place,{" "}
            </p>
            <div className="flex flex-col items-center gap-4">
              {/* Shadcn button use */}
              <Link href="/sign-up">
                <Button size="lg" className="h-12 px-8 font-medium">
                  Start for free <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground ">Free forever. No card required</p>
            </div>
          </div>
        </section>
        {/* Hero Image Section with tabs  */}
        <section className="border-t bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              {/* Tabs */}
              <div className="flex gap-2 justify-center">
                <Button onClick={() => setActiveTab("organize")} className="bg-pink-500 ">
                  Organize Application
                </Button>
                <Button onClick={() => setActiveTab("hired")} className="bg-pink-500 ">
                  Get Hired
                </Button>
                <Button onClick={() => setActiveTab("boards")} className="bg-pink-500 ">
                  Organize Applications
                </Button>
              </div>
              {/* image ekane ekta useState er mardome sundor kaj kora hoyche */}
              <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl">
                {activeTab === "organize" && (
                  <Image
                    src="/hero-images/hero1.png"
                    alt="Application organize"
                    width={1200}
                    height={800}
                  ></Image>
                )}
                {activeTab === "hired" && (
                  <Image
                    src="/hero-images/hero2.png"
                    alt="Application organize"
                    width={1200}
                    height={800}
                  ></Image>
                )}
                {activeTab === "boards" && (
                  <Image
                    src="/hero-images/hero3.png"
                    alt="Application organize"
                    width={1200}
                    height={800}
                  ></Image>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

"use client";
// =====my custom code========
import React, { useState } from "react";
import { Button } from "./button";
import Image from "next/image";

const ImageTabs = () => {
  // Active useState
  const [activeTab, setActiveTab] = useState("organize"); //organize, hired, boar
  return (
    <div>
      {" "}
      <section className="border-t bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            {/* Tabs */}
            <div className="flex gap-3 mb-5 justify-center">
              <Button
                onClick={() => setActiveTab("organize")}
                className={` rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "organize" ? "bg-pink-500  text-white" : "bg-gray-100 text-gray-700"} `}
              >
                Organize Application
              </Button>
              <Button
                onClick={() => setActiveTab("hired")}
                className={` rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "hired" ? "bg-pink-500  text-white" : "bg-gray-100 text-gray-700"} `}
              >
                Get Hired
              </Button>
              <Button
                onClick={() => setActiveTab("boards")}
                className={` rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "boards" ? "bg-pink-500  text-white" : "bg-gray-100 text-gray-700"} `}
              >
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
    </div>
  );
};

export default ImageTabs;

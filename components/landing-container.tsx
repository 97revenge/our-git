"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
// import { streamComponent } from "./actions";
import { ArrowRightIcon } from "lucide-react";
import { streamComponent } from "@/actions/user";

export const LandingContainer = () => {
  const [component, setComponent] = useState<React.ReactNode>();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-secondary to-primary flex flex-col items-center justify-center p-4 transition-all duration-300">
      <div className="w-full max-w-2xl bg-secondary bg-opacity-90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-10 space-y-8 transition-all duration-300 hover:shadow-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-primary transition-all duration-300 hover:scale-105">
          Can I make an overview of your github?
        </h1>
        <p className="text-center text-white font-bold  transition-all duration-300 hover:text-primary">
          Overview generation based on your github profile operated by Google AI
        </p>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setComponent(await streamComponent());
          }}
          className="space-y-4"
        >
          <div className="flex items-center space-x-2 bg-gray-100 rounded-full p-2 transition-all duration-300 hover:bg-gray-200 focus-within:ring-2 focus-within:ring-purple-400">
            <input
              type="text"
              placeholder="Drop your github username ..."
              className="flex-grow bg-transparent outline-none text-primary placeholder-gray-500 px-4 py-2 rounded-full"
            />
            <Button
              type="submit"
              className="bg-black text-white rounded-full px-6 py-2 hover:bg-primary transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              Send <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
        <div className="bg-gray-100 rounded-2xl p-6 min-h-[120px] transition-all duration-300 hover:bg-gray-200 hover:shadow-md">
          {component ? (
            component
          ) : (
            <p className="text-gray-500 text-center transition-all duration-300 hover:text-gray-700">
              Your response will appear here
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

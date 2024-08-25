"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Twitter, Github, Globe } from "lucide-react";
import { Badge } from "./ui/badge";
import { FadeUp } from "./motion-variants/fade-up";

export const EnchancedProfileCard = ({ ...props }) => {
  return (
    <>
      <FadeUp stagger={0}>
        <div className="w-full max-w-sm" {...props}></div>
      </FadeUp>
    </>
  );
};

export const ThemeToggle = ({ darkMode, setDarkMode }: any) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="mb-4 p-2 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-md transition-colors duration-300"
      aria-label="Toggle dark mode"
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export const ProfileCard = ({ ...props }) => {
  return (
    <>
      <div className="w-full max-w-sm" {...props}></div>
    </>
  );
};

export const SocialLink = ({ href, icon, label }: any) => {
  return (
    <a
      href={href}
      className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 transition-colors duration-200"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Twitter, Github, Globe } from "lucide-react";
import { Badge } from "./ui/badge";

export const EnchancedProfileCard = () => {
  return (
    <div className="w-full max-w-sm">
      <ProfileCard />
    </div>
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

function ProfileCard() {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-300">
      <div className="p-4">
        <ProfileHeader />
        <ProfileBio />
        <SocialLinks />
      </div>
    </article>
  );
}

function ProfileHeader() {
  return (
    <div className="flex items-center space-x-2 mb-2">
      <img
        alt="Claire Mac"
        src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
        className="w-16 h-16 rounded-full object-cover"
      />
      <div>
        <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          Claire Mac
        </h1>
        <Badge
          variant={"secondary"}
          className="text-sm text-primary dark:text-white"
        >
          Full-Stack Developer
        </Badge>
      </div>
    </div>
  );
}

function ProfileBio() {
  return (
    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
      Passionate about creating beautiful and functional web experiences. Always
      learning and exploring new technologies.
    </p>
  );
}

function SocialLinks() {
  return (
    <div className="flex justify-start space-x-4">
      <Badge className="rounded-full" variant={"secondary"}>
        <SocialLink href="#" icon={<Twitter size={18} />} label="Twitter" />
      </Badge>
      <Badge className="rounded-full" variant={"secondary"}>
        <SocialLink href="#" icon={<Github size={18} />} label="GitHub" />
      </Badge>
      <Badge className="rounded-full" variant={"secondary"}>
        <SocialLink href="#" icon={<Globe size={18} />} label="Website" />
      </Badge>
    </div>
  );
}

function SocialLink({ href, icon, label }: any) {
  return (
    <a
      href={href}
      className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 transition-colors duration-200"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

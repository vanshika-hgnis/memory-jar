import React from "react";
import Navbar from "./components/Navbar";
import { supabase } from "/SupabaseClient.js";
import { useState, useEffect } from "react";

function LandingPage() {
  return (
    <>
      <main className="flex items-center justify-center h-screen ">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-blue-400 dark:to-pink-950/10">
          MemoryJar
        </span>
      </main>
    </>
  );
}

export default LandingPage;

"use client";
import React, { useEffect } from "react";
import "ldrs/grid";

const Loading = () => {
  useEffect(() => {
    async function getLoader() {
      const { grid } = await import("ldrs");
      grid.register();
    }
    getLoader();
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="text-center">
        <l-grid size="80" speed="1.5" color="#00BCD4"></l-grid>
        <p className="mt-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 text-sm font-bold animate-fill-cyan">
          BYTE-SIZED DREAMS, INFINITE POSSIBILITIES
        </p>
      </div>
    </div>
  );
};

export default Loading;

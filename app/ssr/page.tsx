// app/ssr/page.tsx
import Image from "next/image";
import React from "react";

const SSRPage = async () => {
  const res = await fetch(`https://dog.ceo/api/breeds/image/random`);
  const data = await res.json();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Random Dog Image</h1>
      <div className="flex justify-center">
        <Image
          src={data.message}
          alt="A random dog"
          width={800}
          height={600}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default SSRPage;
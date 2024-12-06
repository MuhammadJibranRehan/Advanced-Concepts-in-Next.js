// app/ssg/page.tsx
import Image from "next/image";
import React from "react";

const SSGPage = async () => {
  const res = await fetch(`https://api.thecatapi.com/v1/images/search`);
  const data = await res.json();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Random Cat Image</h1>
      <div className="flex justify-center">
        <Image
          src={data[0].url}
          alt="A random cat"
          width={800}
          height={600}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default SSGPage;
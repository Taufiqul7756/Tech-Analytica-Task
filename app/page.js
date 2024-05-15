import React from "react";
import ProductPage from "./products/page";

export default function Home() {
  return (
    <div className="flex gap-5 min-h-screen px-5">
      <ProductPage />
    </div>
  );
}

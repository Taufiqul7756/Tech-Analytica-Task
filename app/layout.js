import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ProductsProvider } from "./context/ProductsContext";
import { CartProvider } from "./context/CartContext.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shop",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className={inter.className}>
        <ProductsProvider>
          <CartProvider>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow mt-20">{children}</main>
              <Footer />
            </div>
          </CartProvider>
        </ProductsProvider>
      </body>
    </html>
  );
}

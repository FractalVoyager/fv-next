import "./global.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FractalVoyager",
  description:
    "fractal explorer using a complex dynamics scripting language compiled to wasm in the browser",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

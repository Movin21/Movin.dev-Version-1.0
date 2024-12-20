import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "movin.dev",
  description: "Byte-sized Dreams, Infinite Possibilities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <script
            type="module"
            defer
            src="https://cdn.jsdelivr.net/npm/ldrs/dist/auto/spiral.js"
          ></script>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

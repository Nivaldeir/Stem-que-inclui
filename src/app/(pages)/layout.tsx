import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../../shared/styles/globals.css";
import { Toaster } from "sonner";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Stem que inclui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased dark`}
      >
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}

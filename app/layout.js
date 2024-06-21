import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "./Layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Belingum",
  description: "Made by Faxraddin.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Layout>
          {children}
        </Layout>
        </body>
    </html>
  );
}

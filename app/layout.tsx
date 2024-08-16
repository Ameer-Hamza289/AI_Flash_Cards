import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import Link from "next/link";
import { FaUser } from "react-icons/fa";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Flashcards",
  description: "AI Flashcard App built using NEXT JS and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <header>
            <nav className="flex items-center justify-between p-4 bg-gray-800 text-white shadow-md">
              <div className="text-xl font-bold hover:text-purple-500">
                <Link href={"/"}>
                  FlashCardApp
                </Link>
              </div>
              <div className="flex items-center space-x-6">
                <Link href="/dashboard" className=" hover:text-purple-500">
                  Dashboard
                  <span className=" w-full h-0.5 bg-purple-500 transform scale-x-0 transition-transform duration-300 ease-out origin-left hover:scale-x-100"></span>
                </Link>
                <div className=" hover:text-purple-500">
                  <SignedOut>
                    <SignInButton />
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </div>
              </div>
            </nav>
          </header>
          <main>
            <ToastContainer />
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}

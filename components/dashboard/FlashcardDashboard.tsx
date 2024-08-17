import React, { SyntheticEvent, useState } from "react";
import Link from "next/link";
import FlashcardDeckCard from "./FlashcardDeckCard";

const FlashcardDashboard = ({ title }: { title?: string }) => {
  const [content, setContent] = useState<string>("");

<<<<<<< HEAD
  const handleAsk = async () => {
    const response = await fetch("/api/agent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });
  };

=======
import React from 'react';
import Link from 'next/link';
// import Navbar from '../landing-page/Navbar';

const FlashcardDashboard = ({title}:{title:string}) => {
>>>>>>> main
  return (
    <>
    {/* <Navbar/> */}
    <div className="min-h-screen p-8 bg-gray-100 text-black">
<<<<<<< HEAD
      <h1 className="text-3xl font-bold mb-4">{title || "Flash Card Title"}</h1>
=======
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
>>>>>>> main
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-2">Ask a Question</h2>
        <div className="flex items-center space-x-4">
          <textarea 
            placeholder="Type your question here..." 
            className="w-[70%] p-3 mb-4 border rounded-lg resize-none h-24"
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
<<<<<<< HEAD
          <button
            className="bg-purple-500 text-white py-3 px-7 rounded-lg mt-2"
            onClick={handleAsk}
          >
=======
          <button className="bg-purple-500 text-white p-3 rounded-lg mt-2">
>>>>>>> main
            Ask AI
          </button>
        </div>
      </div>
<<<<<<< HEAD
      {/* <FlashcardDeckCard></FlashcardDeckCard> */}
      <div className="mt-8">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold mb-4">Your Recent Questions</h2>
          <Link href="/flashcard-viewer">
            <button className="bg-purple-500 text-white p-2 rounded-lg ml-4 hover:bg-blue-600">
              View Responses
            </button>
          </Link>
        </div>
=======
      
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Your Recent Questions</h2>
>>>>>>> main
        <ul className="space-y-4">
          <li className="flex justify-between items-center">
            <span>What is the capital of France?</span>
            <Link href="/flashcard-viewer">
              <button className="bg-blue-500 text-white p-2 rounded-lg ml-4 hover:bg-blue-600">
                View Response
              </button>
            </Link>
          </li>
          <hr className="border-black" />
          <li className="flex justify-between items-center">
            <span>How does a combustion engine work?</span>
            <Link href="/flashcard-viewer">
              <button className="bg-blue-500 text-white p-2 rounded-lg ml-4 hover:bg-blue-600">
                View Response
              </button>
            </Link>
          </li>
          <hr className="border-black" />
          <li className="flex justify-between items-center">
            <span>Explain the concept of Quantum Physics.</span>
            <Link href="/flashcard-viewer">
              <button className="bg-blue-500 text-white p-2 rounded-lg ml-4 hover:bg-blue-600">
                View Response
              </button>
            </Link>
          </li>
          <hr className="border-black" />
        </ul>
      </div>
    </div>
    </>
  );
};

export default FlashcardDashboard;

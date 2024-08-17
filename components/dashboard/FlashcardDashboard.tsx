"use client";
import React, { SyntheticEvent, useState } from "react";
import Link from "next/link";
import FlashcardDeckCard from "./FlashcardDeckCard";
import { FlashCard } from "@/types";
import { askLLM } from "@/backend/agent/agent";
import { db } from "@/backend/db/firbase.config";
import { addDoc, collection } from "firebase/firestore";
import { getFlashCard } from "@/backend/db/getFlashCard";
const FlashcardDashboard = ({ title }: { title: string }) => {
  const [content, setContent] = useState<string>("");

  const [flashCard, setFlashCard] = useState<null | FlashCard>(null);

  const handleAsk = async () => {
    const response = await askLLM(title, content);
    // console.log(response);
    setFlashCard(JSON.parse(response));
  };

  const saveFlashCard = async () => {
    const collectionRef = collection(db, "flashcards");
    await addDoc(collectionRef, flashCard);
  };
  const printFC = async () => {
    await getFlashCard();
  };

  return (
    <>
      {/* <Navbar/> */}
      <div className="min-h-screen p-8 bg-gray-100 text-black">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
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
            <button
              className="bg-purple-500 text-white py-3 px-7 rounded-lg mt-2"
              onClick={handleAsk}
            >
              Ask AI
            </button>
          </div>
        </div>
        {flashCard && (
          <div className="mt-20 font-bold">
            front <div className="font-light">{flashCard?.front}</div>
            back <div className="font-light">{flashCard?.back}</div>
          </div>
        )}

        {flashCard && (
          <button
            className="bg-purple-500 text-white py-3 px-7 rounded-lg mt-2"
            onClick={saveFlashCard}
          >
            Save FlashCard
          </button>
        )}

        <button
          className="bg-purple-500 text-white py-3 px-7 rounded-lg mt-2"
          onClick={printFC}
        >
          Print FC
        </button>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Your Recent Questions</h2>
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

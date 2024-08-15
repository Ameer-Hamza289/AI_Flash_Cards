

import React from 'react';
import Link from 'next/link';

const FlashcardDashboard = ({ title }: { title?: string | undefined }) => {
  return (
    <div className="min-h-screen p-8 bg-gray-100 text-black">
      <h1 className="text-3xl font-bold mb-4">{title || 'Flash Card Title'}</h1>
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-2">Ask a Question</h2>
        <div className="flex items-center space-x-4">
          <textarea
            placeholder="Type your question here..."
            className="w-[70%] p-3 mb-4 border rounded-lg resize-none h-24"
          />
          <button className="bg-purple-500 text-white py-3 px-7 rounded-lg mt-2">
            Ask AI
          </button>
        </div>
      </div>

      <div className="mt-8">
        <div className='flex justify-between'>
          <h2 className="text-xl font-semibold mb-4">Your Recent Questions</h2>
          <Link href="/flashcard-viewer">
            <button className="bg-purple-500 text-white p-2 rounded-lg ml-4 hover:bg-blue-600">
              View Responses
            </button>
          </Link>
        </div>
        <ul className="space-y-4">
          <li className="flex justify-between items-center">
            <span>What is the capital of France?</span>
            {/* <Link href="/flashcard-viewer">
              <button className="bg-blue-500 text-white p-2 rounded-lg ml-4 hover:bg-blue-600">
                View Response
              </button>
            </Link> */}
          </li>
          <hr className="border-black" />
          <li className="flex justify-between items-center">
            <span>How does a combustion engine work?</span>
            {/* <Link href="/flashcard-viewer">
              <button className="bg-blue-500 text-white p-2 rounded-lg ml-4 hover:bg-blue-600">
                View Response
              </button>
            </Link> */}
          </li>
          <hr className="border-black" />
          <li className="flex justify-between items-center">
            <span>Explain the concept of Quantum Physics.</span>
            {/* <Link href="/flashcard-viewer">
              <button className="bg-blue-500 text-white p-2 rounded-lg ml-4 hover:bg-blue-600">
                View Response
              </button>
            </Link> */}
          </li>
          <hr className="border-black" />
        </ul>
      </div>
    </div>
  );
};

export default FlashcardDashboard;

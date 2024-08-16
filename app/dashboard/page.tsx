'use client';

import React, { SyntheticEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import FlashcardDeckCard from '@/components/dashboard/FlashcardDeckCard';
import { toast } from 'react-toastify';
import Navbar from '@/components/landing-page/Navbar';

interface Deck {
  id: number;
  name: string;
  cards: number;
  preview: string[];
}

const Dashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [decks, setDecks] = useState<Deck[]>([
    { id: 1, name: 'General Knowledge', cards: 50, preview: ['What is the capital of France?', 'What is 2 + 2?'] },
    { id: 2, name: 'Math', cards: 30, preview: ['What is 10 * 10?', 'What is 100/4?'] },
    { id: 3, name: 'Science', cards: 20, preview: ['What is H2O?', 'What is the speed of light?'] },
  ]);
  const router = useRouter();

  // const filteredDecks = decks.filter((deck) =>
  //   deck.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  const filteredDecks = decks;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCreateDeck = (e: SyntheticEvent) => {
    e.preventDefault();
    if (searchTerm === '') {
      // toast.error('The search field is required!')
      setError('Search field is required');
    } else {
      router.push('/create-deck');
    }
  };

  const handleEditDeck = (id: number) => {
    router.push(`/flashcards/${id}`);
  };

  const handleDeleteDeck = (id: number) => {
    setDecks(decks.filter((deck) => deck.id !== id));
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        <div className="flex gap-3 items-center mb-4">
          <input
            type="text"
            placeholder="Enter the topic..."
            required
            value={searchTerm}
            onChange={handleSearchChange}
            className="px-4 py-2 border border-gray-300 rounded-lg flex-1 text-black"
          />
          <button onClick={handleCreateDeck} className="px-4 py-2 bg-purple-500 text-white rounded-lg">
            Create Deck/Flashcard
          </button>
        </div>
        <div className='flex justify-center align-middle pb-3 text-red-600'>{error}</div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredDecks.length > 0 ? (
            filteredDecks.map((deck) => (
              <FlashcardDeckCard
                key={deck.id}
                deck={deck}
                onEdit={() => handleEditDeck(deck.id)}
                onDelete={() => handleDeleteDeck(deck.id)}
              />
            ))
          ) : (
            <p className="text-gray-600">No decks found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
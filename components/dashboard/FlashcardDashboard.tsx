'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import FlashcardDeckCard from './FlashcardDeckCard';

interface Deck {
  id: number;
  name: string;
  cards: number;
  preview: string[];
}

const FlashcardDashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [decks, setDecks] = useState<Deck[]>([
    { id: 1, name: 'General Knowledge', cards: 50, preview: ['What is the capital of France?', 'What is 2 + 2?'] },
    { id: 2, name: 'Math', cards: 30, preview: ['What is 10 * 10?', 'What is 100/4?'] },
    { id: 3, name: 'Science', cards: 20, preview: ['What is H2O?', 'What is the speed of light?'] },
  ]);
  const router = useRouter();

  const filteredDecks = decks.filter((deck) =>
    deck.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCreateDeck = () => {
    // router.push('/flashcards/create-deck');
    console.log("create card");
    
  };

  const handleEditDeck = (id: number) => {
    // router.push(`/flashcards/${id}`);
    console.log("Edit the flashcard");
    
  };

  const handleDeleteDeck = (id: number) => {
    setDecks(decks.filter((deck) => deck.id !== id));
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search decks..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="px-4 py-2 border border-gray-300 rounded-lg w-1/3"
        />
        <button onClick={handleCreateDeck} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          Create Deck/Flashcard
        </button>
      </div>

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
  );
};

export default FlashcardDashboard;

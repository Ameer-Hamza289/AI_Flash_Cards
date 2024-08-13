import React from 'react';

interface Deck {
  id: number;
  name: string;
  cards: number;
  preview: string[];
}

interface FlashcardDeckCardProps {
  deck: Deck;
  onEdit: () => void;
  onDelete: () => void;
}

const FlashcardDeckCard: React.FC<FlashcardDeckCardProps> = ({ deck, onEdit, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md relative">
      <h2 className="text-lg font-bold mb-2">{deck.name}</h2>
      <p className="text-gray-600 mb-4">Cards: {deck.cards}</p>
      <div className="text-gray-800">
        <p className="font-semibold">Preview:</p>
        <ul className="list-disc ml-4">
          {deck.preview.map((question, idx) => (
            <li key={idx} className="text-sm">
              {question}
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute top-2 right-2 flex space-x-2">
        <button onClick={onEdit} className="px-2 py-1 bg-yellow-500 text-white rounded">
          Edit
        </button>
        <button onClick={onDelete} className="px-2 py-1 bg-red-500 text-white rounded">
          Delete
        </button>
      </div>
    </div>
  );
};

export default FlashcardDeckCard;

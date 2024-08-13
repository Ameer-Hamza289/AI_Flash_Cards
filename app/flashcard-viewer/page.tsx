'use client';

import { useState, useEffect } from 'react';

const FlashcardViewer = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knownCards, setKnownCards] = useState([]);
  const [timeSpent, setTimeSpent] = useState(0);
  const [theme, setTheme] = useState('dark');
  const cards = [
    { question: 'What is the capital of France?', answer: 'Paris' },
    { question: 'What is 2 + 2?', answer: '4' },
    // Add more cards as needed
  ];

  useEffect(() => {
    const timer = setInterval(() => setTimeSpent(timeSpent + 1), 1000);
    return () => clearInterval(timer);
  }, [timeSpent]);

  const handleFlip = () => setIsFlipped(!isFlipped);

  const handleNext = () => {
    setIsFlipped(false);
    setTimeSpent(0);
    setCurrentCard((prev) => (prev + 1) % cards.length);
  };

  const handlePrevious = () => {
    setIsFlipped(false);
    setTimeSpent(0);
    setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    setTimeSpent(0);
    setCurrentCard(Math.floor(Math.random() * cards.length));
  };

  const handleMarkKnown = () => {
    if (!knownCards.includes(currentCard)) {
      setKnownCards([...knownCards, currentCard]);
    }
  };

  const handleReset = () => {
    setIsFlipped(false);
    setCurrentCard(0);
    setKnownCards([]);
    setTimeSpent(0);
  };

  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const progressPercentage = ((currentCard + 1) / cards.length) * 100;

  return (
    <div className={`flex flex-col items-center justify-center h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="relative w-80 h-48">
        <div
          className={`absolute w-full h-full transition-transform duration-700 ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
          onClick={handleFlip}
        >
          <div className="absolute inset-0 flex items-center justify-center bg-purple-600 backface-hidden p-4 rounded-lg">
            {cards[currentCard].question}
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-purple-800 backface-hidden p-4 rounded-lg rotate-y-180">
            {cards[currentCard].answer}
          </div>
        </div>
      </div>

      <div className="mt-8 flex space-x-4">
        <button onClick={handlePrevious} className="px-4 py-2 bg-purple-500 rounded hover:bg-purple-700">
          Previous
        </button>
        <button onClick={handleNext} className="px-4 py-2 bg-purple-500 rounded hover:bg-purple-700">
          Next
        </button>
        <button onClick={handleShuffle} className="px-4 py-2 bg-purple-500 rounded hover:bg-purple-700">
          Shuffle
        </button>
        <button onClick={handleMarkKnown} className="px-4 py-2 bg-green-500 rounded hover:bg-green-700">
          Mark as Known
        </button>
      </div>

      <div className="mt-4">
        Card {currentCard + 1} of {cards.length} ({knownCards.length} known)
      </div>

      <div className="mt-2 w-80 bg-gray-700 rounded-full">
        <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${progressPercentage}%` }} />
      </div>

      <div className="mt-4">
        Time spent on this card: {timeSpent} seconds
      </div>

      <div className="mt-4 flex space-x-4">
        <button onClick={handleReset} className="px-4 py-2 bg-red-500 rounded hover:bg-red-700">
          Reset
        </button>
        <button onClick={handleThemeToggle} className="px-4 py-2 bg-yellow-500 rounded hover:bg-yellow-700">
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default FlashcardViewer;

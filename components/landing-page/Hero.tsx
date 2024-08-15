
'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SyntheticEvent, useState } from 'react';

const Hero = () => {
  const [error, setError] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const router = useRouter();
  const handleNavigation = (e: SyntheticEvent) => {
    e.stopPropagation();
    if (title === '') {
      setError('The topic of flashcard is required');
      // toast.error('Title is required')
    } else {
      router.push(`/create-deck/${title.replace(/ /g, '-')}`)
    }

  }
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white text-center"
      style={{
        backgroundImage: `url('/bgp.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <hr className="border-t-2 border-white" />

      <h1 className="text-4xl font-bold mb-4">Create, Manage, and Study Flashcards</h1>
      <p className="text-xl mb-6">Start your learning journey with our AI-powered flashcard platform.</p>
      <div className="flex justify-center w-full max-w-lg">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter the title..."
          className="p-3 w-full rounded-l-lg bg-gray-900 text-white outline-none"
        />
        <button
          onClick={handleNavigation}
          className="bg-purple-500 p-3 rounded-r-lg border-3 border-purple-500"
        >
          Generate
        </button>
      </div>
      <div className='flex justify-center align-middle p-3 text-red-600'>{error}</div>
    </div>
  );
};

export default Hero;

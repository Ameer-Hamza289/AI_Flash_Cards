import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white shadow-md">
      <div className="text-xl font-bold">FlashCardApp</div>
      <div className="space-x-4">
        <Link href="/" className="relative pb-2 hover:text-purple-500">
          Home
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-500 transform scale-x-0 transition-transform duration-300 ease-out origin-left hover:scale-x-100"></span>
        </Link>
        <Link href="/auth" className="relative pb-2 hover:text-purple-500">
          Login
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-500 transform scale-x-0 transition-transform duration-300 ease-out origin-left hover:scale-x-100"></span>
        </Link>
        <Link href="/dashboard" className="relative pb-2 hover:text-purple-500">
          Dashboard
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-500 transform scale-x-0 transition-transform duration-300 ease-out origin-left hover:scale-x-100"></span>
        </Link>
        <Link href="/viewers" className="relative pb-2 hover:text-purple-500">
          Viewers
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-500 transform scale-x-0 transition-transform duration-300 ease-out origin-left hover:scale-x-100"></span>
        </Link>
        <Link href="/payment" className="relative pb-2 hover:text-purple-500">
          Payment
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-500 transform scale-x-0 transition-transform duration-300 ease-out origin-left hover:scale-x-100"></span>
        </Link>
        <Link href="/profile" className="relative pb-2 hover:text-purple-500">
          Profile
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-500 transform scale-x-0 transition-transform duration-300 ease-out origin-left hover:scale-x-100"></span>
        </Link>
      </div>
    </nav>
    
  );
};

export default Navbar;

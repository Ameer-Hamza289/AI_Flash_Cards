
import Link from 'next/link';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white shadow-md">
      <div className="text-xl font-bold hover:text-purple-500">
        <Link href={"/"}>
          FlashCardApp
        </Link>
      </div>
      <div className="flex items-center space-x-6">
        <Link href="/dashboard" className="relative pb-2 hover:text-purple-500">
          Dashboard
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-500 transform scale-x-0 transition-transform duration-300 ease-out origin-left hover:scale-x-100"></span>
        </Link>
        <Link href="/auth" className="relative pb-2 hover:text-purple-500">
          Login
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-500 transform scale-x-0 transition-transform duration-300 ease-out origin-left hover:scale-x-100"></span>
        </Link>
        <FaUser className="text-xl hover:text-purple-500 cursor-pointer mb-2" />
      </div>
    </nav>
  );
};

export default Navbar;

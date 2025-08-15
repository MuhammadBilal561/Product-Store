import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-indigo-950 text-white py-6 ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* LinkedIn Link */}
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <FaLinkedin className="text-blue-500 text-xl" />
          <Link
            href="https://www.linkedin.com/in/muhammadbilal561"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <span className="font-bold">Muhammad Bilal 561</span>
          </Link>
        </div>
        {/* Copyright */}
        <p className="text-sm mt-4 md:mt-0 text-gray-400">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

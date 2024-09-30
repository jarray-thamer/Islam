"use client";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="max-w-screen-2xl flex justify-between items-center p-4 mx-auto">
      <Link href="/" className="flex items-center gap-3">
        <Image src="/islam-religion.png" alt="Quran" width={64} height={64} />
        <h1 className="text-primary font-semibold text-3xl">Islam</h1>
      </Link>
      <ul className="flex items-center gap-6 text-lg cursor-pointer">
        <li className="hover:text-primary group/list">
          Reciters
          <div className="w-2/3 group-hover/list:border-t border-primary rounded-full"></div>
        </li>
        <Link href="/quran" className="hover:text-primary group/list">
          Quran
          <div className="w-2/3 group-hover/list:border-t border-primary rounded-full"></div>
        </Link>
        <li className="hover:text-primary group/list">
          Prayers
          <div className="w-2/3 group-hover/list:border-t border-primary rounded-full"></div>
        </li>
        <li className="hover:text-primary group/list">
          Dua
          <div className="w-2/3 group-hover/list:border-t border-primary rounded-full"></div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

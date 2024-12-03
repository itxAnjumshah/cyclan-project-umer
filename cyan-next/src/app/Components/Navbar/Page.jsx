"use client";

import Image from "next/image";
import "./Navstyle.css";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="parent-nav">
      <div className="logo">
        <Image src="/logo-top.png" alt="img" width={100} height={100} />
      </div>

      <ul className={isMenuOpen ? 'menu-open' : ''}>
        <li className="dropdown">
          Home
          <div className="dropdown-content">
            <Link href="/">Home1</Link>
            <Link href="Home2">Home2</Link>
            <Link href="/Home3">Home3</Link>
          </div>
        </li>

        <li className="dropdown">
          About
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>

        <li className="dropdown">
          Services
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>

        <li className="dropdown">
          Pages
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>

        <li className="dropdown">
          Blog
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>

        <li>Contact</li>
      </ul>

      <button className="btn">Get Started New</button>

      <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </div>
  );
};

export default Navbar;

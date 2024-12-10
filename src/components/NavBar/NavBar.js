"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Menu toggled");
    setMenuOpen((prev) => !prev);
    console.log("menuOpen state:", !menuOpen); // Log the new state value
  };

  useEffect(() => {
    console.log("NavBar component mounted");
  }, []);

  return (
    <nav className="text-white p-4 absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="flex justify-between items-center">
        <div className="text-xl">Alexis Francisco</div>
        {/* Hamburger Menu */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => {
            console.log("Hamburger icon clicked");
            toggleMenu();
          }}
        >
          {menuOpen ? (
            <div className="text-2xl">X</div>
          ) : (
            <div className="text-2xl">☰</div>
          )}
        </div>
      </div>

      {/* Navigation Links */}
      <ul
        className={`${
          menuOpen ? "flex" : "hidden"
        } flex-col space-y-8 items-center justify-center fixed top-0 left-0 w-full h-full bg-black text-white text-3xl`}
      >
        <li className="text-center">
          <Link
            href="/"
            onClick={() => {
              console.log("Home link clicked");
              toggleMenu();
            }}
          >
            Home
          </Link>
        </li>
        <li className="text-center">
          <Link
            href="/contact" // Ensure this path matches the actual path of your Contact page
            onClick={() => {
              console.log("Contact link clicked");
              toggleMenu();
            }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
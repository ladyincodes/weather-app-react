import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className='Footer text-center small mt-4'>
      <p>
        <a
          href='https://github.com/ladyincodes/weather-app-react'
          target='_blank'
          rel='noreferrer'
        >
          Open-Source Code
        </a>
        <span className='author'> by Atefeh Eskafi</span>
      </p>
    </footer>
  );
}

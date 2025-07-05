'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function StickyNotice() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="sticky bottom-0 z-50 bg-black text-white px-4 py-3 flex items-center justify-between shadow-md">
      <div className="flex flex-col flex-grow justify-center sm:flex-row sm:items-center gap-2">
        <p className="font-medium text-justify">
          🎓 Join our Free Career Guide Session on Cyber Security and Ethical hacking for school students – <span className="underline">27th July, 11:30 AM</span>
        </p>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSd3qw4YuDCj46fxdaJRx6cEE4CuV0geeq_7IPvMDgep_mBXQg/viewform"
          target="_blank"
          className="text-sm bg-[#173fae] text-center text-blue-600 font-semibold px-3 py-1 rounded hover:bg-gray-100 transition"
        >
          Register Now
        </Link>
      </div>
      <button
        onClick={() => setShow(false)}
        className="ml-4 text-white hover:text-gray-200 text-lg font-bold"
        aria-label="Close notice"
      >
        ×
      </button>
    </div>
  );
}

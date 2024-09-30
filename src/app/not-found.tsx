"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5); // Use useState for countdown value

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          router.replace("/"); // Redirect when countdown reaches 0
        }
        return prev - 1;
      });
    }, 1000);

    // Cleanup interval on component unmount
    return () => {
      clearInterval(timer);
    };
  }, [router]);

  return (
    <div className="w-full px-[20px] h-screen flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold mb-6">Not Found</h2>
      <button className="bg-blue-700 text-white px-6 py-2 rounded-lg mt-10">
        <Link href="/">Return Home</Link>
      </button>
      <p className="mt-10 text-center">
        Automatic redirecting to Home Page in <span className="gont-bold text-2xl">{countdown}</span> seconds
      </p>
    </div>
  );
}

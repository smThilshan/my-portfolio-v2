"use client";
import Link from "next/link";

export default function Breadcrumb({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center space-x-2 text-sm text-gray-500 font-medium">
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            {index !== 0 && (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m14.413 10.663-6.25 6.25a.939.939 0 1 1-1.328-1.328L12.42 10 6.836 4.413a.939.939 0 1 1 1.328-1.328l6.25 6.25a.94.94 0 0 1-.001 1.328"
                  fill="#CBD5E1"
                />
              </svg>
            )}
            <Link href={item.href}>
              <span
                className={`hover:text-gray-500-500 ${
                  index === items.length - 1 ? "text-black" : ""
                }`}
              >
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}

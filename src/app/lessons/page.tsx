"use client";
import LessonCard from "../_components/lessonCard";
import { useState } from "react";

const lessons = [
  {
    href: "/lessons/budgeting-and-expense-tracking",
    text: "Budgeting and Expense Tracking",
    description: "Master financial planning with effective expense tracking.",
    category: "Finance Management",
  },
  {
    href: "/lessons/banking-basics",
    text: "Banking Basics",
    description: "Learn core banking services from savings to loans.",
    category: "Banking",
  },
  {
    href: "/lessons/investment-fundamentals",
    text: "Investment Fundamentals",
    description: "Understand stocks, bonds, and portfolio building.",
    category: "Investing",
  },
  {
    href: "/lessons/retirement-planning",
    text: "Retirement Planning",
    description: "Strategies for post-retirement financial security.",
    category: "Planning",
  },
  {
    href: "/lessons/financial-goals-and-planning",
    text: "Financial Goals and Planning",
    description: "Set, monitor, and achieve your financial objectives.",
    category: "Planning",
  },
  {
    href: "/lessons/credit-building",
    text: "Credit Building Tips and Tricks",
    description: "Boost and maintain a healthy credit score.",
    category: "Credit",
  },
];

export default function LessonDefault() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All categories");

  const filteredLessons = lessons
    .filter((lesson) =>
      lesson.text.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .filter(
      (lesson) =>
        selectedCategory === "All categories" ||
        lesson.category === selectedCategory,
    );

  return (
    <div className="mt-24 flex flex-col items-center justify-center space-y-4">
      <article className="prose text-center">
        <h1 className="text-black">Modules</h1>
        <h3 className="text-black">Delve into our comprehensive financial literacy modules</h3>
      </article>
      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered w-full max-w-xs bg-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
  className="select select-bordered w-full max-w-xs bg-white"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option>All categories</option>
          <option>Banking</option>
          <option>Planning</option>
          <option>Investing</option>
          <option>Credit</option>
        </select>
      </div>
      <div className="grid w-full max-w-4xl grid-cols-1 gap-10 md:grid-cols-2">
        {filteredLessons.map((lesson) => (
          <LessonCard key={lesson.href} {...lesson} />
        ))}
      </div>
    </div>
  );
}

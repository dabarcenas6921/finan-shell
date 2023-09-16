import Link from "next/link";
import LessonContent from "./lessonContent";
import type { ModuleData } from "./lessonContent";

const lessonsWithCategories = [
  {
    category: "Finance Management",
    lessons: [
      {
        href: "/lessons/budgeting-and-expense-tracking",
        text: "Budgeting and Expense Tracking",
      },
    ],
  },
  {
    category: "Banking",
    lessons: [
      {
        href: "/lessons/banking-basics",
        text: "Banking Basics",
      },
    ],
  },
  {
    category: "Investing",
    lessons: [
      {
        href: "/lessons/investment-fundamentals",
        text: "Investment Fundamentals",
      },
    ],
  },
  {
    category: "Planning",
    lessons: [
      {
        href: "/lessons/retirement-planning",
        text: "Retirement Planning",
      },
      {
        href: "/lessons/financial-goals-and-planning",
        text: "Financial Goals and Planning",
      },
    ],
  },
  {
    category: "Credit",
    lessons: [
      {
        href: "/lessons/credit-building",
        text: "Credit Building Tips and Tricks",
      },
    ],
  },
];

export default function Sidebar({
  moduleContent,
}: {
  moduleContent: ModuleData;
}) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ml-6 flex w-full flex-col items-start md:w-3/4">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <LessonContent moduleData={moduleContent} />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
          {lessonsWithCategories.map((categoryItem, index) => (
            <div key={index}>
              <h2 className="mb-2 text-lg font-semibold">
                {categoryItem.category}
              </h2>
              <ul>
                {categoryItem.lessons.map((lesson, lessonIndex) => (
                  <li key={lessonIndex} className="mb-2">
                    <Link href={lesson.href}>{lesson.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

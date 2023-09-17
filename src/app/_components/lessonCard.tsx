import Link from "next/link";

interface LessonProps {
  href: string;
  text: string;
  description: string;
}

const LessonCard: React.FC<LessonProps> = ({ href, text, description }) => (
  <Link href={href}>
    <div className="flex cursor-pointer items-center space-x-4 rounded p-2 hover:bg-gray-200">
      <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      </div>
      <div className="flex flex-col justify-center">
        <div className="text-lg font-bold">{text}</div>
        <div className="text-sm text-gray-400">{description}</div>
      </div>
    </div>
  </Link>
);

export default LessonCard;

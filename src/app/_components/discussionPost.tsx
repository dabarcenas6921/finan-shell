interface DiscussionPostProps {
  title: string;
  description: string;
}

export default function DiscussionPost({
  title,
  description,
}: DiscussionPostProps) {
  return (
    <div className="rounded-lg  bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
      <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        {description}
      </p>
      <a
        href="#"
        className="inline-flex items-center text-blue-600 hover:underline"
      >
        View thread
        <svg
          className="ml-2.5 h-3 w-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
          />
        </svg>
      </a>
    </div>
  );
}

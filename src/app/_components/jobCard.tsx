interface JobCardProps {
  jobTitle: string;
  jobDescription: string;
  imageUrl: string;
}

export default function JobCard({
  jobTitle,
  jobDescription,
  imageUrl,
}: JobCardProps) {
  return (
    <a
      href="/hub"
      className="flex flex-col items-center rounded-lg bg-white shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl md:flex-row"
    >
      <img
        className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={imageUrl}
        alt={jobTitle}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {jobTitle}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {jobDescription}
        </p>
        <a
          href="#"
          className="inline-flex items-center text-blue-600 hover:underline"
        >
          Opportunity link
          <svg
            className="ml-2.5 h-3 w-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
            />
          </svg>
        </a>
      </div>
    </a>
  );
}

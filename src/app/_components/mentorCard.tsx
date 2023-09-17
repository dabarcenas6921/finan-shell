interface ProfileCardProps {
  name: string;
  profileImage: string;
  role: string;
}

export default function MentorCard({
  name,
  profileImage,
  role,
}: ProfileCardProps) {
  const stars = (3 + Math.random() * 2).toFixed(2);
  const reviews = Math.floor(Math.random() * 101);

  return (
    <div className="flex  flex-col justify-center rounded-xl bg-[#374151] p-6 shadow-md dark:bg-gray-800 dark:text-gray-100 sm:px-12">
      <img
        src={profileImage}
        alt={name}
        className="mx-auto aspect-square h-32 w-32 rounded-full dark:bg-gray-500"
      />
      <div className="space-y-4 divide-y divide-gray-700 text-center">
        <div className="my-2 space-y-1">
          <h2 className="text-xl font-semibold sm:text-2xl">{name}</h2>
          <p className="px-5 text-xs dark:text-gray-400 sm:text-base">{role}</p>

          <div className="mt-2 flex items-center justify-center">
            <svg
              className="mr-1 h-4 w-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
              {stars}
            </p>
            <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400"></span>
            <a
              href="#"
              className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
            >
              {reviews} reviews
            </a>
          </div>
        </div>

        <div className="align-center flex justify-center space-x-4 py-2">
          <a href="#" className="btn btn-primary mt-2">
            Message
          </a>
        </div>
      </div>
    </div>
  );
}

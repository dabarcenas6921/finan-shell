import React from "react";

interface ArticleCardProps {
  title: string;
  description: string;
  imageUrl: string;
  altText?: string; // alt text for the image (optional)
}

export default function ArticleCard({
  title,
  description,
  imageUrl,
  altText = "",
}: ArticleCardProps) {
  return (
    <div className="bordered card bg-[#374151] p-6 shadow-md dark:bg-gray-800 dark:text-gray-100">
      <figure>
        <img src={imageUrl} alt={altText} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">{title}</h2>
        <p className="text-gray-300">{description}</p>
        <div className="card-actions">
          <a href="#" className="btn btn-primary">
            Read more
            <svg
              className="ml-2 h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';

interface BlogProps {
  title: string;
  date: string;
  time: string;
  summary: string;
  content: string;
}

const Blog: React.FC<BlogProps> = ({ title, date, time, summary, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white/30 backdrop-blur-md shadow-lg rounded-lg p-4 my-2 mx-auto max-w-5xl">
      <div className="mb-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <div className="text-sm text-gray-400">
          {date} · {time}
        </div>
      </div>
      <div
        className="transition-max-height duration-500 ease-in-out overflow-hidden"
        style={{ maxHeight: isExpanded ? '1000px' : '0' }}  // Adjust 1000px to fit your content needs
      >
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      <p className={!isExpanded ? 'block' : 'hidden'}>{summary}</p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-gray-400 hover:text-gray-500 mt-2"
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
};

export default Blog;

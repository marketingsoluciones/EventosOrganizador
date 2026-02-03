import { fetchApi, queries } from "@/utils/Fetching";
import { FC, useEffect, useState } from "react";
import { Markup } from "interweave";

interface Post {
  title: string;
  _id: string;
  subTitle: string;
  content: string;
  permaLink: string;
  slug: string;
  seoDescription: string;
  categories: Category[];
  subCategories: Category[];
  tags: string;
  imgCarrusel: ImageNew[];
  imgMiniatura: ImageNew;
  imgTexto: ImageNew[];
  video: Video;
  authorUid: string;
  authorUsername: string;
  updaterUsername: string;
  status: boolean;
  views: number;
  postFormat: string;
  createdAt: number;
  updatedAt: number;
}

interface Category {
  _id: string;
}

type ImageNew = {
  _id: string;
  i1024: string;
  i800: string;
  i640: string;
  i320: string;
  videoUrl: string;
  createdAt: number;
};

type Video = {
  _id: string;
  url: string;
  createdAt: number;
};

interface Results {
  total: number;
  results: Post[];
}

export default function BlogComponent() {
  const [data, setData] = useState<Post[]>();
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  useEffect(() => {
    fetchApi({
      query: queries.getAllPost,
      variables: { sort: { createdAt: -1 }, skip: 0, limit: 8, development: "bodasdehoy" },
    }).then((results: Results) => {
      setData(results.results);

      // Automatically select the first post
      if (results.results.length > 0) {
        setSelectedPost(results.results[0]);
      }
    });
  }, []);


  const handleTitleClick = (post: Post) => {
    setSelectedPost(post);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPost = data?.find(post => post._id === event.target.value) || null;
    setSelectedPost(selectedPost);
  };

  return (
<div className="flex flex-col md:flex-row gap-8 px-4 max-w-[1200px] mx-auto">
  {/* Sidebar with article list */}
  <div className="w-full md:w-1/3 lg:w-1/4">
    <div className="sticky top-24 bg-white rounded-xl border border-gray-200 shadow-lg p-6">
      <h2 className="text-lg font-bold text-[#2d3748] mb-4 pb-4 border-b border-gray-200">
        Artículos de ayuda
      </h2>

      {/* Desktop list */}
      <ul className="hidden md:block space-y-2">
        {data?.map((post, index) => (
          <li
            key={index}
            className={
              selectedPost === post
                ? 'flex items-start justify-start p-3 text-[#6096B9] bg-[#6096B9]/10 rounded-lg font-semibold text-sm cursor-pointer transition-all duration-200 border-l-4 border-[#6096B9]'
                : 'flex items-start justify-start p-3 hover:bg-gray-50 text-gray-700 rounded-lg font-normal text-sm cursor-pointer transition-all duration-200 border-l-4 border-transparent hover:border-gray-300'
            }
            onClick={() => handleTitleClick(post)}
          >
            {post.title}
          </li>
        ))}
      </ul>

      {/* Mobile dropdown */}
      <select
        className="block md:hidden w-full p-3 border-2 border-gray-200 rounded-lg text-gray-700 focus:border-[#6096B9] focus:outline-none transition-colors duration-200"
        onChange={handleSelectChange}
        value={selectedPost?._id || ''}
      >
        {data?.map((post) => (
          <option key={post._id} value={post._id} className="text-gray-700">
            {post.title}
          </option>
        ))}
      </select>
    </div>
  </div>

  {/* Main content area */}
  <div className="w-full md:w-2/3 lg:w-3/4">
    {selectedPost && (
      <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8">
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2d3748] mb-4">
            {selectedPost.title}
          </h1>

          <p className="text-lg text-gray-600 font-medium mb-4">
            {selectedPost.subTitle}
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-500 pb-6 border-b border-gray-200">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
              </svg>
              {selectedPost.authorUsername}
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              {selectedPost.views} vistas
            </span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <Markup content={selectedPost.content} />
        </div>
      </div>
    )}
  </div>
</div>
  );
}
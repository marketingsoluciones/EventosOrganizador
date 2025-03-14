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
      console.log(results);

      // Automatically select the first post
      if (results.results.length > 0) {
        setSelectedPost(results.results[0]);
      }
    });
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleTitleClick = (post: Post) => {
    setSelectedPost(post);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPost = data?.find(post => post._id === event.target.value) || null;
    setSelectedPost(selectedPost);
  };

  return (
<div className="flex flex-col md:flex-row gap-8 px-4 rounded-md max-w-[1200px] mx-auto">
  <div className="w-full md:w-1/4 h-1/4 flex items-center justify-center p-4 bg-white rounded-md shadow-2xl">
    <ul className="hidden md:block rounded-md">
      {data?.map((post, index) => (
        <li
          key={index}
          className={
            selectedPost === post
              ? 'flex items-start justify-start pl-2 text-[#6096B9] rounded-md font-semibold text-sm pb-[6px]'
              : 'flex items-start justify-start pl-2 hover:bg-gray-200 text-[#444444] rounded-md font-normal text-sm pb-[6px]'
          }
          onClick={() => handleTitleClick(post)}
        >
          {post.title}
        </li>
      ))}
    </ul>
    <select
      className="block md:hidden w-full p-2 border rounded-md text-[#444444] hover:bg-gray-200"
      onChange={handleSelectChange}
      value={selectedPost?._id || ''}
    >
      {data?.map((post) => (
        <option key={post._id} value={post._id} className="text-[#444444]">
          {post.title}
        </option>
      ))}
    </select>
  </div>
  <div className="w-full md:w-3/4 flex flex-col p-4 text-[#444444] gap-6">
    {selectedPost && (
      <div className="rounded-md p-4">
        <div className="self-stretch flex items-start justify-start font-bold text-[32px] text-black ">
          {selectedPost.title}
        </div>

        <div className="self-stretch flex items-start justify-start text-sm font-semibold">
          {selectedPost.subTitle}
        </div>

        <div className="self-stretch flex items-center justify-center text-sm">
          <Markup content={selectedPost.content} />
        </div>
        {/* ... other content */}
      </div>
    )}
  </div>
</div>
  );
}
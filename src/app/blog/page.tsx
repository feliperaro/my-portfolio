"use client";

import { useEffect, useState } from "react";
import Footer from "../components/footer";
import HeaderNav from "../components/header-nav";
import Post from "../types/post";
import PostCard from "../components/post-card";

export default function BlogPage() {
  const pageIsReady = false;
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch("http://localhost:3000/api/posts");
        const posts = await response.json();
        console.log("posts", posts);
        setPosts(posts);
      } catch (error) {
        console.error("error", error);
        setError("Failed to fetch posts");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="h-full">
      <HeaderNav page={"blog"} />
      <main className="h-full pb-40">
        <h1 className="border font-bold p-5 text-center">{"My Posts"}</h1>
        {pageIsReady ? (
          <div className="flex flex-wrap gap-5 justify-center ml-1 mr-1">
            {isLoading && <p>Loading posts...</p>}
            {error && <p>{error}</p>}
            {posts.map((post: Post, index: number) => (
              <PostCard key={index} post={post} />
            ))}
          </div>
        ) : (
          <div className="font-semibold p-10 ">
            {
              "This page is currently under construction. Exciting things coming soon! ✨"
            }
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

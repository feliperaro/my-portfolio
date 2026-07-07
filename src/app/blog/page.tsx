"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Post from "../types/post";
import PostCard from "../components/post-card";
import { useLanguage } from "../i18n/language-provider";

export default function BlogPage() {
  const { t } = useLanguage();
  const pageIsReady = false;
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!pageIsReady) return;

    const fetchPosts = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch("/api/posts");
        const posts = await response.json();
        setPosts(posts);
      } catch (error) {
        console.error("error", error);
        setError(t.blog.error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [pageIsReady, t.blog.error]);

  return (
    <>
      <Navbar />
      <main className="section-container min-h-[60vh] py-16">
        <h1 className="text-4xl font-bold tracking-tight text-text">
          {t.blog.title}
        </h1>

        {pageIsReady ? (
          <div className="mt-10 flex flex-wrap justify-center gap-5">
            {isLoading && <p className="text-text-muted">{t.blog.loading}</p>}
            {error && <p className="text-text-muted">{error}</p>}
            {posts.map((post: Post, index: number) => (
              <PostCard key={index} post={post} />
            ))}
          </div>
        ) : (
          <p className="mt-6 text-lg text-text-muted">{t.blog.construction}</p>
        )}
      </main>
      <Footer />
    </>
  );
}

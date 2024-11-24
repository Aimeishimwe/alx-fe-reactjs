// src/components/PostsComponent.jsx
import React from "react";
import { useQuery } from "react-query";

// Function to fetch data from the API
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

function PostsComponent() {
  const {
    data,
    error,
    isLoading,
    isError,
    isFetching,
    refetch,
    isPreviousData, // To check if we're showing previous data
  } = useQuery(
    "posts", // Query key for caching
    fetchPosts, // Fetching function
    {
      cacheTime: 60000, // Cache data for 60 seconds
      staleTime: 5000, // Keep data fresh for 5 seconds
      refetchOnWindowFocus: true, // Refetch when window regains focus
      keepPreviousData: true, // Keep previous data when refetching
    }
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? "Refetching..." : "Refetch Data"}
      </button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      {isPreviousData ? <p>Showing previous data...</p> : null}
    </div>
  );
}

export default PostsComponent;

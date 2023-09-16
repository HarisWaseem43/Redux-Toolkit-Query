import { useGetPostsQuery } from "../Redux/PostsAPI";

function PostCards() {
  const { data, error, isLoading } = useGetPostsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <strong>Error: Something went wrong</strong>
      </div>
    );
  }

  return (
    <div>
      {data.map((post) => (
        <div key={post.id}>
          <h2>
            {post.id} - {post.title}
          </h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostCards;

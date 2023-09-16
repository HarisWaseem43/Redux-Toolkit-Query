import { useGetCommentsQuery } from "../Redux/CommentsAPI";

function CommentsCards() {
  const { data, error, isLoading } = useGetCommentsQuery();

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
      {data.map((comment) => (
        <div key={comment.id}>
          <h2>{comment.comments}</h2>
        </div>
      ))}
    </div>
  );
}

export default CommentsCards;

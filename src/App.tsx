import Comment from "./components/Comment";
import CommentForm from "./components/CommentForm";
import "./App.css";
import data from "../data.json";

function App() {
  return (
    <>
      {data.comments.map(comment => {
        return (
          <li key={comment.id}>
            <Comment
              content={comment.content}
              createdAt={comment.createdAt}
              score={comment.score}
              user={comment.user}
            />
          </li>
        );
      })}

      <CommentForm />
    </>
  );
}

export default App;

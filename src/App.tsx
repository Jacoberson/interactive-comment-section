import Comment from "./components/Comment";
import CommentForm from "./components/CommentForm";
import "./App.css";
import data from "../data.json";

function App() {
  return (
    <>
      {data.comments.map(comment => {
        <Comment />;
      })}
      <CommentForm />
    </>
  );
}

export default App;

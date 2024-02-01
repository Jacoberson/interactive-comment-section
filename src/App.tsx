import React from "react";
import Comment from "./components/Comment";
import CommentForm from "./components/CommentForm";
import "./App.css";
import data from "../data.json";

function App() {
  return (
    <>
      <ul className="comments">
        {data.comments.map(comment => {
          return (
            <React.Fragment key={comment.id}>
              <li>
                <Comment
                  content={comment.content}
                  createdAt={comment.createdAt}
                  score={comment.score}
                  user={comment.user}
                />
              </li>
            </React.Fragment>
          );
        })}
      </ul>
      <CommentForm />
    </>
  );
}

export default App;

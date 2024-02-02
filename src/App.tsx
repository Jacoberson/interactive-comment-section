import React from "react";
import Content from "./components/Content";
import ContentForm from "./components/ContentForm";
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
                <Content
                  content={comment.content}
                  createdAt={comment.createdAt}
                  score={comment.score}
                  user={comment.user}
                />
                {comment.replies.length > 0 && (
                  <ul className="replies">
                    {comment.replies.map(reply => {
                      return (
                        <li key={reply.id}>
                          <Content
                            content={reply.content}
                            createdAt={reply.createdAt}
                            score={reply.score}
                            user={reply.user}
                            replyingTo={reply.replyingTo}
                          />
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ul>
      <ContentForm />
    </>
  );
}

export default App;

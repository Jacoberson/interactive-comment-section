import React, { useState, createContext } from "react";
import Content from "./components/Content";
import ContentForm from "./components/ContentForm";
import "./App.css";
import data from "../data.json";

export const UserContext = createContext({});

function App() {
  const user = data.currentUser;
  const [comments, setComments] = useState(data.comments);

  return (
    <UserContext.Provider value={user}>
      <ul className="comments">
        {comments.map(comment => {
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
      {/* @ts-expect-error (fix type later)*/}
      <ContentForm comments={comments} setComments={setComments} />
    </UserContext.Provider>
  );
}

export default App;

import { useState, useContext } from "react";
import avatar from "/images/avatars/image-juliusomo.png";
import { UserContext } from "../App";
import { CommentUpdateFunction } from "../types";

export default function CommentForm({
  comments,
  setComments,
}: {
  comments: Array<object>;
  setComments: CommentUpdateFunction;
}): JSX.Element {
  const [commentText, setCommentText] = useState("");
  const currentUser = useContext(UserContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCommentText("");
    setComments([
      ...comments,
      {
        id: Date.now(),
        content: commentText,
        createdAt: Date.now(),
        score: 0,
        user: currentUser,
        replies: [],
      },
    ]);
  };

  return (
    <div className="form-container p-24 br-12">
      <form
        className="comment-form"
        action=""
        method="POST"
        onSubmit={handleSubmit}
      >
        <img className="avatar-lg" src={avatar} alt="avatar" />
        <textarea
          id="comment"
          name="comment"
          placeholder="Add a comment..."
          rows={3}
          value={commentText}
          onChange={e => setCommentText(e.target.value)}
        ></textarea>
        <button className="main-btn btn" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

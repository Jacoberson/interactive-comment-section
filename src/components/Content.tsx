import { useState } from "react";
import upvoteImage from "/assets/icon-plus.svg";
import downvoteImage from "/assets/icon-minus.svg";
import replyImage from "/assets/icon-reply.svg";
import { ContentProps } from "../types";

export default function Content({
  content,
  createdAt,
  score,
  replyingTo,
  user,
}: ContentProps): JSX.Element {
  const [vote, setVote] = useState(score);

  const handleVoteChange = (voteChange: "upvote" | "downvote") => {
    switch (voteChange) {
      case "upvote":
        setVote(vote + 1);
        break;
      case "downvote":
        setVote(vote - 1);
        break;
    }
  };

  return (
    <div className={`${replyingTo ? "reply" : "comment"} p-24 br-12`}>
      <div className="vote-container br-12">
        <button
          className="secondary-btn p-0"
          type="button"
          onClick={() => handleVoteChange("upvote")}
        >
          <img className="upvote vote-icon" src={upvoteImage} alt="upvote" />
        </button>
        <div className="votes">{vote}</div>
        <button
          className="secondary-btn p-0"
          type="button"
          onClick={() => handleVoteChange("downvote")}
        >
          <img
            className="downvote vote-icon"
            src={downvoteImage}
            alt="downvote"
          />
        </button>
      </div>
      <div className="comment-text">
        <div className="user-info">
          <img className="avatar-sm" src={user.image.png} alt="avatar" />
          <h3 className="username">{user.username}</h3>
          <p className="created-at">{createdAt}</p>
        </div>
        <div className="content-container">
          <p className="content">
            {replyingTo && (
              <span className="replying-to">@{replyingTo}&nbsp;</span>
            )}
            {content}
          </p>
        </div>
      </div>
      <button className="secondary-btn reply-btn" type="button">
        <img src={replyImage} alt="" />
        <span>Reply</span>
      </button>
    </div>
  );
}

import upvoteImage from "/assets/icon-plus.svg";
import downvoteImage from "/assets/icon-minus.svg";
import replyImage from "/assets/icon-reply.svg";

interface User {
  image: { png: string; webp: string };
  username: string;
}

interface CommentProps {
  content: string;
  createdAt: string;
  score: number;
  user: User;
}

export default function Comment({
  content,
  createdAt,
  score,
  user,
}: CommentProps): JSX.Element {
  return (
    <div className="comment p-24 br-12">
      <div className="vote-container br-12">
        <button className="secondary-btn p-0" type="button">
          <img className="upvote vote-icon" src={upvoteImage} alt="upvote" />
        </button>
        <div className="votes">{score}</div>
        <button className="secondary-btn p-0" type="button">
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
          <p className="content">{content}</p>
        </div>
      </div>
      <button className="secondary-btn reply" type="button">
        <img src={replyImage} alt="" />
        <span>Reply</span>
      </button>
    </div>
  );
}

import upvoteImage from "/assets/icon-plus.svg";
import downvoteImage from "/assets/icon-minus.svg";
import replyImage from "/assets/icon-reply.svg";
import avatar from "/assets/avatars/image-amyrobson.png";

export default function Comment(): JSX.Element {
  return (
    <div className="comment p-24">
      <div className="vote-container">
        <img className="upvote vote-icon" src={upvoteImage} alt="upvote" />
        <div className="votes">12</div>
        <img
          className="downvote vote-icon"
          src={downvoteImage}
          alt="downvote"
        />
      </div>
      <div className="comment-text">
        <div className="user-info">
          <img className="avatar-sm" src={avatar} alt="avatar" />
          <h3>amyrobson</h3>
          <p className="created-at">1 month ago</p>
        </div>
        <div className="content-container">
          <p className="content">
            Impressive! Though it seems the drag feature could be improved. But
            overall it looks incredible. You've nailed the design and the
            responsiveness at various breakpoints works really well.
          </p>
        </div>
      </div>
      <div className="reply">
        <img src={replyImage} alt="reply" />
        <p>Reply</p>
      </div>
    </div>
  );
}

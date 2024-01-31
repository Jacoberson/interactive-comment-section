import upvoteImage from "/assets/icon-plus.svg";
import downvoteImage from "/assets/icon-minus.svg";
import replyImage from "/assets/icon-reply.svg";
import avatar from "/assets/avatars/image-amyrobson.png";

export default function Comment(): JSX.Element {
  return (
    <div className="comment p-24 br-12">
      <div className="vote-container br-12">
        <button className="secondary-btn p-0" type="button">
          <img className="upvote vote-icon" src={upvoteImage} alt="upvote" />
        </button>
        <div className="votes">12</div>
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
      <button className="secondary-btn reply" type="button">
        <img src={replyImage} alt="" />
        <span>Reply</span>
      </button>
    </div>
  );
}

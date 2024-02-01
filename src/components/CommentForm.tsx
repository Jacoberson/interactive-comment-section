// import avatar from "/assets/images/image-juliusomo.png";

export default function CommentForm(): JSX.Element {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <div className="form-container p-24 br-12">
      <form
        className="comment-form"
        action=""
        method="POST"
        onSubmit={handleSubmit}
      >
        {/* <img className="avatar-lg" src={avatar} alt="avatar" /> */}
        <textarea
          id="comment"
          name="comment"
          placeholder="Add a comment..."
          rows={3}
        ></textarea>
        <button className="main-btn btn" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

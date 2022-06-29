import { Rate } from "antd";
import { useGetCommentsQuery } from "../../../../api/comment.api";

const CommentList = ({ id }: any) => {
  const { data } = useGetCommentsQuery(Number(id));

  return (
    <div className="comment-list">
      {data && data.length === 0 && <div className="comment-null">There are no reviews yet.</div>}

      {data &&
        data.length > 0 &&
        data.map((comment) => {
          return (
            <div className="comment_item" key={comment.id}>
              <div className="comment-left">
                <img
                  src="https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g"
                  alt=""
                />
              </div>
              <div className="comment-right">
                <div className="comment_item-header">
                  <p className="name">
                    {comment.name} {comment.userId === 0 ? "(Guest)" : ""}
                  </p>
                  <span className="date">
                    <i className="bx bxs-time-five" />
                    Jun 24, 2022
                  </span>
                </div>
                <Rate value={comment.rating} disabled />
                <div className="comment_item-content">{comment.review}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CommentList;

import { useEffect } from "react";
import { Link } from "react-router-dom";

import { Rate } from "antd";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSelector } from "react-redux";
import { useCreateCommentMutation } from "../../../../api/comment.api";
import { RootState } from "../../../../redux/store";
import "./commentForm.style.scss";
import { getDate } from "../../../../helper/functions";

interface IFormInput {
  name: string;
  email: string;
  review: string;
  rating: number;
  date: string;
}

const schema = yup
  .object({
    name: yup.string().required(),
    rating: yup.number().min(1).required(),
    review: yup.string().required(),
    email: yup.string().notRequired()
  })
  .required();

interface Props {
  id: number;
}

const CommentForm = ({ id }: Props) => {
  const { user, isLogging } = useSelector((state: RootState) => state.auth);
  const [createComment] = useCreateCommentMutation();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors }
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
    defaultValues: user
  });

  const onSubmit: SubmitHandler<IFormInput> = (formData) => {
    createComment({
      ...formData,
      userId: user.id,
      productId: id,
      date: getDate()
    });
    reset({
      review: ""
    });
  };

  useEffect(() => {
    register("rating");
  }, [register]);

  return (
    <div className="comment-form">
      {!isLogging && (
        <div className="comment-warning">
          You aren't login, your comment will be a guest comment.
          <br />
          <Link to="/login"> Login Here !!!</Link>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="comment_group">
          <label htmlFor="review">
            Your Rating*
            {errors.rating && <span className="error">Required</span>}
          </label>
          <div>
            <Rate onChange={(value) => setValue("rating", value)} />
          </div>
        </div>

        <div className="comment_group">
          <label htmlFor="review">
            Your Review*
            {errors.review && <span className="error">Required</span>}
          </label>
          <textarea
            className="comment_control"
            id="review"
            rows={8}
            style={{ width: "100%" }}
            {...register("review")}
          />
        </div>

        <div className="comment_group">
          <label htmlFor="name">
            Name*
            {errors.name && <span className="error">Required</span>}
          </label>
          <input type="text" className="comment_control" id="name" {...register("name")} />
        </div>

        <div className="comment_group">
          <label htmlFor="email">Email</label>
          <input type="text" className="comment_control" id="email" {...register("email")} />
        </div>

        <button type="submit" className="btn btn-primary btn-hover">
          submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;

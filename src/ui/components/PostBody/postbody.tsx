import { PostInterface as BlogPost } from "@/data/@types/PostInterface";
import style from "./Postbody.module.css";

export default function PostBody({ post }: { post: BlogPost }) {
  return (
    <>
    <div className={style.postcontainer}>
        <h2 className={style.posttitle}>{post.title}</h2>
        <img src={post.pictureUrl} alt={post.title} className={style.postpicture}/>
        <div className={style.postcontent}>{post.content}</div>
    </div>
    </>
  );
}

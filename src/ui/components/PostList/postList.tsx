import { PostInterface as BlogPost } from "@/data/@types/PostInterface";
import Link from "next/link";
import Image from "next/image";
import style from "./PostList.module.css";

export default function PostList({ posts }: { posts: BlogPost[] }) {
  return (
    <>
      <br />
      <ul className={style.PostList}>
        {posts.map((post) => {
          return <PostListItem key={post.id} post={post} />;
        })}
      </ul>
    </>
  );
}

function PostListItem({ post }: { post: BlogPost }) {
    return (
        <li className={style.PostListItem}>
        <Link href={`/posts/${post.slug}`}>
        <Image src={post.pictureUrl} alt={post.title} className={style.PostPicture} width={400} height={300} />
        <h2 className={style.PostTitle}>{post.title}</h2>
        <p>{post.description}</p>
        </Link>
        </li>
    );
}

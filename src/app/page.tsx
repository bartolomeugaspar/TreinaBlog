import useIndex from '@/data/hooks/pages/useIndex.page';
import PostList from '@/ui/components/PostList/postList';
import Link from 'next/link';

export default function Home() {
  const { posts } = useIndex();
  return (
    <main>
      <PostList posts={posts} />
    </main>
  );
}

// import Header from '@/Componets/common/Header';
import { Router, useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { AdminLayout, MainLayout } from '@/Componets/layout';

const Header = dynamic(() => import('@/Componets/common/Header'), { ssr: true });
// sử dụng dynamic routing để khi muốn 1 component chỉ render bên client

export interface AboutProps {
  posts: any;
}

const AboutPage = ({ posts }: AboutProps) => {
  const router = useRouter();
  const page = router.query.page;
  // console.log('query', page);

  const [data, setData] = useState([]);

  useEffect(() => {
    (async function getData() {
      const res = await fetch(
        `https://js-post-api.herokuapp.com/api/posts?_page=${router.query.page}`,
      );
      const data = await res.json();
      setData(data.data);
    })();
  }, [page]);

  const handleNextPage = () => {
    if (!page) return;
    router.push(
      {
        pathname: '/about',
        query: {
          page: Number(page) + 1,
        },
      },
      undefined,
      { shallow: true },
    );
  };
  return (
    <>
      <Header />
      <h1>About Page</h1>
      <ul>
        {data.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={handleNextPage}>next page</button>
    </>
  );
};

AboutPage.Layout = MainLayout;

export default AboutPage;

export const getStaticProps = async () => {
  // console.log('Server render');
  return {
    props: {
      posts: {},
    },
  };
};

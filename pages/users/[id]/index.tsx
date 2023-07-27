import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import * as React from 'react';

export interface UserDetailProps {
  user: any;
}

export default function UserDetail({ user }: UserDetailProps) {
  console.log(user);
  return (
    <div>
      <h1>ID : {user.id}</h1>
      <h1> {user.author}</h1>
      <h1> {user.title}</h1>
      <h1> {user.description}</h1>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
  const data = await res.json();
  console.log(data);

  return {
    paths: data.data.map((user: any) => ({ params: { id: `${user.id}` } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<UserDetailProps> = async (
  context: GetStaticPropsContext,
) => {
  const res = await fetch(
    `https://js-post-api.herokuapp.com/api/posts/${context.params?.id}`,
  );
  const data = await res.json();
  return {
    props: {
      user: data,
    },
  };
};

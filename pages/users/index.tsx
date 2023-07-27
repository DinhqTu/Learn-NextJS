import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import * as React from 'react';

export interface UsersProps {
  users: any[];
}

export default function Users({ users }: UsersProps) {
  return (
    <div>
      <h1>Page Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`users/${user.id}`}>{user.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<UsersProps> = async (
  context: GetStaticPropsContext,
) => {
  const res = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
  const data = await res.json();
  return {
    props: {
      users: data.data,
    },
  };
};

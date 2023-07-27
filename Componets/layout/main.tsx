import { LayoutProps } from '@/Models';
import Link from 'next/link';
import * as React from 'react';

export interface MainLayoutProps {}

export function MainLayout({ children }: LayoutProps) {
  return (
    <div>
      <h1>Main layout</h1>
      <Link href="/">
        <p>Home</p>
      </Link>
      <Link href="about">
        <p>About</p>
      </Link>
      {children}
    </div>
  );
}

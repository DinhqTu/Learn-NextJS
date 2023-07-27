import { LayoutProps } from '@/Models';
import * as React from 'react';

export interface AdminLayoutProps {}

export function AdminLayout({ children }: LayoutProps) {
  return (
    <div>
      <h1>Admin Layout</h1>
      {children}
    </div>
  );
}

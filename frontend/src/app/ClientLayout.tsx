'use client';

import { ReactNode, useEffect } from 'react';
import lenisInstance from './global';
import { usePathname } from 'next/navigation';
import Header from './components/layout/Header';
import Loading from './components/layout/Loading';

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname();

  useEffect(() => {
    // 確保 Lenis 實例在組件卸載時被正確清理
    return () => {
      lenisInstance?.destroy();
    };
  }, []);

  return (
    <>
      <Loading />
      <Header />
      {children}
    </>
  );
}

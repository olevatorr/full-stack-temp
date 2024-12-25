'use client';

import { Home, Info, BookOpen, LayoutDashboard, Mail } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/ui-kit', icon: BookOpen, label: 'UI' },
    { href: '/resume', icon: LayoutDashboard, label: 'Resume' },
    { href: '/contact', icon: Mail, label: 'Contact' },
    { href: '/about', icon: Info, label: 'About' }
  ];

  return (
    <nav className='border-b'>
      <div className='container flex h-16 items-center px-4'>
        <div className='flex gap-6 md:gap-10'>
          {navItems.map(item => (
            <Link href={item.href} key={item.href}>
                <Button variant={pathname === item.href ? 'default' : 'ghost'}>
                <item.icon className='mr-2 h-4 w-4' />
                {item.label}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

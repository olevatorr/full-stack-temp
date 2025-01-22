'use client';

import { Home, Info, BookOpen, Mail, Leaf, Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/ui-kit', icon: BookOpen, label: 'UI' },
    { href: '/pokemon', icon: Leaf, label: 'Pokemon' },
    { href: '/contact', icon: Mail, label: 'Contact' },
    { href: '/about', icon: Info, label: 'About' }
  ];

  return (
    <nav className='sticky top-0 z-50 border-b bg-white'>
      <div className='lg:px-15 flex h-16 items-center justify-between px-5'>
        {/* Logo */}
        <Link href='/' className='flex items-center'>
          <Image
            src='/logo-bk.svg'
            alt='Logo'
            width={100}
            height={40}
            className=''
          />
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden gap-6 md:flex'>
          {navItems.map(item => (
            <Link href={item.href} key={item.href}>
              <Button variant={pathname === item.href ? 'default' : 'ghost'}>
                <item.icon className='mr-2 h-4 w-4' />
                {item.label}
              </Button>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant='ghost'
          className='md:hidden'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className='h-6 w-6' />
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className='md:hidden'>
          <div className='space-y-1 px-2 pb-3 pt-2'>
            {navItems.map(item => (
              <Link href={item.href} key={item.href}>
                <Button
                  variant={pathname === item.href ? 'default' : 'ghost'}
                  className='w-full justify-start'
                >
                  <item.icon className='mr-2 h-4 w-4' />
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

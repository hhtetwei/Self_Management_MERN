import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/dashboard/home');
  });
}

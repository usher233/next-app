import Image from 'next/image'
import Link from 'next/link';
import React from 'react';
import ProductCard from './components/ProductCard';


export default function Home() {
  return (
    <main>
      <Link href="/users" className='btn btn-outline'>Users</Link>
      <ProductCard/>
    </main>
  )
}

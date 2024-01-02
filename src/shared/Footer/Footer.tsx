import Link from 'next/link'
import React from 'react'

const Footer: React.FC = () => {
    return (
        <footer className='bg-black text-white text-center p-4 mt-5'>
            <p>{"</> by"} <Link href={'https://abhisheksingh.dev/'}>Abhishek Singh</Link></p>
        </footer>
    )
}

export default Footer
'use client'
import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Search } from 'lucide-react'

const HomeSearch: React.FC = () => {
    return (
        <section className='p-10 bg-slate-600 rounded-xl mx-5 lg:mx-0'>
            <h2 className='text-white text-lg font-bold mb-2'>Search for any character, Locations, Episodes</h2>
            <div className='flex'>
                <Input className='mr-2' type='text' placeholder='Search Here' />
                <Button><Search /></Button>
            </div>
        </section>
    )
}

export default HomeSearch
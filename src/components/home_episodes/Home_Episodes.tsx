'use client'
import React, { useEffect } from 'react'
import { Button } from '../ui/button'
import { Skeleton } from '../ui/skeleton'
import { EpisodeModel } from '@/model/EpisodeModel'
import Image from 'next/image'
import { GetTopEpisodes } from '@/lib/API_endpoints'

const Home_Episodes: React.FC = () => {
    const [episodes, setEpisodes] = React.useState<EpisodeModel[]>([])
    const [loading, setLoading] = React.useState<boolean>(true)

    useEffect(() => {
        fetchEpisodes()
    }, [])

    async function fetchEpisodes() {
        const res = await GetTopEpisodes()
        if (res !== null && res.length !== 0) {
            setEpisodes(res)
            setLoading(false)
        }
    }

    return (
        <section className="my-5">
            <div className="flex justify-between my-5 mx-5 lg:mx-0">
                <h2 className="text-left text-xl font-bold">Top Episodes</h2>
                <Button>See All</Button>
            </div>
            {
                loading ? <div className="grid grid-cols-4 gap-4">
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8].map((index: number) => <Skeleton key={index + 'Episodes'} className="rounded-xl h-[200px] w-[300px] bg-gray-300" />)
                    }
                </div> : <div className="grid lg:grid-cols-4 md:grid-cols-1 justify-center gap-4">
                    {
                        episodes.map((item: EpisodeModel) => <div className="rounded-xl w-[300px] text-black shadow" key={item.id}>
                            <div className="p-3">
                                <h4 className="text-left text-xl font-bold">{item.name}</h4>
                                <p className="text-left text-sm">{item.episode}</p>
                                <p className="text-left text-sm">{item.air_date}</p>
                            </div>
                        </div>)
                    }
                </div>
            }
        </section>
    )
}

export default Home_Episodes
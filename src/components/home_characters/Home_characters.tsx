'use client'

import { GetTopCharacters } from "@/lib/API_endpoints"
import { CharacterModel } from "@/model/CharacterModel"
import { useEffect, useState } from "react"
import { Skeleton } from "../ui/skeleton"
import Image from "next/image"
import { Button } from "../ui/button"

const Home_characters = () => {
    const [loading, setLoading] = useState(false)
    const [characters, setCharacters] = useState<CharacterModel[]>([])

    useEffect(() => {
        loadCharacters()
    }, [])

    const loadCharacters = async () => {
        setLoading(true)
        var res = await GetTopCharacters()
        if (res !== null && res.length !== 0) {
            setCharacters(res)
            setLoading(false)
        }
    }

    return (
        <section className="my-5">
            <div className="flex justify-between my-5 mx-5 lg:mx-0">
                <h2 className="text-left text-xl font-bold">Top Characters</h2>
                <Button>See All</Button>
            </div>
            {
                loading ? <div className="grid grid-cols-4 gap-4">
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8].map((index: number) => <Skeleton key={index} className="rounded-xl h-[400px] w-[300px] bg-gray-300" />)
                    }
                </div> : <div className="grid lg:grid-cols-4 md:grid-cols-1 justify-center gap-4">
                    {
                        characters.map((item: CharacterModel) => <div className="rounded-xl w-[300px] text-black shadow" key={item.id}>
                            <div className="h-[300px] w-[300px] relative">
                                <Image src={item.image} alt={item.name} fill className="rounded-xl" objectFit="cover" priority={true} />
                                <div className="px-2 rounded-full bg-white absolute top-5 right-5 flex">
                                    {
                                        item.status === "Alive" ? <div className="w-3 animate-pulse h-3 self-center mr-2 bg-green-500 rounded-full" /> :
                                            item.status === "Dead" ? <div className="w-3 animate-pulse h-3 self-center mr-2 bg-red-500 rounded-full" /> :
                                                <div className="w-3 h-3 bg-gray-500 animate-pulse self-center mr-2 rounded-full" />
                                    }
                                    <p className="text-sm font-bold">{item.status}</p>
                                </div>
                            </div>
                            <div className="p-3">
                                <h4 className="text-left text-xl font-bold">{item.name}</h4>
                                <p className="text-left text-sm">{item.origin.name}</p>
                            </div>
                        </div>)
                    }
                </div>
            }
        </section>
    )
}

export default Home_characters
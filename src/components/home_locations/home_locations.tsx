'use client'
import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import { LocationModel } from "@/model/LoactionModel"
import { GetTopLocations } from "@/lib/API_endpoints"
import { Skeleton } from "../ui/skeleton"
import Image from "next/image"

const HomeLocations: React.FC = () => {
    const [loading, setLoading] = useState(true)
    const [locations, setLocations] = useState<LocationModel[]>([])

    useEffect(() => {
        fetchLocations()
    }, [])

    async function fetchLocations() {
        var res = await GetTopLocations();
        if (res !== null && res.length !== 0) {
            setLocations(res)
            setLoading(false)
        }
    }

    return (
        <section className="my-5">
            <div className="flex justify-between my-5 mx-5 lg:mx-0">
                <h3 className="text-left text-xl font-bold">Locations</h3>
                <Button>View All</Button>
            </div>
            {
                loading ? <div className="grid grid-cols-4 gap-4">
                    {
                        [1, 2, 3, 4, 5, 6].map((index: number) => <Skeleton key={index + 'location'} className="rounded-xl h-[200px] w-[300px] bg-gray-300" />)
                    }
                </div> : <div className="grid grid-cols-4 gap-4">
                    {
                        locations.map((item: LocationModel) => <div className="rounded-xl w-[300px] text-black shadow" key={item.id}>
                            <div className="p-3">
                                <h4 className="text-left text-xl font-bold">{item.name}</h4>
                                <h4 className="text-left text-lg font-medium">{item.dimension}</h4>
                                <p className="text-left text-sm">Total Residents : {item.residents.length}</p>
                            </div>
                        </div>)
                    }
                </div>
            }
        </section>
    )
}

export default HomeLocations
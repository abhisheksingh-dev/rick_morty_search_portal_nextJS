import Home_characters from '@/components/home_characters/Home_characters'
import Home_Episodes from '@/components/home_episodes/Home_Episodes'
import HomeLocations from '@/components/home_locations/home_locations'
import HomeSearch from '@/components/home_search/HomeSearch'

export default function Home() {
  return (
    <div className='max-w-7xl mx-auto'>
      <HomeSearch />
      <Home_characters />
      <HomeLocations />
      <Home_Episodes />
    </div>
  )
}

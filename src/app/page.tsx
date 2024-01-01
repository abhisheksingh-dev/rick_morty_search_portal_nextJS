import Home_characters from '@/components/home_characters/Home_characters'
import HomeSearch from '@/components/home_search/HomeSearch'

export default function Home() {
  return (
    <div className='max-w-7xl mx-auto'>
      <HomeSearch />
      <Home_characters />
    </div>
  )
}

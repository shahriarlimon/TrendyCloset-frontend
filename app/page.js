import FeaturedProducts from '@/components/FeaturedProducts/FeaturedProducts'
import LatestProducts from '@/components/LatestProducts/LatestProducts'
import CarouselSlide from '@/components/Navbar/Carousel/Carousel'
import Navbar from '@/components/Navbar/Navbar'
import Offer from '@/components/Offer/Offer'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <CarouselSlide />
      <FeaturedProducts />
      <LatestProducts />
      <Offer />

    </main>
  )
}

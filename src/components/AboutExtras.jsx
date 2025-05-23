import React, { useState, useEffect } from 'react'
import { FaSteam, FaGamepad } from 'react-icons/fa'
import { SiEpicgames, SiVsco } from 'react-icons/si'
import '../styles/AboutExtras.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, FreeMode, Mousewheel } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/mousewheel'
import Masonry from 'react-masonry-css'
import gsap from 'gsap'


const games = [
  {
    title: 'NFS',
    image: 'https://dvdevoouslpfhrdiwakv.supabase.co/storage/v1/object/public/project-images/Games/nfs.jpg',
  },
  {
    title: 'GTA V',
    image: 'https://dvdevoouslpfhrdiwakv.supabase.co/storage/v1/object/public/project-images/Games/gtav.jpg',
  },
  {
    title: 'Valorant',
    image: 'https://dvdevoouslpfhrdiwakv.supabase.co/storage/v1/object/public/project-images/Games/valorant.jpg',
  },
  {
    title: 'Marvel Rivals',
    image: 'https://dvdevoouslpfhrdiwakv.supabase.co/storage/v1/object/public/project-images/Games/marvel.jpeg',
  },
  {
    title: 'Rocket League',
    image: 'https://dvdevoouslpfhrdiwakv.supabase.co/storage/v1/object/public/project-images/Games/rocketleague.png',
  },
  {
    title: 'Ghostwire Tokyo',
    image: 'https://dvdevoouslpfhrdiwakv.supabase.co/storage/v1/object/public/project-images/Games/ghostwire.jpg',
  },
  {
    title: 'The Outer Worlds',
    image: 'https://dvdevoouslpfhrdiwakv.supabase.co/storage/v1/object/public/project-images/Games/TOW.jpg',
  },
  {
    title: 'A plague Tale: Innocence',
    image: 'https://dvdevoouslpfhrdiwakv.supabase.co/storage/v1/object/public/project-images/Games/plague.jpg',
  },
  {
    title: 'Mortal Kombat 11',
    image: 'https://dvdevoouslpfhrdiwakv.supabase.co/storage/v1/object/public/project-images/Games/mortal-kombat-11.jpg',
  },
  {
    title: 'Far Cry 5',
    image: 'https://dvdevoouslpfhrdiwakv.supabase.co/storage/v1/object/public/project-images/Games/far-cry-5.jpg',
  },
  {
    title: 'Dying Light Standard Edition',
    image: 'https://dvdevoouslpfhrdiwakv.supabase.co/storage/v1/object/public/project-images/Games/dying-light.jpg',
  },
  {
    title: 'Tekken 7',
    image: 'https://dvdevoouslpfhrdiwakv.supabase.co/storage/v1/object/public/project-images/Games/tekken-7.jpg',
  },
  {
    title: 'PES',
    image: 'https://dvdevoouslpfhrdiwakv.supabase.co/storage/v1/object/public/project-images/Games/pes.jpg',
  },
  {
    title: 'Injustice 2',
    image: 'https://dvdevoouslpfhrdiwakv.supabase.co/storage/v1/object/public/project-images/Games/injustice-2.jpg',
  },
  {
    title: 'Forza Horizon 4',
    image: 'https://dvdevoouslpfhrdiwakv.supabase.co/storage/v1/object/public/project-images/Games/forza-horizon-4.jpg',
  },
  {
    title: 'Apex Legends',
    image: 'https://dvdevoouslpfhrdiwakv.supabase.co/storage/v1/object/public/project-images/Games/apex-legends1.png',
  } 
  ,
  {
    title: 'Palworld',
    image: 'https://dvdevoouslpfhrdiwakv.supabase.co/storage/v1/object/public/project-images/Games/palworld.jpg',
  },
  
  {
    title: 'Genshin Impact',
    image: 'https://dvdevoouslpfhrdiwakv.supabase.co/storage/v1/object/public/project-images/Games/genshin.jpg',
  }
]

function AboutExtras() {
    const [enableMousewheel, setEnableMousewheel] = useState(false)
    const [renderExtras, setRenderExtras] = useState(false)
    useEffect(() => {
    // Allow DOM to settle before rendering heavy elements
    const timeout = setTimeout(() => setRenderExtras(true), 50)
    return () => clearTimeout(timeout)
  }, [])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setEnableMousewheel(window.innerWidth >= 768)
            const timeout = setTimeout(() => {
              window.dispatchEvent(new Event('resize'))
            }, 100)
        }
    }, [])
    useEffect(() => {
    if (renderExtras) {
      gsap.from('.extras-section', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
      })
    }
  }, [renderExtras])

  if (!renderExtras) return null
  return (
    <>
      <h2 className="extras-heading text-center mb-4">🎮 Games I Love</h2>
      <Swiper
        modules={[Navigation, Pagination, FreeMode, Mousewheel]}
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        freeMode={true} 
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
       >
        {games.map((game, idx) => (
          <SwiperSlide key={idx}>
            <div className="game-card">
              <img src={game.image} alt={game.title} className="game-img" />
              <h5 className="game-title mt-2">{game.title}</h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="text-center">
        <a 
            href="https://steamcommunity.com/id/CURSED06/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="account-btn"
        >
            <FaSteam size={24} />
            Steam
        </a>
        <a 
            href="https://launcher.store.epicgames.com/u/da6d5f57bc454378a618a663f33a6d5f" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="account-btn"
        >
            <SiEpicgames size={24} />
            Epic Games
        </a>
      </div>

      {/* VSCO section included below */}
      <div className="vsco-section">
        <h2 className="vsco-heading">📸 VSCO Clicks</h2>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="vsco-masonry"
          columnClassName="vsco-masonry-column"
        >
          {vscoImages.map((src, idx) => (
            <img key={idx} src={src} alt={`VSCO ${idx}`} className="vsco-img" />
          ))}
        </Masonry>
        <div className="text-center">
            <a 
                href="https://vsco.co/badigoldflake/gallery" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="account-btn"
            >
                <SiVsco size={70} />
                VSCO
            </a>
        </div>
      </div>
    </>
  )
}

export default AboutExtras
const vscoImages = [
    'https://dvdevoouslpfhrdiwakv.supabase.co/storage/v1/object/public/project-images/clicks/1.jpg',
    'https://dvdevoouslpfhrdiwakv.supabase.co/storage/v1/object/public/project-images/clicks/2.jpg',
    'https://dvdevoouslpfhrdiwakv.supabase.co/storage/v1/object/public/project-images/clicks/4.jpg',
    'https://dvdevoouslpfhrdiwakv.supabase.co/storage/v1/object/public/project-images/clicks/5.jpg',
    'https://dvdevoouslpfhrdiwakv.supabase.co/storage/v1/object/public/project-images/clicks/6.jpg',
    'https://dvdevoouslpfhrdiwakv.supabase.co/storage/v1/object/public/project-images/clicks/7.jpg',
    'https://dvdevoouslpfhrdiwakv.supabase.co/storage/v1/object/public/project-images/clicks/Room-Setup.jpg',
    'https://dvdevoouslpfhrdiwakv.supabase.co/storage/v1/object/public/project-images/clicks/12.jpg',
    'https://dvdevoouslpfhrdiwakv.supabase.co/storage/v1/object/public/project-images/clicks/8.jpg',
    'https://dvdevoouslpfhrdiwakv.supabase.co/storage/v1/object/public/project-images/clicks/13.jpg',   
   
    
]
const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1
}



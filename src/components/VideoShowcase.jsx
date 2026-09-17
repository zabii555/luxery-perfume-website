import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  Film,
  Crown,
  Play,
  Pause,
  Volume2,
  VolumeX,
  RotateCcw,
  RotateCw,
  Check,
  ChevronRight,
  Eye,
} from 'lucide-react';
import { useCart } from '../context/CartContext';

const CHAPTER_FILMS = [
  {
    id: 1,
    title: 'The Art of Grasse Distillation & Alchemy',
    subtitle: 'Chapter 01 • Master Cut',
    durationText: '00:45',
    perfumeId: 1,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-perfume-bottle-in-the-smoke-41584-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop',
    desc: 'Witness the rare harvest of Kashmiri Saffron, May Rose, and 25-year aged wild Agarwood distilled in authentic French oak barrels.',
  },
  {
    id: 2,
    title: 'Crystal Flacon & Liquid Splashing',
    subtitle: 'Chapter 02 • High Motion',
    durationText: '00:30',
    perfumeId: 2,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-liquid-perfume-splashing-slow-motion-41585-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800&auto=format&fit=crop',
    desc: 'Slow-motion macro capturing 36% concentrated extrait extractions poured into 24k gold-rimmed crystal decanters.',
  },
  {
    id: 3,
    title: 'Kashmiri Saffron & May Rose Extraction',
    subtitle: 'Chapter 03 • Botanical Sanctuary',
    durationText: '00:40',
    perfumeId: 4,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-perfume-bottle-in-the-smoke-41584-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=800&auto=format&fit=crop',
    desc: 'Hand-harvesting Centifolia roses at dawn in Grasse, combined with sun-dried red saffron threads from Kashmir.',
  },
  {
    id: 4,
    title: '25-Year Aged Cambodian Oud Maturation',
    subtitle: 'Chapter 04 • Royal Cask Heritage',
    durationText: '00:50',
    perfumeId: 3,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-liquid-perfume-splashing-slow-motion-41585-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop',
    desc: 'Ancient wild agarwood resins aged in sealed clay amphoras before being hand-poured into ZN Signature Flacons.',
  },
];

function formatTime(seconds) {
  if (!seconds || isNaN(seconds)) return '00:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

export default function VideoShowcase() {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [thumbnailErrors, setThumbnailErrors] = useState({});
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  const videoRef = useRef(null);
  const { setActiveDetailProduct, perfumesList } = useCart();
  const activeChapter = CHAPTER_FILMS[activeChapterIndex];

  // Auto-play attempt on source change
  useEffect(() => {
    setIsVideoLoading(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    }
  }, [activeChapterIndex]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
      setIsVideoLoading(false);
    }
  };

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const skipTime = (seconds) => {
    if (videoRef.current) {
      const nextTime = Math.min(Math.max(0, videoRef.current.currentTime + seconds), duration);
      videoRef.current.currentTime = nextTime;
      setCurrentTime(nextTime);
    }
  };

  const handleThumbnailError = (chapterId) => {
    setThumbnailErrors((prev) => ({ ...prev, [chapterId]: true }));
  };

  const handleExplorePerfume = (perfumeId) => {
    const found = perfumesList.find((p) => p.id === perfumeId);
    if (found) {
      setActiveDetailProduct(found);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="cinematic"
      className="py-28 relative overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, #03050e 0%, #060c1c 45%, #080f22 75%, #03050e 100%)',
      }}
    >
      {/* Ambient background radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[650px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(212,170,112,0.12) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

      {/* Top gold accent line divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-champagne-400/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-sapphire-900/80 border border-champagne-400/40 text-champagne-300 text-xs font-mono uppercase tracking-[0.35em] mb-6 shadow-champagne-glow backdrop-blur-md">
            <Film className="w-3.5 h-3.5 text-champagne-400" />
            <span>ZN Imperial Film Showcase</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif text-white mb-5 leading-tight">
            The Alchemy of{' '}
            <span className="champagne-gradient-text">Liquid Opulence</span>
          </h2>
          <p className="text-platinum-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Experience our Grasse sanctuary in native 4K cinema. A sensory visual tribute to 36% pure oil extraits.
          </p>
        </div>

        {/* Main Video Player & Controls Container */}
        <div
          className="rounded-3xl overflow-hidden border border-champagne-400/40 bg-sapphire-950 shadow-champagne-glow-lg flex flex-col transition-all duration-500 hover:border-champagne-400/70 mb-12"
          style={{
            boxShadow:
              '0 40px 120px rgba(0,0,0,0.85), 0 0 80px rgba(212,170,112,0.15)',
          }}
        >
          {/* YouTube Video Embed Canvas (Cropped to hide YouTube branding & popups) */}
          <div className="relative w-full aspect-video bg-black overflow-hidden group">
            {/* Embedded YouTube 4K Video with Crop Mask */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <iframe
                key={activeChapterIndex + (isMuted ? '-muted' : '-unmuted')}
                src={`https://www.youtube.com/embed/h6-CRM5eBsM?autoplay=1&mute=${isMuted ? '1' : '0'}&loop=1&playlist=h6-CRM5eBsM&start=20&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&fs=0&playsinline=1`}
                title="ZN Haute Parfumerie Mastercut"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="absolute top-[-18%] left-[-15%] w-[130%] h-[136%] border-0 object-cover pointer-events-none"
              />
            </div>

            {/* Top Ambient Badges */}
            <div className="absolute top-5 left-5 z-20 pointer-events-none flex items-center gap-3">
              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-sapphire-950/90 border border-champagne-400/50 text-champagne-300 text-xs font-mono uppercase tracking-widest backdrop-blur-md shadow-2xl">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                ZN Native 4K Film
              </span>
              <span className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-champagne-500/20 border border-champagne-400/40 text-champagne-300 text-xs font-mono tracking-wider backdrop-blur-md">
                {activeChapter.subtitle}
              </span>
            </div>

            <div className="absolute top-5 right-5 z-20 pointer-events-none">
              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-sapphire-950/90 border border-champagne-400/40 text-champagne-300 text-xs font-mono uppercase tracking-wider backdrop-blur-md shadow-2xl">
                <Crown className="w-3.5 h-3.5 text-champagne-400" />
                Cinema Edition
              </span>
            </div>

            {/* Bottom Clean Audio Action Bar (No Progress Timeline Line) */}
            <div className="absolute bottom-5 right-5 z-30 flex items-center gap-3">
              <button
                onClick={toggleMute}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-sapphire-950/90 border border-champagne-400/50 text-champagne-300 hover:text-white hover:border-champagne-400 transition-all backdrop-blur-md text-xs font-mono tracking-wider shadow-2xl"
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-4 h-4 text-champagne-400" />
                    <span>Unmute Audio</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4 text-champagne-400 animate-pulse" />
                    <span>Audio Playing</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Player Bottom Details & Product Action Bar */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-sapphire-950 via-sapphire-900 to-sapphire-950 border-t border-champagne-400/25 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-champagne-400 font-semibold inline-block bg-champagne-500/15 border border-champagne-400/30 px-3.5 py-1 rounded-full mb-1">
                {activeChapter.subtitle}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white font-medium leading-snug">
                {activeChapter.title}
              </h3>
              <p className="text-sm text-platinum-300 font-light leading-relaxed">
                {activeChapter.desc}
              </p>
            </div>

            <div className="flex items-center gap-4 shrink-0 w-full lg:w-auto">
              <button
                onClick={() => handleExplorePerfume(activeChapter.perfumeId)}
                className="flex-1 lg:flex-none px-7 py-3.5 rounded-2xl bg-gradient-to-r from-champagne-300 via-champagne-400 to-champagne-500 text-sapphire-950 font-bold text-xs font-mono uppercase tracking-[0.25em] shadow-champagne-glow hover:shadow-champagne-glow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shimmer-btn"
              >
                <Sparkles className="w-4 h-4 text-sapphire-950" />
                <span>Explore Featured Flacon</span>
              </button>
            </div>
          </div>
        </div>

        {/* More Videos Section / Mastercut Chapters Playlist Gallery */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-serif text-white flex items-center gap-3">
                <Crown className="w-5 h-5 text-champagne-400" />
                Mastercut Chapter Index
              </h3>
              <p className="text-platinum-400 text-sm font-light mt-1">
                Select a chapter to play inside the native cinema player
              </p>
            </div>
            <span className="text-xs font-mono text-champagne-400/80 uppercase tracking-widest border border-champagne-400/30 px-3 py-1.5 rounded-full bg-sapphire-900/60">
              4 Chapters Available
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CHAPTER_FILMS.map((chapter, index) => {
              const isActive = index === activeChapterIndex;
              const hasError = thumbnailErrors[chapter.id];

              return (
                <div
                  key={chapter.id}
                  onClick={() => setActiveChapterIndex(index)}
                  className={`group cursor-pointer rounded-2xl overflow-hidden border transition-all duration-300 bg-sapphire-900/50 flex flex-col ${
                    isActive
                      ? 'border-champagne-400 shadow-champagne-glow ring-1 ring-champagne-400/50 scale-[1.02]'
                      : 'border-champagne-400/20 hover:border-champagne-400/50 hover:bg-sapphire-900/80'
                  }`}
                >
                  {/* Thumbnail Box with Fallback Placeholder */}
                  <div className="relative aspect-video bg-sapphire-950 overflow-hidden">
                    {!hasError ? (
                      <img
                        src={chapter.thumbnail}
                        alt={chapter.title}
                        onError={() => handleThumbnailError(chapter.id)}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      /* Rich Fallback Placeholder if Image Fails */
                      <div className="w-full h-full bg-gradient-to-br from-sapphire-950 via-sapphire-900 to-sapphire-950 flex flex-col items-center justify-center p-4 border border-champagne-400/30 text-center">
                        <Film className="w-8 h-8 text-champagne-400 mb-2 opacity-80" />
                        <span className="text-[10px] font-mono uppercase tracking-widest text-champagne-300 font-semibold">
                          ZN 4K Cinema
                        </span>
                        <span className="text-xs font-serif text-platinum-300 mt-1 line-clamp-1">
                          {chapter.title}
                        </span>
                      </div>
                    )}

                    {/* Dark Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-sapphire-950 via-transparent to-transparent opacity-80" />

                    {/* Active Play Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-sapphire-950/40 backdrop-blur-[2px]">
                      <div className="w-10 h-10 rounded-full bg-champagne-400 text-sapphire-950 flex items-center justify-center shadow-lg">
                        <Play className="w-5 h-5 fill-sapphire-950 translate-x-0.5" />
                      </div>
                    </div>

                    {/* Chapter Duration & Status Badge */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono">
                      <span className="px-2 py-0.5 rounded bg-sapphire-950/90 text-champagne-300 border border-champagne-400/30 backdrop-blur-md">
                        {chapter.durationText}
                      </span>
                      {isActive && (
                        <span className="px-2.5 py-0.5 rounded-full bg-champagne-400 text-sapphire-950 font-bold flex items-center gap-1 shadow-md">
                          <Check className="w-3 h-3" /> Now Playing
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Thumbnail Content Info */}
                  <div className="p-4 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-champagne-400 font-medium block mb-1">
                        {chapter.subtitle}
                      </span>
                      <h4 className="text-sm font-serif text-white font-medium line-clamp-2 leading-snug group-hover:text-champagne-300 transition-colors">
                        {chapter.title}
                      </h4>
                    </div>

                    <div className="mt-3 pt-3 border-t border-champagne-400/10 flex items-center justify-between text-xs font-mono text-platinum-400 group-hover:text-champagne-300 transition-colors">
                      <span className="flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5 text-champagne-400/80" /> Play Chapter
                      </span>
                      <ChevronRight className="w-4 h-4 text-champagne-400 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

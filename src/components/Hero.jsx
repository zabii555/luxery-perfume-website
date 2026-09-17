import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Crown,
  Eye,
  ShoppingBag,
  Star,
  Film
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import imgRegalGold from '../assets/images/zn_bottle_regal_gold_1788973135712.jpg';
import imgDarkGold from '../assets/images/zn_bottle_dark_gold_1788973081694.jpg';


export default function Hero() {
  const { setIsQuizOpen, perfumesList, setActiveDetailProduct, addToCart } = useCart();
  const featuredPerfume = perfumesList[0]; // ZN Royale No. 1
  const [vidError, setVidError] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => setVidError(true));
    }
  }, []);

  const scrollToCollection = () => {
    const el = document.getElementById('collection');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFilm = () => {
    const el = document.getElementById('cinematic');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-emerald-radial">
      
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-champagne-400/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Split Hero Stage */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column: Editorial Typography (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Emblem Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/80 border border-gold-400/40 text-gold-300 text-xs font-mono uppercase tracking-[0.3em] backdrop-blur-md shadow-champagne-glow">
              <Crown className="w-3.5 h-3.5 text-gold-400" />
              <span>Maison ZN • Haute Parfumerie Privée</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif tracking-tight text-white leading-[1.08]">
              Pure Nectar of <br />
              <span className="gold-gradient-text italic font-normal">Timeless Splendor</span>
            </h1>

            {/* Narrative Subtitle */}
            <p className="text-pearl-300 text-sm sm:text-lg font-light leading-relaxed max-w-xl">
              15 masterwork extraits distilled with up to 40% rare natural oils. Infused with 25-year aged agarwood, Kashmiri saffron, and French May rose—bottled in 24k gold flacons in Grasse, France.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={scrollToCollection}
                className="px-8 py-4 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 text-emerald-950 font-bold uppercase tracking-[0.22em] text-xs sm:text-sm rounded-full shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shimmer-btn"
              >
                <span>Discover 15 Masterpieces</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsQuizOpen(true)}
                className="px-8 py-4 bg-emerald-900/60 hover:bg-emerald-850 text-gold-300 border border-gold-400/40 font-medium uppercase tracking-[0.22em] text-xs sm:text-sm rounded-full backdrop-blur-md transition-all duration-300 hover:border-gold-300 hover:shadow-emerald-glow flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span>Scent Finder Quiz</span>
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gold-400/20 max-w-lg">
              <div>
                <span className="text-xl sm:text-2xl font-serif font-bold text-gold-300 block">35-40%</span>
                <span className="text-[11px] font-mono text-pearl-400 uppercase tracking-wider">Pure Oil Extrait</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-serif font-bold text-gold-300 block">18+ Hrs</span>
                <span className="text-[11px] font-mono text-pearl-400 uppercase tracking-wider">Eternal Sillage</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-serif font-bold text-gold-300 block">100%</span>
                <span className="text-[11px] font-mono text-pearl-400 uppercase tracking-wider">Grasse Alchemy</span>
              </div>
            </div>

          </div>

          {/* Right Hero Column: Luxury Flacon Image & Video Stage (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Flacon Stage Card Container */}
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden glass-emerald border-2 border-gold-400/50 shadow-gold-glow-lg bg-emerald-950/80 group">
              
              {/* ZN Parfums Bottle Image - Always Show */}
              <img
                src={imgRegalGold}
                alt="ZN Royale No. 1 Flacon"
                className="w-full h-full object-cover object-center filter brightness-95 contrast-110 group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/20 to-black/40 pointer-events-none" />


              {/* Top Bestseller Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3.5 py-1 text-[10px] uppercase font-mono font-bold tracking-widest bg-emerald-950/90 text-gold-300 border border-gold-400/50 rounded-full backdrop-blur-md shadow-lg flex items-center gap-1.5">
                  <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
                  ★ Sovereign No. 1 Extrait
                </span>
              </div>

              {/* Floating Top Right Badge */}
              <button
                onClick={scrollToFilm}
                className="absolute top-4 right-4 z-20 px-3 py-1 text-[10px] uppercase font-mono font-bold tracking-widest bg-emerald-950/90 text-gold-300 border border-gold-400/50 rounded-full backdrop-blur-md hover:border-gold-300 flex items-center gap-1 transition-all"
                title="Watch Full 4K Film"
              >
                <Film className="w-3 h-3 text-gold-400" />
                <span>4K Film</span>
              </button>

              {/* Bottom Card Spotlight Info */}
              <div className="absolute bottom-4 left-4 right-4 z-20 p-4 rounded-2xl bg-emerald-950/92 border border-gold-400/35 backdrop-blur-xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400/90 block">
                    Featured Masterwork
                  </span>
                  <h3 className="text-base font-serif font-bold text-white">
                    {featuredPerfume?.name || 'ZN Royale No. 1'}
                  </h3>
                  <p className="text-xs text-gold-300 font-mono font-bold mt-0.5">
                    ${featuredPerfume?.price || 340} • {featuredPerfume?.volume?.split('/')[0] || '100 ml'}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveDetailProduct(featuredPerfume)}
                    className="p-2.5 rounded-xl bg-gold-400/20 text-gold-300 hover:bg-gold-400 hover:text-emerald-950 border border-gold-400/40 transition-all"
                    title="View Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => addToCart(featuredPerfume)}
                    className="px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-gold-400 to-gold-500 text-emerald-950 font-bold text-xs uppercase tracking-wider flex items-center gap-1 shadow-gold-glow shimmer-btn"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Bag</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Floating Royal Monogram Seal */}
            <div className="absolute -bottom-5 -left-4 z-30 p-3.5 rounded-2xl bg-emerald-900/95 border border-gold-400/60 backdrop-blur-xl shadow-gold-glow flex items-center gap-3 animate-float">
              <div className="w-10 h-10 rounded-full border border-gold-400 flex items-center justify-center bg-gold-400/10 text-gold-300">
                <Crown className="w-5 h-5" />
              </div>
              <div className="pr-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-pearl-400 block">Cask Aged</span>
                <span className="text-xs font-serif font-bold text-gold-300">180 Days in Oak</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Marquee Running Ticker Tape */}
      <div className="w-full border-y border-gold-400/20 bg-emerald-950/70 backdrop-blur-md py-3 overflow-hidden relative z-10">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex items-center gap-8 text-xs font-mono uppercase tracking-[0.35em] text-gold-300/80 px-4">
            <span>👑 HAUTE PARFUMERIE PRIVÉE</span>
            <span>•</span>
            <span>GRASSE ALCHEMY SINCE 1988</span>
            <span>•</span>
            <span>40% CONCENTRATED EXTRAITS</span>
            <span>•</span>
            <span>PLACE VENDÔME PARIS</span>
            <span>•</span>
            <span>24K GOLD FLACONS</span>
            <span>•</span>
            <span>COMPLIMENTARY VIP COURIER WORLDWIDE</span>
            <span>•</span>
          </div>
          <div className="flex items-center gap-8 text-xs font-mono uppercase tracking-[0.35em] text-gold-300/80 px-4">
            <span>👑 HAUTE PARFUMERIE PRIVÉE</span>
            <span>•</span>
            <span>GRASSE ALCHEMY SINCE 1988</span>
            <span>•</span>
            <span>40% CONCENTRATED EXTRAITS</span>
            <span>•</span>
            <span>PLACE VENDÔME PARIS</span>
            <span>•</span>
            <span>24K GOLD FLACONS</span>
            <span>•</span>
            <span>COMPLIMENTARY VIP COURIER WORLDWIDE</span>
            <span>•</span>
          </div>
        </div>
      </div>

    </section>
  );
}

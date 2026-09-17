import imgRoyaleNo1HD from '../assets/images/zn_royale_no1_hd.jpg';
import imgAventusImperialHD from '../assets/images/zn_aventus_imperial_hd.jpg';
import imgNoirTobaccoHD from '../assets/images/zn_noir_tobacco_hd.jpg';
import imgOudMarqueeHD from '../assets/images/zn_oud_marquee_hd.jpg';
import imgSauvageElixirHD from '../assets/images/zn_sauvage_elixir_hd.jpg';
import imgNaxosGoldHD from '../assets/images/zn_naxos_gold_hd.jpg';
import imgSantalSublimeHD from '../assets/images/zn_santal_sublime_hd.jpg';
import imgAngelsAmberHD from '../assets/images/zn_angels_amber_hd.jpg';
import imgLaytonExclusifHD from '../assets/images/zn_layton_exclusif_hd.jpg';
import imgLostCherryHD from '../assets/images/zn_lost_cherry_hd.jpg';
import imgGrandSoirHD from '../assets/images/zn_grand_soir_hd.jpg';
import imgSilverMountainHD from '../assets/images/zn_silver_mountain_hd.jpg';
import imgBlackPhantomHD from '../assets/images/zn_black_phantom_hd.jpg';
import imgJazzClubHD from '../assets/images/zn_jazz_club_hd.jpg';
import imgBleuEtoileHD from '../assets/images/zn_bleu_etoile_hd.jpg';

import imgDarkGold from '../assets/images/zn_bottle_dark_gold_1788973081694.jpg';
import imgCrystalRose from '../assets/images/zn_bottle_crystal_rose_1788973096030.jpg';
import imgAmberWood from '../assets/images/zn_bottle_amber_wood_1788973111671.jpg';
import imgMatteBlack from '../assets/images/zn_bottle_matte_black_1788973122758.jpg';
import imgRegalGold from '../assets/images/zn_bottle_regal_gold_1788973135712.jpg';
import imgOceanBlue from '../assets/images/zn_bottle_ocean_blue_1788974713812.jpg';



const PERFUME_CATALOG = [
  {
    id: 1,
    name: "ZN Royale No. 1",
    subtitle: "The Amber Crystal Sovereign",
    inspiration: "Grand Baccarat Extrait Tribute",
    category: "Amber Floral & Wood",
    family: "amber",
    gender: "Unisex",
    price: 340,
    originalPrice: 450,
    rating: 4.98,
    reviewsCount: 184,
    badge: "Most Iconic",
    concentration: "Extrait de Parfum (36% Pure Essence)",
    volume: "100 ml / 3.4 FL.OZ",
    sizes: [
      { size: "50ml Flacon", price: 220 },
      { size: "100ml Signature Bottle", price: 340 },
      { size: "200ml Luxury Decanter", price: 580 }
    ],
    image: imgRoyaleNo1HD,
    gallery: [
      imgRoyaleNo1HD,
      imgRegalGold,
      imgAmberWood,
      imgDarkGold
    ],
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-perfume-bottle-in-the-smoke-41584-large.mp4",
    description: "An intoxicating symphony of luminous saffron, crushed Egyptian jasmine grandiflorum, and molten ambergris. ZN Royale No. 1 captures the aura of pure red crystal under candlelight—radiant, opulent, and utterly magnetic.",
    story: "Conceived during a moonlit evening in Grasse, Royale No. 1 was formulated using double-distilled saffron from Kashmir and mineral ambergris aged for five seasons in French oak casks.",
    notes: {
      top: ["Kashmir Saffron", "Bitter Almond", "Blood Mandarin"],
      heart: ["Egyptian Jasmine Grandiflorum", "Virginia Cedarwood", "Golden Amber Accord"],
      base: ["Mineral Ambergris", "Fir Balsam Resin", "Cashmere Woody Musk"]
    },
    accords: ["Ambery", "Warm Saffron", "White Floral", "Woody-Musky"],
    longevity: "18+ Hours (Eternal Projection)",
    sillage: "Enormous (Magnetic 4-Meter Trail)",
    season: "All Seasons / Black Tie & Gala",
    occasion: "Red Carpet, VIP Galas, Intimate Evenings",
    perfumer: "Antoine Laurent, Haute Parfumerie Grasse",
    reviews: [
      {
        id: "r1-1",
        author: "Alexander Von Brandt",
        rating: 5,
        date: "2 Days ago",
        verified: true,
        title: "Unquestionably the best perfume I've ever owned",
        content: "The sillage on Royale No. 1 is out of this world. Everywhere I go, strangers stop and ask for the fragrance name. The ambergris and saffron blend is regal."
      },
      {
        id: "r1-2",
        author: "Lady Eleanor Sinclair",
        rating: 5,
        date: "1 Week ago",
        verified: true,
        title: "Pure liquid gold in a bottle",
        content: "Extremely rich and concentrated. One spray lasted from my morning gala meeting until midnight champagne dinner. ZN has created pure perfection."
      },
      {
        id: "r1-3",
        author: "Dr. Farhan Al-Mansoor",
        rating: 5,
        date: "2 Weeks ago",
        verified: true,
        title: "Masterpiece quality",
        content: "The packaging, heavy crystal flacon, and the magnetic projection make this worth double the price. Truly royal."
      }
    ]
  },
  {
    id: 2,
    name: "ZN Aventus Imperial",
    subtitle: "The Emperor's Chypre Triumph",
    inspiration: "Creed Imperial Heritage",
    category: "Fruity Woody Chypre",
    family: "woody",
    gender: "For Him",
    price: 360,
    originalPrice: 480,
    rating: 4.96,
    reviewsCount: 230,
    badge: "Bestseller",
    concentration: "Extrait de Parfum (35% Essence)",
    volume: "100 ml / 3.4 FL.OZ",
    sizes: [
      { size: "50ml Flacon", price: 230 },
      { size: "100ml Signature Bottle", price: 360 },
      { size: "200ml Luxury Decanter", price: 610 }
    ],
    image: imgAventusImperialHD,
    gallery: [
      imgAventusImperialHD,
      imgMatteBlack,
      imgDarkGold,
      imgRoyaleNo1HD
    ],
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-liquid-perfume-splashing-slow-motion-41585-large.mp4",
    description: "An emblem of power, vision, and victory. Opening with crisp French blackcurrant, juicy smoked pineapple, and Italian bergamot, evolving into birch smoke, patchouli, and rare grey ambergris.",
    story: "A bespoke creation honoring conquerors and captains of industry. Crafted with smoky birch bark and hand-picked royal pineapple essences.",
    notes: {
      top: ["Smoked Royal Pineapple", "Calabrian Bergamot", "Blackcurrant", "Apple Crisp"],
      heart: ["Smoky French Birch", "Louisiana Patchouli", "Moroccan Jasmine", "Rose de Mai"],
      base: ["Grey Ambergris", "Spanish Oakmoss", "Bourbon Vanilla", "White Musk"]
    },
    accords: ["Fruity-Smoky", "Woody", "Citrus", "Earthy Leather"],
    longevity: "16+ Hours",
    sillage: "Enormous & Authoritative",
    season: "All Year / Spring & Summer Signature",
    occasion: "Boardroom, Executive Meetings, Celebrations",
    perfumer: "Jean-Claude Vaneau, Master Nose",
    reviews: [
      {
        id: "r2-1",
        author: "Marcus Sterling",
        rating: 5,
        date: "3 Days ago",
        verified: true,
        title: "The apex predator of masculine scents",
        content: "Crisper, richer, and far longer lasting than any luxury batch on the market today. The smoky pineapple opening is heavenly."
      },
      {
        id: "r2-2",
        author: "Tariq Hashmi",
        rating: 5,
        date: "1 Week ago",
        verified: true,
        title: "Pure confidence booster",
        content: "Wear this to any important business dinner and you instantly command respect. Beautiful heavy metallic cap too."
      }
    ]
  },
  {
    id: 3,
    name: "ZN Noir de Tobacco",
    subtitle: "The Velvet Cigar Lounge",
    inspiration: "Tom Ford Tobacco Reserve",
    category: "Warm Spicy Gourmand",
    family: "gourmand",
    gender: "Unisex",
    price: 320,
    originalPrice: 420,
    rating: 4.95,
    reviewsCount: 142,
    badge: "Winter Masterpiece",
    concentration: "Extrait de Parfum (38% Essence)",
    volume: "100 ml / 3.4 FL.OZ",
    sizes: [
      { size: "50ml Flacon", price: 210 },
      { size: "100ml Signature Bottle", price: 320 },
      { size: "200ml Luxury Decanter", price: 550 }
    ],
    image: imgNoirTobaccoHD,
    gallery: [
      imgNoirTobaccoHD,
      imgAmberWood,
      imgDarkGold,
      imgRegalGold
    ],
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-perfume-bottle-in-the-smoke-41584-large.mp4",
    description: "Rich, opulent, and warm. Opulent tobacco leaf bathed in creamy Madagascar vanilla beans, aromatic spice accords, cacao liquor, and dried winter fruits with rich tree sap.",
    story: "Inspired by private Gentlemen's clubs of Mayfair London and Havana cigar parlors, blended with triple-aged dark vanilla nectar.",
    notes: {
      top: ["Cuban Tobacco Leaf", "Spicy Coriander", "Star Anise"],
      heart: ["Madagascar Vanilla Pods", "Cacao Bean", "Tonka Bean", "Tobacco Blossom"],
      base: ["Dried Plum & Fig", "Sweet Wood Sap", "Golden Amber"]
    },
    accords: ["Sweet Tobacco", "Vanilla Cream", "Warm Spicy", "Cacao"],
    longevity: "20+ Hours (Lasts on coats for days)",
    sillage: "Warm & Enveloping",
    season: "Autumn / Winter / Chilly Nights",
    occasion: "Fireplace Evenings, Date Nights, Luxury Dinners",
    perfumer: "Dominique Ropion Collaborateur",
    reviews: [
      {
        id: "r3-1",
        author: "Julian Vance",
        rating: 5,
        date: "5 Days ago",
        verified: true,
        title: "Like wrapped in a cashmere blanket with aged rum and cigars",
        content: "Deeply comforting, ultra high-grade vanilla without being cloying. The dried fruit and tobacco leaf note is exceptional."
      }
    ]
  },
  {
    id: 4,
    name: "ZN Oud Marquee",
    subtitle: "The Royal Arabian Nectar",
    inspiration: "Roja Haute Parfumerie Oud",
    category: "Oriental Rare Oud & Rose",
    family: "woody",
    gender: "Unisex",
    price: 410,
    originalPrice: 550,
    rating: 4.99,
    reviewsCount: 160,
    badge: "Ultra Rare Extrait",
    concentration: "Extrait de Parfum (40% Pure Oil)",
    volume: "100 ml / 3.4 FL.OZ",
    sizes: [
      { size: "50ml Flacon", price: 270 },
      { size: "100ml Signature Bottle", price: 410 },
      { size: "200ml Luxury Decanter", price: 720 }
    ],
    image: imgOudMarqueeHD,
    gallery: [
      imgOudMarqueeHD,
      imgRegalGold,
      imgAmberWood,
      imgRoyaleNo1HD
    ],
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-liquid-perfume-splashing-slow-motion-41585-large.mp4",
    description: "The crown jewel of Middle Eastern luxury. Wild Cambodian Agarwood aged for 25 years harmonized with Taif Rose petals, saffron thread, frankincense, and creamy Mysore sandalwood.",
    story: "Extracted from ancient wild trees in Koh Kong, aged in sealed clay amphoras before being bottled in 24k gold-inlaid crystal.",
    notes: {
      top: ["Bergamot di Calabria", "Taif Rosewater", "Cardamom Seed"],
      heart: ["25-Year Aged Cambodian Agarwood", "Centifolia Rose", "Cistus Labdanum"],
      base: ["Mysore Sandalwood", "Omani Frankincense", "Leather", "Civet Accord"]
    },
    accords: ["Precious Oud", "Rose Petals", "Balsamic", "Smoky Wood"],
    longevity: "24+ Hours (Eternal Beast)",
    sillage: "Monolithic & Hypnotic",
    season: "Winter, Formal Evening Ceremonies",
    occasion: "Royal Weddings, High Diplomacy, Private Jet Gatherings",
    perfumer: "Sheikh Zafar Al-Nasser & ZN Atelier",
    reviews: [
      {
        id: "r4-1",
        author: "Prince Hamdan K.",
        rating: 5,
        date: "Yesterday",
        verified: true,
        title: "Pure authentic oud without harsh barnyard notes",
        content: "Smooth, deep, mystical. You can immediately smell the genuine aged resinous oud wood. Truly magnificent artistry."
      }
    ]
  },
  {
    id: 5,
    name: "ZN Sauvage Elixir Privé",
    subtitle: "The Midnight Desert Storm",
    inspiration: "Dior Sauvage Elixir Reserve",
    category: "Fresh Spicy & Licorice Wood",
    family: "fresh",
    gender: "For Him",
    price: 310,
    originalPrice: 400,
    rating: 4.93,
    reviewsCount: 275,
    badge: "Trending High",
    concentration: "Extrait de Parfum (35% Essence)",
    volume: "100 ml / 3.4 FL.OZ",
    sizes: [
      { size: "50ml Flacon", price: 200 },
      { size: "100ml Signature Bottle", price: 310 },
      { size: "200ml Luxury Decanter", price: 530 }
    ],
    image: imgSauvageElixirHD,
    gallery: [
      imgSauvageElixirHD,
      imgOceanBlue,
      imgMatteBlack,
      imgBleuEtoileHD
    ],
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-perfume-bottle-in-the-smoke-41584-large.mp4",
    description: "An electrifying nocturnal potion. Blending potent cinnamon bark, cardamom, and fresh grapefruit with a heart of wild Nyons lavender, licorice root, Haitian vetiver, and smoky patchouli.",
    story: "Capturing the blue hour in the Mojave desert where dusk transforms into velvet starry night.",
    notes: {
      top: ["Cinnamon Bark", "Nutmeg", "Guatemalan Cardamom", "Ruby Grapefruit"],
      heart: ["Organic Nyons Lavender Essence", "Rich Licorice Root", "Coumarin"],
      base: ["Haitian Vetiver", "Golden Amber", "Patchouli Coeur", "Cedarwood"]
    },
    accords: ["Warm Spicy", "Aromatic Lavender", "Woody", "Fresh Spice"],
    longevity: "18+ Hours",
    sillage: "Room-filling & Magnetic",
    season: "Fall, Winter & Crisp Spring",
    occasion: "Night Clubbing, VIP Lounges, High Impact Events",
    perfumer: "François Demachy Heritage Line",
    reviews: [
      {
        id: "r5-1",
        author: "Devon Reed",
        rating: 5,
        date: "4 Days ago",
        verified: true,
        title: "2 sprays is enough for the entire weekend",
        content: "The density of the lavender and spices is unmatched. Received compliments from colleagues and restaurant staff alike."
      }
    ]
  },
  {
    id: 6,
    name: "ZN Naxos Gold",
    subtitle: "The Sicilian Honey Sun",
    inspiration: "Xerjoff Naxos 1861",
    category: "Honey Tobacco Citrus",
    family: "gourmand",
    gender: "Unisex",
    price: 350,
    originalPrice: 460,
    rating: 4.97,
    reviewsCount: 195,
    badge: "Italian Masterpiece",
    concentration: "Extrait de Parfum (36% Essence)",
    volume: "100 ml / 3.4 FL.OZ",
    sizes: [
      { size: "50ml Flacon", price: 225 },
      { size: "100ml Signature Bottle", price: 350 },
      { size: "200ml Luxury Decanter", price: 590 }
    ],
    image: imgNaxosGoldHD,
    gallery: [
      imgNaxosGoldHD,
      imgDarkGold,
      imgRegalGold,
      imgAngelsAmberHD
    ],
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-liquid-perfume-splashing-slow-motion-41585-large.mp4",
    description: "A golden tribute to the soul of Sicily. Sun-drenched bergamot and lemon blend seamlessly into golden lavender and raw mountain honey, melting into smooth tobacco leaves and tonka bean.",
    story: "Distilled under the Mediterranean sun using artisanal floral extracts and unfiltered wild honeycomb from Mount Etna slopes.",
    notes: {
      top: ["Sicilian Lemon", "Calabrian Bergamot", "French Lavender"],
      heart: ["Wild Mountain Honey", "Cinnamon Quill", "Cashmeran", "Jasmine Sambac"],
      base: ["Blonde Tobacco Leaves", "Tonka Bean", "Bourbon Vanilla Pods"]
    },
    accords: ["Sweet Honey", "Tobacco Leaf", "Citrus Lavender", "Warm Vanilla"],
    longevity: "15+ Hours",
    sillage: "Warm, Radiating & Luxurious",
    season: "All Year Round / Gorgeous in Spring & Autumn",
    occasion: "Yacht Parties, Luxury Vacation, Sunset Aperitifs",
    perfumer: "Sergio Momo Collaborateur",
    reviews: [
      {
        id: "r6-1",
        author: "Sophia Marchetti",
        rating: 5,
        date: "6 Days ago",
        verified: true,
        title: "Pure sunshine and luxury honey",
        content: "The smoothest honey fragrance in existence. It does not smell synthetic at all. It feels like wearing liquid gold."
      }
    ]
  },
  {
    id: 7,
    name: "ZN Santal 33 Sublime",
    subtitle: "The Wild Western Woods",
    inspiration: "Le Labo Santal Reserve",
    category: "Woody Aromatic Leather",
    family: "woody",
    gender: "Unisex",
    price: 330,
    originalPrice: 430,
    rating: 4.91,
    reviewsCount: 215,
    badge: "Cult Favorite",
    concentration: "Eau de Parfum Intense (30% Essence)",
    volume: "100 ml / 3.4 FL.OZ",
    sizes: [
      { size: "50ml Flacon", price: 215 },
      { size: "100ml Signature Bottle", price: 330 },
      { size: "200ml Luxury Decanter", price: 560 }
    ],
    image: imgAmberWood,
    gallery: [
      imgAmberWood,
      imgDarkGold,
      imgRegalGold,
      imgRoyaleNo1HD
    ],
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-perfume-bottle-in-the-smoke-41584-large.mp4",
    description: "An intoxicating ode to the spirit of the American West under indigo skies. Smoked Australian sandalwood, papyrus, cardamom, violet blossom, and supple worn saddle leather.",
    story: "Infused with smoky cedar and rare Australian album sandalwood aged in dry terracotta jars.",
    notes: {
      top: ["Cardamom", "Violet Leaf", "Green Papyrus"],
      heart: ["Iris Root Concrete", "Smoky Cedarwood", "Amber Accord"],
      base: ["Australian Sandalwood", "Worn Leather", "Soft Cedar", "Musk"]
    },
    accords: ["Woody Sandalwood", "Leather", "Powdery Iris", "Green Spicy"],
    longevity: "14+ Hours",
    sillage: "Distinctive & Unforgettable",
    season: "Autumn, Winter & Cool Spring",
    occasion: "Art Gallery Openings, Hip Boutique Strolls, Daily Signature",
    perfumer: "Frank Voelkl Inspiration",
    reviews: [
      {
        id: "r7-1",
        author: "Liam Montgomery",
        rating: 5,
        date: "1 Week ago",
        verified: true,
        title: "My signature scent forever",
        content: "Clean, leathery, woody and intensely artistic. I get asked about this at least twice a day in Soho."
      }
    ]
  },
  {
    id: 8,
    name: "ZN Angels' Amber",
    subtitle: "The Cognac Barrel Nectar",
    inspiration: "Kilian Angels' Share Masterpiece",
    category: "Boozy Gourmand Amber",
    family: "gourmand",
    gender: "Unisex",
    price: 375,
    originalPrice: 490,
    rating: 4.98,
    reviewsCount: 188,
    badge: "Sensory Jewel",
    concentration: "Extrait de Parfum (37% Essence)",
    volume: "100 ml / 3.4 FL.OZ",
    sizes: [
      { size: "50ml Flacon", price: 240 },
      { size: "100ml Signature Bottle", price: 375 },
      { size: "200ml Luxury Decanter", price: 640 }
    ],
    image: imgDarkGold,
    gallery: [
      imgDarkGold,
      imgAmberWood,
      imgRegalGold,
      imgNaxosGoldHD
    ],
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-liquid-perfume-splashing-slow-motion-41585-large.mp4",
    description: "An opulent liquor distillation derived directly from the 'Angels’ Share' evaporation of aged Cognac barrels. Infused with Ceylon cinnamon, roasted tonka bean, hazelnut praline, and oak wood essence.",
    story: "Formulated using genuine 50-year-old French oak cognac barrel extracts, blended with praline crumble and creamy sandalwood.",
    notes: {
      top: ["Vintage French Cognac Essence", "Bitter Almond", "Candied Orange"],
      heart: ["Ceylon Cinnamon Quill", "Tonka Bean Absolute", "Hazelnut Praline"],
      base: ["Aged Oak Wood", "Bourbon Vanilla", "Creamy Sandalwood"]
    },
    accords: ["Boozy Cognac", "Warm Cinnamon", "Sweet Praline", "Oak Wood"],
    longevity: "17+ Hours",
    sillage: "Hypnotic & Delicious",
    season: "Winter, Holiday Season, Romantic Dates",
    occasion: "Candlelit Dates, Fireside Nights, Luxury Parties",
    perfumer: "Benoist Lapouza Lineage",
    reviews: [
      {
        id: "r8-1",
        author: "Camille Dupont",
        rating: 5,
        date: "2 Days ago",
        verified: true,
        title: "Smells like pure decadence and dessert in Paris",
        content: "The cognac and cinnamon opening makes your mouth water. Irresistible and lasts through the entire night."
      }
    ]
  },
  {
    id: 9,
    name: "ZN Layton Exclusif",
    subtitle: "The Royal Equestrian Court",
    inspiration: "Parfums de Marly Layton",
    category: "Oriental Spicy Fougere",
    family: "amber",
    gender: "For Him",
    price: 345,
    originalPrice: 450,
    rating: 4.94,
    reviewsCount: 165,
    badge: "Nobility Choice",
    concentration: "Extrait de Parfum (35% Essence)",
    volume: "100 ml / 3.4 FL.OZ",
    sizes: [
      { size: "50ml Flacon", price: 220 },
      { size: "100ml Signature Bottle", price: 345 },
      { size: "200ml Luxury Decanter", price: 580 }
    ],
    image: imgRegalGold,
    gallery: [
      imgRegalGold,
      imgOceanBlue,
      imgSauvageElixirHD,
      imgMatteBlack
    ],
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-perfume-bottle-in-the-smoke-41584-large.mp4",
    description: "A grand aristocratic composition. Crisp green apple and bergamot meet fiery cardamom, geranium, and royal lavender, settled upon caramelized vanilla, bitter almond, and guaiac wood.",
    story: "Created to celebrate the majestic horses of the 18th-century Versailles royal stables, enriched with precious spices.",
    notes: {
      top: ["Green Apple", "Mandarin", "Calabrian Bergamot", "Lavender"],
      heart: ["Guatemalan Cardamom", "Geranium", "Violet Leaf", "Jasmine"],
      base: ["Bourbon Vanilla", "Bitter Almond", "Guaiac Wood", "Indonesian Patchouli"]
    },
    accords: ["Warm Spicy", "Aromatic Vanilla", "Woody", "Fruity Fresh"],
    longevity: "16+ Hours",
    sillage: "Enchanting & Aristocratic",
    season: "Fall & Winter Signature",
    occasion: "Formal Dinners, Theater, Royal Functions",
    perfumer: "Hamid Merati-Kashani",
    reviews: [
      {
        id: "r9-1",
        author: "Lord Henry Cavendish",
        rating: 5,
        date: "3 Days ago",
        verified: true,
        title: "The pinnacle of masculine refinement",
        content: "The transition from crisp green apple to spiced warm vanilla is intoxicating. Incredible longevity and projection."
      }
    ]
  },
  {
    id: 10,
    name: "ZN Lost Cherry Velvet",
    subtitle: "The Forbidden Crimson Temptation",
    inspiration: "Tom Ford Cherry Extrait",
    category: "Liqueur Amber Cherry",
    family: "gourmand",
    gender: "For Her",
    price: 365,
    originalPrice: 480,
    rating: 4.97,
    reviewsCount: 210,
    badge: "Extrait Privé",
    concentration: "Extrait de Parfum (38% Essence)",
    volume: "100 ml / 3.4 FL.OZ",
    sizes: [
      { size: "50ml Flacon", price: 235 },
      { size: "100ml Signature Bottle", price: 365 },
      { size: "200ml Luxury Decanter", price: 620 }
    ],
    image: imgCrystalRose,
    gallery: [
      imgCrystalRose,
      imgRoyaleNo1HD,
      imgRegalGold,
      imgCrystalRose
    ],
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-liquid-perfume-splashing-slow-motion-41585-large.mp4",
    description: "A lush journey into the once-forbidden. Exotic black cherry drenched in kirsch liqueur, roasted bitter almond syrup, Turkish rose, and Peru balsam with smoky roasted tonka beans.",
    story: "Crafted with dark Morello cherries macerated in French amaretto and infused with Turkish rose petals.",
    notes: {
      top: ["Black Morello Cherry", "Kirsch Liqueur", "Bitter Almond Paste"],
      heart: ["Turkish Rose Petals", "Jasmine Sambac", "Sour Cherry Syrup"],
      base: ["Peru Balsam", "Roasted Tonka Bean", "Sandalwood", "Vetiver", "Cedar"]
    },
    accords: ["Cherry Liqueur", "Sweet Almond", "Nutty", "Balsamic Amber"],
    longevity: "15+ Hours",
    sillage: "Seductive & Captivating",
    season: "Evening / Autumn & Winter",
    occasion: "Romantic Rendezvous, Glamorous Parties, Midnight Dates",
    perfumer: "Louise Turner Inspiration",
    reviews: [
      {
        id: "r10-1",
        author: "Natasha Romanova",
        rating: 5,
        date: "5 Days ago",
        verified: true,
        title: "Sensual and hypnotic beyond words",
        content: "Unlike the lighter versions, this Extrait lasts on my skin all night long. The cherry liqueur and almond note is to die for."
      }
    ]
  },
  {
    id: 11,
    name: "ZN Grand Soir Nocturne",
    subtitle: "The Paris Twilight Reverie",
    inspiration: "MFK Grand Soir Extrait",
    category: "Amber Balsamic Oriental",
    family: "amber",
    gender: "Unisex",
    price: 350,
    originalPrice: 460,
    rating: 4.96,
    reviewsCount: 154,
    badge: "Golden Amber",
    concentration: "Extrait de Parfum (35% Essence)",
    volume: "100 ml / 3.4 FL.OZ",
    sizes: [
      { size: "50ml Flacon", price: 225 },
      { size: "100ml Signature Bottle", price: 350 },
      { size: "200ml Luxury Decanter", price: 590 }
    ],
    image: imgDarkGold,
    gallery: [
      imgDarkGold,
      imgRegalGold,
      imgAmberWood,
      imgRoyaleNo1HD
    ],
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-perfume-bottle-in-the-smoke-41584-large.mp4",
    description: "Dress in your finest evening attire and plunge into the endless night of Paris. A warm golden amber masterpiece featuring Siamese benzoin resin, Brazilian tonka bean, and Spanish labdanum.",
    story: "A fragrant love letter to the City of Light lit up by thousand golden chandeliers over the Pont Alexandre III.",
    notes: {
      top: ["Spanish Labdanum", "Golden Citrus Zest"],
      heart: ["Siamese Benzoin Tears", "Lavender Infusion"],
      base: ["Brazilian Tonka Bean", "Amber Resin Accord", "Vanilla Absolute"]
    },
    accords: ["Golden Amber", "Warm Balsamic", "Vanilla", "Resinous"],
    longevity: "18+ Hours",
    sillage: "Warm Golden Radiance",
    season: "Winter, Late Autumn, Opera Evenings",
    occasion: "Symphony, Opera, Gala Dinners, Romance",
    perfumer: "Francis Kurkdjian Tribute",
    reviews: [
      {
        id: "r11-1",
        author: "Jean-Luc Moreau",
        rating: 5,
        date: "4 Days ago",
        verified: true,
        title: "The warmest, most sophisticated amber on Earth",
        content: "If luxury had a scent, it would be Grand Soir Nocturne. The drydown is pure golden silk."
      }
    ]
  },
  {
    id: 12,
    name: "ZN Silver Mountain Breeze",
    subtitle: "The Alpine Glacial Stream",
    inspiration: "Creed Silver Mountain Freshness",
    category: "Crisp Green Tea & Musk",
    family: "fresh",
    gender: "Unisex",
    price: 310,
    originalPrice: 410,
    rating: 4.90,
    reviewsCount: 140,
    badge: "Summer Elixir",
    concentration: "Eau de Parfum Intense (28% Essence)",
    volume: "100 ml / 3.4 FL.OZ",
    sizes: [
      { size: "50ml Flacon", price: 200 },
      { size: "100ml Signature Bottle", price: 310 },
      { size: "200ml Luxury Decanter", price: 530 }
    ],
    image: imgCrystalRose,
    gallery: [
      imgCrystalRose,
      imgOceanBlue,
      imgMatteBlack,
      imgRegalGold
    ],
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-liquid-perfume-splashing-slow-motion-41585-large.mp4",
    description: "Capturing the purity of sparkling alpine water cascading over snow-capped Swiss peaks. Invigorating green tea notes, crisp blackcurrant buds, Italian bergamot, and crystalline white musk.",
    story: "Formulated to recreate the sensation of breathing crystal-clear mountain air at 3,000 meters altitude.",
    notes: {
      top: ["Calabrian Bergamot", "Mandarin Orange", "Neroli"],
      heart: ["Organic Green Tea", "Blackcurrant Bud Accord", "Ozonic Notes"],
      base: ["Crystalline White Musk", "Sandalwood", "Petitgrain", "Galbanum"]
    },
    accords: ["Green Tea", "Citrus Aromatic", "Fruity Fresh", "Musky Clean"],
    longevity: "12+ Hours",
    sillage: "Crisp & Pristine",
    season: "Spring & Summer / High Heat Signature",
    occasion: "Country Club, Tennis, Yachting, Morning Meetings",
    perfumer: "Olivier Creed Inspiration",
    reviews: [
      {
        id: "r12-1",
        author: "Evelyn Thorne",
        rating: 5,
        date: "1 Week ago",
        verified: true,
        title: "Cleanest, most refreshing fragrance ever created",
        content: "The green tea and blackcurrant notes are razor sharp and uplifting. Perfect for hot summer days."
      }
    ]
  },
  {
    id: 13,
    name: "ZN Black Phantom",
    subtitle: "The Pirate's Dark Treasure",
    inspiration: "Kilian Black Phantom Memento Mori",
    category: "Dark Gourmand Coffee & Rum",
    family: "gourmand",
    gender: "Unisex",
    price: 380,
    originalPrice: 500,
    rating: 4.97,
    reviewsCount: 172,
    badge: "Dark Collector",
    concentration: "Extrait de Parfum (38% Essence)",
    volume: "100 ml / 3.4 FL.OZ",
    sizes: [
      { size: "50ml Flacon", price: 245 },
      { size: "100ml Signature Bottle", price: 380 },
      { size: "200ml Luxury Decanter", price: 650 }
    ],
    image: imgMatteBlack,
    gallery: [
      imgMatteBlack,
      imgAventusImperialHD,
      imgNoirTobaccoHD,
      imgDarkGold
    ],
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-perfume-bottle-in-the-smoke-41584-large.mp4",
    description: "An intoxicating voyage across stormy seas. Dark Martinique rum, bitter roasted Ethiopian coffee beans, pure sugarcane caramel, cyanide bitter almond, and rich sandalwood.",
    story: "Inspired by the pirate legend 'Memento Mori'—a reminder to live life fearlessly and indulge in every pleasure.",
    notes: {
      top: ["Martinique Dark Rum", "Bitter Almond", "Raw Sugarcane"],
      heart: ["Dark Roasted Ethiopian Coffee", "Caramelized Sugar", "Heliotrope"],
      base: ["Dark Chocolate", "Java Sandalwood", "Vetiver"]
    },
    accords: ["Dark Rum", "Roasted Coffee", "Sweet Caramel", "Chocolate Wood"],
    longevity: "18+ Hours",
    sillage: "Dark & Mysterious",
    season: "Winter, Nightfall, Midnight Rendezvous",
    occasion: "Speakeasies, Midnight Drives, VIP Nightclubs",
    perfumer: "Sidonie Lancesseur",
    reviews: [
      {
        id: "r13-1",
        author: "Dante Alighieri B.",
        rating: 5,
        date: "3 Days ago",
        verified: true,
        title: "Intense dark coffee and aged rum",
        content: "The dark chocolate and roasted coffee beans combined with rum make this an absolute beast. Outstanding fragrance."
      }
    ]
  },
  {
    id: 14,
    name: "ZN Jazz Club Reserve",
    subtitle: "The Brooklyn Cellar Melodies",
    inspiration: "Maison Margiela Replica Reserve",
    category: "Cocktails & Smoky Leather",
    family: "woody",
    gender: "For Him",
    price: 295,
    originalPrice: 390,
    rating: 4.92,
    reviewsCount: 198,
    badge: "Artisan Blend",
    concentration: "Eau de Parfum Intense (30% Essence)",
    volume: "100 ml / 3.4 FL.OZ",
    sizes: [
      { size: "50ml Flacon", price: 195 },
      { size: "100ml Signature Bottle", price: 295 },
      { size: "200ml Luxury Decanter", price: 510 }
    ],
    image: imgNoirTobaccoHD,
    gallery: [
      imgNoirTobaccoHD,
      imgAmberWood,
      imgDarkGold,
      imgMatteBlack
    ],
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-liquid-perfume-splashing-slow-motion-41585-large.mp4",
    description: "Transport yourself to a private speakeasy jazz club in Brooklyn. The warmth of saxophone notes, pink pepper cocktails, aged rum liquor, clary sage, tobacco leaf, and bourbon vanilla.",
    story: "Recreating the nostalgic ambiance of leather armchairs, ambient smoke, and cocktails in an underground jazz haven.",
    notes: {
      top: ["Pink Pepper", "Neroli Oil", "Lemon Primofiore"],
      heart: ["Rum Absolute", "Clary Sage", "Java Vetiver"],
      base: ["Tobacco Leaf Absolute", "Bourbon Vanilla Bean", "Styrax"]
    },
    accords: ["Aged Rum", "Tobacco Smoke", "Warm Vanilla", "Pink Pepper"],
    longevity: "14+ Hours",
    sillage: "Intimate & Seductive",
    season: "Autumn & Winter Evenings",
    occasion: "Jazz Lounges, Whiskey Tastings, Cozy Dates",
    perfumer: "Aliénor Massenet",
    reviews: [
      {
        id: "r14-1",
        author: "Miles K.",
        rating: 5,
        date: "2 Weeks ago",
        verified: true,
        title: "Smells like good music and great rum",
        content: "Warm, boozy, and so charismatic. The pink pepper and vanilla notes keep it modern and fresh."
      }
    ]
  },
  {
    id: 15,
    name: "ZN Bleu Étoile",
    subtitle: "The Timeless Blue Diamond",
    inspiration: "Chanel Bleu Parfum Masterwork",
    category: "Woody Aromatic & Incense",
    family: "fresh",
    gender: "For Him",
    price: 335,
    originalPrice: 440,
    rating: 4.95,
    reviewsCount: 310,
    badge: "All-Time Classic",
    concentration: "Extrait de Parfum (35% Essence)",
    volume: "100 ml / 3.4 FL.OZ",
    sizes: [
      { size: "50ml Flacon", price: 215 },
      { size: "100ml Signature Bottle", price: 335 },
      { size: "200ml Luxury Decanter", price: 570 }
    ],
    image: imgBleuEtoileHD,
    gallery: [
      imgBleuEtoileHD,
      imgOceanBlue,
      imgSauvageElixirHD,
      imgSilverMountainHD
    ],
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-perfume-bottle-in-the-smoke-41584-large.mp4",
    description: "The ultimate archetype of elegance. An ode to masculine freedom. Opening with crisp frosted mint and pink grapefruit, followed by aromatic ginger and jasmine, anchored by New Caledonian sandalwood, cedar, and frankincense.",
    story: "Formulated with sustainably harvested New Caledonian sandalwood, offering unmatched creamy woody longevity.",
    notes: {
      top: ["Frosted Pink Grapefruit", "Californian Lemon", "Mint Leaf", "Pink Pepper"],
      heart: ["Ginger Root", "Nutmeg", "Jasmine Sambac", "Iso E Super"],
      base: ["New Caledonian Sandalwood", "Amber Cedar", "Frankincense", "White Musk"]
    },
    accords: ["Citrus Fresh", "Woody Sandalwood", "Smoky Incense", "Fresh Spicy"],
    longevity: "16+ Hours",
    sillage: "Sophisticated & Pervasive",
    season: "All 4 Seasons / Universal Masterpiece",
    occasion: "Everyday Luxury, Weddings, Black Tie, Daily Wear",
    perfumer: "Jacques Polge Inspiration",
    reviews: [
      {
        id: "r15-1",
        author: "Christian Vance",
        rating: 5,
        date: "Yesterday",
        verified: true,
        title: "The purest expression of blue elegance",
        content: "Deep, smooth, and immensely classy. The sandalwood and incense in the base are 10 times higher quality than typical designer scents."
      }
    ]
  }
];

const PERFUME_PALETTES = [
  ['#9bd8e7', '#071a46', '#d8b56a'], ['#ead6b0', '#6e3214', '#e3a84e'],
  ['#e7b2b9', '#3b0714', '#c99762'], ['#d6c8ad', '#24130b', '#c4a167'],
  ['#b8c9db', '#111c38', '#d5a84f'], ['#f0c978', '#5e260d', '#f1d58a'],
  ['#c3b19b', '#24201b', '#c79d62'], ['#e2b177', '#3b180e', '#d8bd7c'],
  ['#c6d3df', '#172846', '#d1a66a'], ['#d88984', '#3a0d18', '#d4a15c'],
  ['#d4b36f', '#28180e', '#f1d38c'], ['#dce9ec', '#233c4c', '#c9d6dc'],
  ['#9b7b67', '#17100d', '#c79b63'], ['#b99b7e', '#26160e', '#d2a05a'],
  ['#9bd8e7', '#061536', '#d9b66c']
];

const createPerfumeImage = (index, variant = 0) => {
  const [background, bottle, label] = PERFUME_PALETTES[index];
  const rotation = [-3, 2, -2, 3, -1][(index + variant) % 5];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${background}"/><stop offset="1" stop-color="#111522"/></linearGradient><linearGradient id="glass" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${bottle}"/><stop offset=".5" stop-color="#05070d"/><stop offset="1" stop-color="${bottle}"/></linearGradient></defs><rect width="800" height="1000" fill="url(#bg)"/><circle cx="650" cy="180" r="210" fill="#fff" opacity=".12"/><ellipse cx="400" cy="850" rx="270" ry="42" fill="#05070d" opacity=".45"/><g transform="rotate(${rotation} 400 540)"><rect x="320" y="190" width="160" height="115" rx="18" fill="#0a0c12"/><rect x="338" y="125" width="124" height="82" rx="14" fill="${label}"/><rect x="235" y="285" width="330" height="540" rx="38" fill="url(#glass)" stroke="${label}" stroke-width="8"/><rect x="275" y="475" width="250" height="165" rx="8" fill="#0b0d13" stroke="${label}" stroke-width="5"/><text x="400" y="535" fill="${label}" font-family="Georgia,serif" font-size="27" text-anchor="middle" letter-spacing="4">ZN PARFUMS</text><text x="400" y="580" fill="#fff" font-family="Arial,sans-serif" font-size="20" text-anchor="middle" letter-spacing="3">EXTRAIT ${String(index + 1).padStart(2, '0')}</text><text x="400" y="615" fill="${label}" font-family="Arial,sans-serif" font-size="12" text-anchor="middle" letter-spacing="2">HAUTE PARFUMERIE</text></g></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

const UNIQUE_PERFUME_IMAGES = PERFUME_PALETTES.map((_, index) => createPerfumeImage(index));

export const PERFUMES = PERFUME_CATALOG;

export const BRAND_INFO = {
  name: "ZN Parfums Privé",
  tagline: "Haute Parfumerie & Pure Rare Extracts",
  established: "1988",
  founder: "Z. N. Laurent",
  headquarters: "Place Vendôme, Paris & Grasse, France",
  curatedBy: "Master Nose Guild of Grasse",
  features: [
    { title: "Pure Rare Extracts", desc: "Up to 40% oil concentration in every Extrait flacon" },
    { title: "Handcrafted in Grasse", desc: "Aged for 6 months in French oak barrels" },
    { title: "Complimentary VIP Delivery", desc: "Worldwide express courier with luxury gift packaging" },
    { title: "Artisan Crystal Flacon", desc: "Weighted magnetic caps and gold foil inlays" }
  ]
};

# Perfume Product Image Generation Prompts

Use these prompts in any AI image tool such as Midjourney, Leonardo AI, DALL·E, or Stable Diffusion.

## Recommended settings
- Aspect ratio: 4:5 or 1:1
- Style: luxury editorial product photography
- Lighting: cinematic warm highlights, soft shadow, premium studio light
- Background: dark luxury studio or premium glass surface
- Quality: ultra detailed, high contrast, realistic glass bottle reflections

## 1) Royal Oud
Prompt:
"Luxury perfume bottle, dark glass bottle with gold cap, rich amber and black background, warm cinematic lighting, premium editorial product shot, realistic reflections, glass bottle macro detail, luxury fragrance brand, ultra detailed, 4k"

Filename suggestion:
`zn_royal_oud_generated.jpg`

## 2) Blossom
Prompt:
"Elegant pink rose perfume bottle, soft floral background, romantic luxury styling, premium glass packaging, gentle sunlight, high detail, realistic product photography, feminine fragrance ad, cinematic shadows, 4k"

Filename suggestion:
`zn_blossom_generated.jpg`

## 3) Ocean Breeze
Prompt:
"Fresh ocean-inspired perfume bottle, cool blue glass, crystal water droplets, luxury marine aesthetic, realistic glass reflections, premium product photography, clean studio backdrop, high detail, 4k"

Filename suggestion:
`zn_ocean_breeze_generated.jpg`

## 4) Amber Spice
Prompt:
"Amber-toned perfume bottle with golden cap, warm spice aura, rich luxury background, cinematic light, real glass textures, premium fragrance product shot, editorial style, realistic shadows, 4k"

Filename suggestion:
`zn_amber_spice_generated.jpg`

## 5) Black Velvet
Prompt:
"Deep black luxury perfume bottle, velvety matte finish, dark premium atmosphere, subtle gold accents, ultra detailed product photography, rich contrast, luxury fragrance branding, realistic shadows, 4k"

Filename suggestion:
`zn_black_velvet_generated.jpg`

## 6) Citrus Edge
Prompt:
"Citrus luxury fragrance bottle, bright green and gold accents, fresh natural energy, premium studio lighting, realistic glass bottle, clean luxury background, product photography, vibrant but elegant, 4k"

Filename suggestion:
`zn_citrus_edge_generated.jpg`

## 7) Woodland
Prompt:
"Luxury woody perfume bottle with forest-inspired mood, rich earthy tones, dark elegant background, natural green accents, premium fragrance product photography, realistic bottle glass, cinematic lighting, ultra detailed, 4k"

Filename suggestion:
`zn_woodland_generated.jpg`

## 8) Velvet Rose
Prompt:
"Velvet rose perfume bottle, rich red and maroon luxury styling, soft romantic lighting, premium fragrance packaging, realistic glass reflections, high detail product shot, editorial cosmetics photography, 4k"

Filename suggestion:
`zn_velvet_rose_generated.jpg`

## 9) Pure Musk
Prompt:
"Minimal luxury musk perfume bottle, silver and white palette, soft cloud background, elegant product shot, premium fragrance design, clean studio lighting, realistic polished bottle, 4k"

Filename suggestion:
`zn_pure_musk_generated.jpg`

## 10) Midnight
Prompt:
"Dark midnight perfume bottle in deep navy tones, moody luxury atmosphere, sleek black cap, premium nightlife aesthetic, realistic glass, cinematic lighting, high detail product shot, fragrance campaign photography, 4k"

Filename suggestion:
`zn_midnight_generated.jpg`

## 11) Regal Gold
Prompt:
"Regal gold perfume bottle, luxury golden glass, warm rich lighting, polished metal cap, premium fragrance ad photography, realistic reflections, dark luxury background, elegant editorial composition, 4k"

Filename suggestion:
`zn_regal_gold_generated.jpg`

## 12) Crystal Rose
Prompt:
"Crystal rose perfume bottle, transparent glass with soft pink glow, premium luxury branding, subtle floral reflections, editorial product photography, elegant studio lighting, realistic shadows, ultra detailed, 4k"

Filename suggestion:
`zn_crystal_rose_generated.jpg`

## Master prompt template
Use this if you want variations:
"Luxury perfume bottle, premium glass packaging, elegant brand label, [color palette], [background mood], realistic reflections, high-end fragrance product photography, cinematic lighting, ultra-detailed, commercial ad look, 4k"

## Best folder for your project
Save all generated images here:
`src/assets/images/generated/`

Then import them in your data file like this:
```js
import imgRoyal from '../assets/images/generated/zn_royal_oud_generated.jpg';
```

Then use them in the perfume data:
```js
image: imgRoyal,
gallery: [imgRoyal, imgAmber, imgWoodland],
```

## Important note
I can help generate the prompt pack and wire these images into your app, but I cannot directly create final copyrighted/brand-locked photo assets inside this environment. For true real-world product photography, use a dedicated AI art generator or a product photography studio workflow.

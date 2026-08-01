# Avenor — Design i razvojni vodič

Ovaj dokument je izvor istine za dalji razvoj, održavanje i personalizaciju Avenor sajta. Sadrži trenutno korišćene vizuelne vrednosti, strukturu komponenti, responsive pravila, mapu sadržaja i bezbedan postupak za buduće izmene.

## 1. Trenutni dizajn

Sajt je luksuzna real-estate prezentacija zasnovana na sledećim principima:

- velike arhitektonske fotografije;
- neutralna, topla paleta;
- snažan kontrast svetlih sekcija i tamnih CTA površina;
- čista sans-serif tipografija;
- veliki, ali nenametljivi naslovi;
- mnogo kontrolisanog praznog prostora;
- tanke linije, mali radijusi i bez dekorativnih senki;
- jasna hijerarhija: fotografija → naslov → kratko objašnjenje → akcija.

Vizuelni karakter treba da ostane miran, arhitektonski i editorial. Ne uvoditi jarke akcente, velike gradijente, debele senke ili previše zaobljene kartice bez promene celog identiteta.

## 2. Tehnička struktura

Projekat koristi:

- Next.js 16 App Router;
- React 19;
- TypeScript;
- Tailwind CSS 4 samo kao dostupan globalni sistem, dok je trenutni dizajn pretežno pisan kroz CSS Modules;
- `next/image` za lokalne fotografije;
- `next/font` za lokalno serviranje Google fonta Inter.

Glavne datoteke:

```text
app/
├── globals.css              Globalni tokeni i zajedničke klase
├── layout.tsx               Font, metadata i root layout
└── page.tsx                 Redosled svih sekcija stranice

src/
├── components/              React komponente i pripadajući CSS Modules
└── types/property.ts        Tipovi podataka za facts, galeriju i story kartice

public/images/               Sve fotografije koje sajt trenutno koristi
scripts/download-assets.mjs  Skripta za ponovno preuzimanje placeholder slika
```

## 3. Redosled stranice

Redosled se kontroliše u `app/page.tsx`:

1. `HeaderHero`
2. `PropertyOverview`
3. `PropertyFeatures`
4. `PropertyGallery`
5. `Specifications`
6. `StoryCarousel`
7. `InquirySection`
8. `SiteFooter`

Za promenu redosleda sekcija dovoljno je promeniti redosled komponenti u `app/page.tsx`. Ne premeštati stilove iz CSS Modules u `page.tsx`.

## 4. Globalni dizajn tokeni

Tokeni se nalaze u `app/globals.css` unutar `:root` selektora.

| Token | Vrednost | Namena |
|---|---:|---|
| `--background` | `#f1f1f0` | Osnovna pozadina stranice |
| `--foreground` | `#171717` | Primarna boja teksta |
| `--paper` | `#f4f4f2` | Površina glavnog page shell-a |
| `--white` | `#ffffff` | Kartice, svetla dugmad i kontrastni elementi |
| `--charcoal` | `#242424` | Tamne sekcije, badge i CTA površine |
| `--muted` | `#686863` | Sekundarni tekst |
| `--line` | `#d8d8d4` | Tanke razdelne linije i borderi |
| `--radius` | `5px` | Osnovni radijus |
| `--page-gutter` | `24px` | Desktop unutrašnja margina |
| `--content-width` | `1320px` | Maksimalna širina standardnog sadržaja |

### Pravila za boje

- Primarni tekst koristiti u rasponu `#171717`–`#242424`.
- Sekundarni tekst koristiti između `#686863` i `#9f9f9c`, u zavisnosti od pozadine.
- Tanke linije ostaviti niskog kontrasta.
- Bela se koristi za facts kartice, svetle CTA elemente i tekst na tamnim površinama.
- Novi brand akcenat treba prvo dodati kao CSS promenljivu, na primer `--accent`, umesto ponavljanja hex vrednosti po komponentama.

## 5. Tipografija

### Font

Primarni font je `Inter`, definisan u `app/layout.tsx`:

```tsx
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
```

Globalna CSS referenca je `var(--font-inter)`.

Za promenu fonta:

1. promeniti import i konfiguraciju u `app/layout.tsx`;
2. zadržati istu CSS promenljivu ili ažurirati `--font-sans` u `app/globals.css`;
3. proveriti prelom velikog wordmark-a u footeru;
4. proveriti naslove sa negativnim `letter-spacing` vrednostima.

### Trenutna skala

| Element | Veličina |
|---|---:|
| Body | `16px` |
| Eyebrow/badge | `12px` |
| Glavni sekcijski naslov | `clamp(36px, 3.2vw, 48px)` |
| Property naslov | `clamp(34px, 3.3vw, 48px)` |
| Property opis | `clamp(14px, 1.08vw, 16px)` |
| Cena | `24px` |
| CTA tekst | `13px`–`14px` |
| Facts label | `12px` |
| Facts vrednost | `14px` |
| Standardni opis sekcije | `15px` |
| Story naslov kartice | `19px` |
| Story opis | `12px` |
| Footer naslov | `29px` |
| Footer linkovi | `12px`–`13px` |

### Tipografska pravila

- Veliki naslovi koriste weight `400`.
- Naslovi koriste blago negativan `letter-spacing`, obično između `-0.025em` i `-0.045em`.
- Body tekst koristi line-height između `1.5` i `1.6`.
- Ne spuštati sadržajni tekst ispod `12px`.
- Dugmad i forme ne spuštati ispod `13px` na desktopu.
- Ne koristiti globalni `zoom` ili `transform: scale()` za podešavanje veličine sajta.

## 6. Layout sistem

### Page shell

Glavni kontejner je `.page-shell` u `app/globals.css`:

```css
.page-shell {
  width: min(calc(100% - 24px), 1600px);
  margin: 12px auto;
  padding: 12px;
}
```

Ovo pravi diskretan crni okvir oko svetle stranice i sprečava rastezanje sadržaja na vrlo širokim monitorima.

### Standardna širina

- Maksimalna širina stranice: `1600px`.
- Standardna širina sadržaja: `1320px`.
- Facts grid i galerija: `1200px`.
- Tekstualni pasusi imaju dodatno ograničenu širinu zbog čitljivosti.

### Razmaci

Korišćeni ritam je zasnovan na približnim koracima:

```text
8 / 12 / 14 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 112 / 128 px
```

Prilikom dodavanja novih sekcija preferirati vrednosti iz ovog niza. Ne koristiti mnogo slučajnih vrednosti koje nisu povezane sa postojećim ritmom.

## 7. Responsive sistem

Glavni breakpoint-i:

| Breakpoint | Namena |
|---:|---|
| `820px` | Facts prelazi na 2 kolone; specifications prelazi iz split u stacked layout |
| `767px` | Mobilni page shell, mobilni hero i skrivena desktop navigacija |
| `760px` | Story kartice postaju horizontalni carousel |
| `720px` | Property overview i footer prelaze na stacked layout |
| `639px` | Galerija prelazi na jednu kolonu |
| `600px` | Mobilna inquiry forma |
| `520px` | Facts prelazi na jednu kolonu i specifications dobija mobilne mere |
| `480px` | CTA dugmad i footer dobijaju uži mobilni raspored |

### Desktop

- Nema globalnog umanjivanja ili browser-like zoom-a.
- Sadržaj se prirodno širi do maksimalnih širina.
- Hero raste fluidno do `720px` visine.
- Galerija ostaje u dve kolone.
- Story sekcija koristi četiri kolone.

### Mobilni

- Navigacioni linkovi su skriveni; ostaju logo i Contact Us dugme.
- Hero ostaje `520px` visok.
- Overview i CTA se slažu vertikalno kada nema dovoljno širine.
- Facts kartice su jedna ispod druge.
- Galerija je jedna kolona.
- Specifications paneli se slažu vertikalno.
- Story kartice postaju horizontalni scroll/snap carousel.
- Footer se slaže u više redova i wordmark se proporcionalno smanjuje.

## 8. Komponente i personalizacija

### HeaderHero

Datoteke:

- `src/components/HeaderHero.tsx`
- `src/components/HeaderHero.module.css`

Sadrži:

- logo;
- navigacione linkove;
- Contact Us CTA;
- tri hero slajda;
- progress indikatore;
- previous/next kontrole.

Personalizacija:

- promeniti `slides` niz za nove hero fotografije;
- promeniti `navigation` niz za nove label-e i anchor linkove;
- za novi logo prilagoditi `AvenorMark` u `icons.tsx` ili zameniti logo komponentu;
- visina hero sekcije je `clamp(520px, 48vw, 720px)`.

Komponenta mora ostati Client Component zbog stanja slidera.

### PropertyOverview

Datoteke:

- `src/components/PropertyOverview.tsx`
- `src/components/PropertyOverview.module.css`

Sadrži naziv nekretnine, opis, cenu i dva CTA dugmeta.

Personalizacija se trenutno radi direktno u JSX-u. Ako bude više nekretnina, podatke prebaciti u typed object i prosleđivati kroz props.

### PropertyFeatures

Datoteke:

- `src/components/PropertyFeatures.tsx`
- `src/components/PropertyFeatures.module.css`

Podaci su u `facts` nizu:

```ts
{ label: "Bedrooms", value: "4 Bedrooms" }
```

Za dodavanje ili uklanjanje kartice promeniti samo niz. Grid automatski raspoređuje sadržaj.

### PropertyGallery

Datoteke:

- `src/components/PropertyGallery.tsx`
- `src/components/PropertyGallery.module.css`

Svaka stavka koristi:

```ts
{
  src: "/images/living-room.jpg",
  alt: "Opis fotografije",
  label: "Living Room",
  number: "01"
}
```

Obavezno ažurirati `alt` tekst kada se promeni fotografija.

### Specifications

Datoteke:

- `src/components/Specifications.tsx`
- `src/components/Specifications.module.css`

Leva tabela koristi `details` niz. Desna strana koristi tri inline SVG tlocrta:

- `GroundFloor`;
- `FirstFloor`;
- `SecondFloor`.

Ako se dobiju stvarni tlocrti, preporuka je:

1. očistiti ih kao SVG;
2. sačuvati linije bez pozadinskog pravougaonika;
3. koristiti zajedničku boju stroke-a;
4. zadržati postojeći trokolonski layout;
5. obezbediti čitljive nazive spratova.

### StoryCarousel

Datoteke:

- `src/components/StoryCarousel.tsx`
- `src/components/StoryCarousel.module.css`

Podaci su u `stories` nizu. Svaka kartica ima:

- fotografiju;
- eyebrow;
- naslov;
- opis.

Komponenta mora ostati Client Component zbog scroll dugmadi i `useRef` logike.

### InquirySection

Datoteke:

- `src/components/InquirySection.tsx`
- `src/components/InquirySection.module.css`

Forma je trenutno demo forma:

- sprečava navigaciju;
- menja lokalno stanje nakon submit-a;
- nema backend, email servis ili bazu.

Za produkciju povezati submit sa Server Action-om ili API route-om. Dodati validaciju, spam zaštitu i jasnu error poruku, ali zadržati postojeću formu kao Client Component.

### SiteFooter

Datoteke:

- `src/components/SiteFooter.tsx`
- `src/components/SiteFooter.module.css`

Linkovi se menjaju kroz `columns` niz. Veliki wordmark koristi `AvenorMark` i tekst `avenor`.

Kada se menja ime brenda, proveriti:

- širinu wordmark-a na 1440px;
- prelom na 390px;
- `letter-spacing` i maksimalnu veličinu;
- footer legal red.

## 9. Fotografije i asset mapa

Sve fotografije se nalaze u `public/images/`.

| Fajl | Trenutna upotreba |
|---|---|
| `hero.jpg` | Glavni hero slajd |
| `landscape.jpg` | Hero slider i inquiry background |
| `garden.jpg` | Hero slider, galerija i story kartica |
| `living-room.jpg` | Galerija i story kartica |
| `kitchen.jpg` | Galerija |
| `bathroom.jpg` | Galerija |
| `bedroom.jpg` | Galerija i story kartica |
| `office.jpg` | Galerija i story kartica |
| `lounge.jpg` | Rezervni asset |
| `detail.jpg` | Rezervni asset |

### Zamena fotografija

Najbrži postupak je da novi fajl dobije isto ime kao postojeći. Tada JSX nije potrebno menjati.

Preporučeni formati:

- JPG ili WebP;
- najmanje 2000 px širine za hero;
- najmanje 1400 px širine za galeriju;
- kvalitet 80–88;
- landscape odnos stranica za hero i galeriju;
- bez već ugrađenog teksta ili watermark-a.

Ako se promeni ime fajla, ažurirati odgovarajući `src` u komponenti.

## 10. Ikonice i logo

Sve trenutne SVG ikonice su u `src/components/icons.tsx`:

- `ArrowRightIcon`;
- `ArrowLeftIcon`;
- `ChevronDownIcon`;
- `AvenorMark`.

Ikonice koriste `currentColor`, pa boju nasleđuju iz roditeljskog elementa. Ovo ponašanje treba zadržati za nove ikonice.

Za zamenu logotipa preporučuje se SVG komponenta sa čistim `viewBox`-om, bez fiksne fill boje.

## 11. TypeScript modeli

Tipovi su u `src/types/property.ts`:

- `PropertyFact`;
- `GalleryItem`;
- `StoryCardData`.

Novi strukturirani sadržaj treba prvo definisati u ovom fajlu, pa tek onda koristiti u komponentama. Time se sprečavaju nedosledni nazivi polja između sekcija.

Ako projekat kasnije dobije CMS, ovi tipovi treba da postanu ugovor između CMS podataka i UI komponenti.

## 12. Interakcije

Trenutno postoje:

- hero slider na klik;
- opacity tranzicija između hero fotografija;
- hover stanje navigacije i CTA dugmadi;
- hover scale na gallery i story fotografijama;
- horizontalni story carousel na mobilnom;
- inquiry submit confirmation;
- smooth anchor scroll;
- `prefers-reduced-motion` zaštita za hero i galeriju.

Prilikom dodavanja animacija:

- koristiti trajanje između 180 ms i 500 ms;
- favorizovati opacity i transform;
- ne animirati layout svojstva ako nije neophodno;
- dodati `prefers-reduced-motion` fallback;
- izbegavati agresivan parallax i autoplay koji ometa čitanje.

## 13. Metadata i SEO sadržaj

Metadata se nalazi u `app/layout.tsx`:

```ts
export const metadata = {
  title: "Avenor Row House | Bath",
  description: "A characterful Georgian townhouse in the heart of Bath.",
};
```

Prilikom promene projekta obavezno ažurirati:

- title;
- description;
- favicon;
- kasnije Open Graph sliku;
- jezik dokumenta ako sadržaj više nije na engleskom.

## 14. Personalizacija brenda

Za potpunu promenu identiteta i sadržaja pratiti ovaj redosled:

1. Promeniti metadata i naziv brenda u `app/layout.tsx`.
2. Promeniti logo mark i footer wordmark.
3. Promeniti globalne boje u `app/globals.css`.
4. Promeniti hero slike i navigaciju.
5. Promeniti property naziv, opis, cenu i CTA tekst.
6. Promeniti facts podatke.
7. Zameniti gallery fotografije i alt tekstove.
8. Uneti stvarne specifikacije i tlocrte.
9. Promeniti story sadržaj.
10. Povezati inquiry formu sa stvarnim backend-om.
11. Ažurirati footer linkove, pravne stranice i kontakt podatke.
12. Ponoviti desktop i mobilni QA.

## 15. Dodavanje nove sekcije

Nova sekcija treba da dobije:

```text
src/components/NewSection.tsx
src/components/NewSection.module.css
```

Preporučeni obrazac:

```tsx
import styles from "./NewSection.module.css";

export function NewSection() {
  return (
    <section className={styles.section} aria-labelledby="new-section-title">
      <span className="eyebrow">Eyebrow</span>
      <h2 className="section-title" id="new-section-title">
        Section title
      </h2>
    </section>
  );
}
```

Zatim importovati komponentu u `app/page.tsx`.

## 16. Server i Client Components

Komponente su Server Components po default-u.

`"use client"` trenutno koriste samo:

- `HeaderHero` — zbog slider state-a;
- `StoryCarousel` — zbog `useRef` i scroll kontrola;
- `InquirySection` — zbog submit state-a.

Nove komponente ne označavati kao Client Components ako nemaju state, event handlere ili browser API. Time se smanjuje količina JavaScript-a poslata korisniku.

## 17. QA pre isporuke

Obavezne komande:

```bash
npx tsc --noEmit
npm run lint
npm run build
```

Vizuelno proveriti najmanje:

- 1440 × 900 — standardni laptop/desktop;
- 1280 × 800 — manji laptop;
- 768 × 1024 — tablet;
- 390 × 844 — mobilni.

Checklist:

- nema horizontalnog scroll-a;
- sav tekst je čitljiv bez browser zoom-a;
- fotografije nisu rastegnute;
- CTA tekst ne ispada iz dugmeta;
- footer wordmark ne izlazi iz kontejnera;
- specifications vrednosti ostaju poravnate;
- svi linkovi vode na postojeći anchor ili rutu;
- forma ima success i error stanje kada dobije backend;
- sve slike imaju odgovarajući `alt` tekst;
- build, TypeScript i lint prolaze.

## 18. Pravila koja treba sačuvati

- Ne koristiti globalni CSS `zoom` za prilagođavanje različitim ekranima.
- Ne vraćati body tekst na 8–10 px.
- Ne ograničavati desktop galeriju ili facts grid na mobilnu širinu.
- Ne dodavati remote slike direktno u komponentama; prvo ih sačuvati lokalno.
- Ne dodavati veliki UI framework samo zbog jedne komponente.
- Ne mešati sadržaj, kompleksnu interakciju i globalne stilove u `app/page.tsx`.
- Ne uvoditi Client Component granicu bez potrebe.
- Ne menjati sve radijuse u velike pill oblike; trenutni identitet koristi male radijuse.
- Ne koristiti slike sa tekstom kao zamenu za pravi HTML sadržaj.

## 19. Preporučeni sledeći koraci

Kada stignu pravi materijali, prioritet je:

1. zamena svih placeholder fotografija;
2. unos stvarnog naziva, lokacije, cene i property facts;
3. ubacivanje pravih tlocrta;
4. povezivanje inquiry forme;
5. dodavanje realnih ruta za navigaciju i footer;
6. dodavanje favicon i Open Graph asseta;
7. finalni content i accessibility QA.

Ovaj dokument ažurirati svaki put kada se promene globalni tokeni, breakpoint-i, struktura sekcija ili javni API komponenti.

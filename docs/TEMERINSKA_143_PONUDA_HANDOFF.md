# Temerinska 143 — ponuda i obrada slika

Poslednje ažuriranje: 29. avgust 2026.

Ovaj dokument je radna primopredaja za nastavak rada na stranici ponude. Adresa projekta je **Temerinska 143**; prethodna oznaka Temerinska 141 više se ne koristi.

## Šta je urađeno

- Napravljena je stranica `/ponuda` sa karticom lokacije i renderom zgrade.
- Napravljena je projektna stranica `/ponuda/temerinska-143` sa stanovima grupisanim po strukturi.
- Napravljene su pojedinačne stranice stanova na ruti `/ponuda/temerinska-143/[stan]`.
- Kartice prikazuju 3D render, punu kvadraturu, sprat i indikator dostupnosti.
- Svi stanovi su trenutno označeni kao dostupni (`status: "available"`).
- Aktivni stanovi su: 2, 6, 8, 18, 19, 20 i 21.
- Podaci i aktivne putanje slika nalaze se u `src/data/site.ts`.
- Komponente ponude nalaze se u `src/components/OfferPages.tsx`, a stilovi u `src/components/OfferPages.module.css`.

## Transparentne slike

Za svaki od sedam stanova postoje tri aktivne transparentne WebP slike:

| Stan | 3D render | Tlocrt | Pozicija na etaži |
| --- | --- | --- | --- |
| 2 | `stan-2-3d-transparent-v5.webp` | `stan-2-floor-transparent-v5.webp` | `stan-2-position-transparent-v5.webp` |
| 6 | `stan-6-3d-transparent-v5.webp` | `stan-6-floor-transparent-v5.webp` | `stan-6-position-transparent-v5.webp` |
| 8 | `stan-8-3d-transparent-v5.webp` | `stan-8-floor-transparent-v5.webp` | `stan-8-position-transparent-v5.webp` |
| 18 | `stan-18-3d-transparent-v5.webp` | `stan-18-floor-transparent-v5.webp` | `stan-18-position-transparent-v5.webp` |
| 19 | `stan-19-3d-transparent-v5.webp` | `stan-19-floor-transparent-v5.webp` | `stan-19-position-transparent-v5.webp` |
| 20 | `stan-20-3d-transparent-v5.webp` | `stan-20-floor-transparent-v5.webp` | `stan-20-position-transparent-v5.webp` |
| 21 | `stan-21-3d-transparent-v5.webp` | `stan-21-floor-transparent-v5.webp` | `stan-21-position-transparent-v5.webp` |

Sve se nalaze u `public/images/novak/temerinska-143/`. Provereno je da svih 21 fajl ima pravi alpha kanal sa vrednostima od 0 do 255.

Krem boja **nije upisana u slike**. Dolazi isključivo iz CSS-a (`#f6f2eb`) na elementima `.unitVisual`, `.unitHeroVisual` i `.planVisual`. Zbog toga se boja pozadine može menjati na jednom mestu bez nove obrade slika.

Originalni materijal je očuvan. Kod izvora sa stvarno utisnutom šahovnicom korišćena je maska zasnovana na obrascu šahovnice i konturi stana, bez ponovnog generisanja sadržaja rendera. Obrada je ponovljiva skriptom:

```bash
node scripts/make-offer-assets-transparent.mjs
```

Stari fajlovi sa nazivima `cream-v3` i `cream-v4` nisu aktivni i ne treba ih ponovo povezivati.

## Dve slike koje treba zameniti

Čekaju se još dve ispravne slike od klijenta. Trenutni 3D renderi stanova 19 i 20 su binarno identični, jer je takav materijal bio dostavljen. Njihov SHA-256 je isti:

```text
5036e8eece32fc4d8d869063b47f2896f6ede14c13501a065270ff13227119ae
```

Zato su stanovi 19 i 20 najverovatniji kandidati za zamenu, ali pri prijemu novih slika treba potvrditi kom stanu pripada svaki fajl.

## Postupak kada stignu nove slike

1. Sačuvati originalne fajlove koje klijent pošalje, bez prepisivanja postojećeg izvornog materijala.
2. Potvrditi vezu između slike i broja stana.
3. Ukloniti samo pozadinu; ne menjati perspektivu, raspored, nameštaj, boje ili proporcije rendera.
4. Izvesti lossless WebP sa pravim alpha kanalom i novom verzijom naziva, na primer `stan-19-3d-transparent-v6.webp`. Nova verzija sprečava da pregledač prikaže staru sliku iz keša.
5. U `src/data/site.ts` promeniti samo odgovarajući `visual.src`.
6. Proveriti sliku na kontrastnoj i na CSS krem pozadini, posebno bele zidove i tanke ivice.
7. Pokrenuti završne provere:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Poslednja verifikacija

Na dan ovog zapisa uspešno su prošli ESLint, TypeScript provera i produkcijski Next.js build. Statički su generisane stranica ponude, stranica projekta i svih sedam stranica stanova.

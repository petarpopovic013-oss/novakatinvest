# Novak Invest Website Redesign — PRD i Scope of Work

**Verzija:** 1.0  
**Status:** Odobreni pravac za implementaciju  
**Datum:** 31. jul 2026.  
**Jezik proizvoda:** srpski, latinica  
**Projekat:** redizajn sajta `novakinvest.rs`

---

## 1. Sažetak proizvoda

Novak Invest je investitor iz Novog Sada koji se bavi razvojem i izgradnjom stambenih i stambeno-poslovnih objekata. Novi sajt treba da zadrži premium, arhitektonski dizajn postojećeg prototipa, ali da ga pretvori u funkcionalan prodajni kanal za aktivne projekte i stanove.

Primarna svrha sajta nije samo predstavljanje kompanije. Posetilac treba da:

1. brzo pronađe aktuelnu ponudu;
2. izabere projekat;
3. dođe do odgovarajuće stambene jedinice;
4. vidi osnovne podatke i status dostupnosti;
5. kontaktira centralnu prodaju telefonom, emailom ili formom.

Primarna publika su kupci koji traže stan za život. Komunikacija zato stavlja naglasak na kvalitet doma, funkcionalnost, lokaciju, sigurnost kupovine i direktan odnos sa investitorom.

## 2. Izvorni materijali i postojeće stanje

### 2.1. Vizuelna osnova

Postojeći Next.js prototip i `DESIGN.md` ostaju osnova za:

- layout i vizuelni ritam;
- tipografsku hijerarhiju;
- neutralnu paletu;
- velike arhitektonske fotografije;
- tamne CTA površine;
- facts kartice;
- galerije;
- specifications prikaz;
- inquiry sekciju;
- veliki footer wordmark.

Postojeći Avenor sadržaj, logo i britanski property podaci nemaju produkcijsku vrednost i moraju biti zamenjeni Novak Invest sadržajem.

### 2.2. Privremeni sadržajni izvor

Dok ne stignu potvrđeni materijali, postojeći sajt se koristi kao privremeni izvor podataka:

- [Početna](https://novakinvest.rs/)
- [O nama](https://novakinvest.rs/o-nama/)
- [Projekti](https://novakinvest.rs/projekti/)
- [Prodaja stanova](https://novakinvest.rs/prodaja-stanova/)
- [Temerinska 141](https://novakinvest.rs/temerinska-projekat/)

Svi preuzeti tekstovi, statusi, rokovi, brojke i kontakt podaci moraju biti označeni kao privremeni do finalne potvrde Novak Invest tima.

### 2.3. Trenutno poznati projekti za audit

- Atrium Residence
- Gundulićeva 33
- Sremska Kamenica Z.J.25
- Petrovaradin
- Temerinska 141

Pre produkcije svaki projekat mora dobiti potvrđen status:

- aktivna ponuda;
- budući projekat;
- završen projekat/reference;
- arhiviran/ne prikazuje se.

## 3. Problem koji rešavamo

Aktuelni sajt ima relevantan sadržaj, ali korisnički put do konkretnog stana i prodajnog kontakta nije dovoljno jasan i dosledan. Informacije su raspoređene kroz projekte, tipove stanova i pojedinačne stranice bez jedinstvenog prodajnog sistema.

Redizajn treba da reši:

- spor dolazak do aktuelne ponude;
- neujednačenu prezentaciju projekata i stanova;
- nedovoljno vidljive kontakt akcije;
- ponavljanje sadržaja;
- slabu vizuelnu hijerarhiju;
- teško održavanje statusa jedinica;
- nedostatak standardizovanih podataka;
- nejasnu razliku između aktivnih projekata i završenih referenci.

## 4. Ciljevi

### 4.1. Primarni ciljevi

- Omogućiti pristup Ponudi jednim klikom iz glavne navigacije.
- Omogućiti dolazak do konkretnog stana za najviše tri koraka.
- Voditi korisnika ka centralnoj prodaji sa svake prodajne stranice.
- Predstaviti aktivne projekte dosledno i premium.
- Prikazati status svake stambene jedinice bez javne cene.
- Izgraditi poverenje kroz iskustvo, standard gradnje i završene projekte.
- Obezbediti brz i čitljiv mobilni prikaz.
- Omogućiti ručno održavanje ponude kroz centralizovane TypeScript podatke.

### 4.2. Sekundarni ciljevi

- Poboljšati organsku vidljivost projekata i stanova.
- Smanjiti broj nekvalifikovanih pitanja prikazom osnovnih podataka.
- Pripremiti arhitekturu za budući CMS ili bazu bez redizajna interfejsa.
- Obezbediti dosledan materijal za prodajni tim i deljenje linkova.

## 5. Non-goals za v1

Prva verzija ne uključuje:

- CMS ili admin panel;
- bazu podataka za stanove;
- CRM integraciju;
- čuvanje kontakt upita u bazi;
- korisničke naloge;
- rezervaciju stana online;
- online plaćanje;
- javni prikaz cene;
- napredno filtriranje ili pretragu;
- višejezičnost;
- srpsku ćirilicu;
- GA4;
- Meta Pixel ili Google Ads tracking;
- cookie banner, osim ako se naknadno uvede servis koji zahteva saglasnost;
- automatsku sinhronizaciju sa tabelom ili eksternim inventory sistemom;
- obavezno preuzimanje PDF kataloga;
- obavezan PDF za svaku jedinicu.

## 6. Publika

### 6.1. Primarna persona — kupac doma

Osoba ili porodica koja traži stan u Novom Sadu za sopstveni život.

Potrebe:

- pouzdan investitor;
- jasna lokacija;
- odgovarajuća struktura i kvadratura;
- aktuelna dostupnost;
- kvalitet gradnje;
- tlocrt;
- brz razgovor sa prodajom;
- sigurnost i transparentan proces kupovine.

### 6.2. Sekundarna persona — investicioni kupac

Kupac koji razmatra stan kao dugoročnu investiciju. Sajt mu pruža iste podatke, ali investicioni prinos i tržišne projekcije nisu primarna komunikaciona tema v1.

### 6.3. Interni korisnik — prodaja

Član Novak Invest tima ili developer koji ručno ažurira:

- status jedinice;
- podatke projekta;
- galerije;
- završene reference;
- kontakt podatke;
- opcione tlocrte i kataloge.

## 7. Principi korisničkog iskustva

- **Ponuda pre korporativne priče:** aktivni projekti dolaze odmah nakon hero sekcije.
- **Jedan jasan sledeći korak:** svaki ekran ima dominantan CTA.
- **Direktan kontakt:** telefon i Kontakt su stalno dostupni.
- **Bez lažne transparentnosti:** cena se ne prikazuje ako nije deo prodajne politike.
- **Bez praznih obećanja:** tlocrt i katalog se prikazuju samo kada fajl postoji.
- **Progresivno otkrivanje:** korisnik prvo bira projekat, zatim jedinicu, pa kontakt.
- **Mobilno prvo za lead:** poziv i forma moraju biti lako dostupni jednom rukom.
- **Kratka forma:** traži se samo ono što je potrebno da prodaja odgovori.
- **Dosledan status:** dostupnost je ista na listi i detalju jedinice.

## 8. Informaciona arhitektura

### 8.1. Glavna navigacija

Glavni meni sadrži tačno:

- O Nama
- Ponuda
- Referenca
- Kontakt

Logo Novak Invest vodi na početnu stranu.

Desktop header sadrži i istaknuto dugme `Kontaktirajte prodaju`.

Mobilni header sadrži:

- logo;
- menu kontrolu;
- vidljivu prodajnu akciju ili sticky action bar na prodajnim stranicama.

### 8.2. Sitemap

```text
/
├── /o-nama
├── /ponuda
│   └── /ponuda/[projekat]
│       └── /ponuda/[projekat]/[stan]
├── /reference
│   └── /reference/[projekat]
└── /kontakt
```

### 8.3. URL pravila

- URL slug koristi mala slova i crtice.
- Dijakritika se uklanja iz slug-a.
- Nazivi projekta ostaju u originalnom obliku u UI-ju.
- Primer: `Gundulićeva 33` → `/ponuda/gunduliceva-33`.
- Jedinica koristi stabilan slug nezavisan od buduće promene marketing naziva.
- Primer: `/ponuda/atrium-residence/lamela-b-stan-7`.

## 9. Primarni korisnički tokovi

### 9.1. Brzi dolazak do ponude

```text
Početna → Ponuda → Aktivni projekat → Jedinica → Kontakt
```

Acceptance kriterijum:

- Ponuda je jedan klik od početne.
- Konkretnu jedinicu moguće je otvoriti u najviše tri navigaciona koraka.

### 9.2. Kontakt iz projekta

```text
Projekat → Kontaktirajte prodaju → Kontakt forma sa kontekstom projekta
```

### 9.3. Kontakt iz jedinice

```text
Stan → Pozovite / Pošaljite upit → Kontakt forma sa kontekstom projekta i stana
```

### 9.4. Izgradnja poverenja

```text
Početna → O Nama ili Referenca → Završeni projekat → Kontakt
```

## 10. Globalni elementi

### 10.1. Header

Zahtevi:

- Novak Invest logo;
- četiri dogovorene stavke menija;
- desktop CTA `Kontaktirajte prodaju`;
- mobilni meni;
- jasna aktivna stavka;
- kontrastna varijanta iznad fotografije;
- svetla/tamna varijanta na unutrašnjim stranicama;
- pristupačna tastaturna navigacija;
- zatvaranje mobilnog menija nakon izbora rute.

### 10.2. Footer

Footer sadrži:

- Novak Invest wordmark;
- centralni telefon;
- `office@novakinvest.rs`;
- Radnička 49, Novi Sad;
- linkove ka glavnim stranicama;
- linkove ka aktivnim projektima;
- društvene mreže kada se dostave URL-ovi;
- Privacy Policy;
- Terms/pravne informacije ako ih firma dostavi;
- copyright sa automatskom tekućom godinom.

### 10.3. Prodajni CTA sistem

Standardne label-e:

- `Pogledajte ponudu`
- `Pogledajte projekat`
- `Pogledajte stan`
- `Kontaktirajte prodaju`
- `Pozovite prodaju`
- `Pošaljite upit`
- `Cena na upit`

Ne koristiti više različitih labela za istu akciju.

### 10.4. Mobilni action bar

Na stranicama projekta i stana prikazati sticky bar sa dve akcije:

- `Pozovite`
- `Pošaljite upit`

Bar ne sme prekriti sadržaj, footer ili sistemske safe-area zone.

## 11. Zahtevi po stranici

## 11.1. Početna `/`

### Cilj

Odmah predstaviti Novak Invest i usmeriti korisnika ka aktuelnoj ponudi.

### Sekcije

1. **Hero aktivnih projekata**
   - veliki arhitektonski vizual;
   - Novak Invest header;
   - naziv prioritetnog projekta;
   - kratka poruka;
   - primarni CTA `Pogledajte ponudu`;
   - sekundarni CTA `Kontaktirajte prodaju`;
   - slider samo ako postoje najmanje dva kvalitetna hero seta.

2. **Aktuelna ponuda**
   - prikaz svih aktivnih projekata;
   - fotografija, naziv, lokacija, status izgradnje i kratak opis;
   - broj dostupnih jedinica samo ako je podatak pouzdano održavan;
   - CTA ka detalju projekta.

3. **Zašto Novak Invest**
   - ključne vrednosti;
   - iskustvo;
   - kvalitet i dugotrajnost;
   - lokacija i funkcionalnost;
   - direktna kupovina od investitora.

4. **Standard gradnje**
   - editorial prikaz materijala i sistema;
   - keramika;
   - podovi;
   - unutrašnja stolarija;
   - fasadna stolarija;
   - druge potvrđene specifikacije.

5. **Reference preview**
   - odabrani završeni projekti;
   - CTA `Pogledajte sve reference`.

6. **Centralni kontakt CTA**
   - kratka prodajna poruka;
   - telefon;
   - email;
   - link ka Kontakt stranici.

7. **Footer**

### Acceptance kriterijumi

- Ponuda je vidljiva odmah nakon hero sekcije.
- Primarni CTA je vidljiv bez skrolovanja na standardnom laptopu.
- Na mobilnom postoji jasan put do telefonskog poziva.

## 11.2. O Nama `/o-nama`

### Cilj

Izgraditi poverenje kroz iskustvo i jasan proces rada.

### Sekcije

1. Uvodni hero sa kratkom pozicionirajućom porukom.
2. Profil kompanije.
3. Ključne brojke, samo potvrđeni podaci.
4. Vrednosti:
   - kvalitet i dugotrajnost;
   - funkcionalno projektovanje;
   - odgovoran izbor lokacije;
   - odnos sa kupcima;
   - pouzdanost rokova, samo ako se može dokazati.
5. Proces:
   - razvoj lokacije;
   - projektovanje;
   - izbor materijala;
   - izgradnja i kontrola;
   - prodaja;
   - primopredaja.
6. Partneri/izvođači, ako se dostave odobreni podaci.
7. Reference preview.
8. Kontakt CTA.

### Content pravilo

Ne koristiti generičke tvrdnje poput „najbolji kvalitet“ bez konkretnog dokaza, materijala ili procesa.

## 11.3. Ponuda `/ponuda`

### Cilj

Prikazati sve aktivne projekte bez filtera i bez ometanja korisnika.

### Sekcije

1. Kratak uvod.
2. Lista aktivnih projekata.
3. Za svaki projekat:
   - hero/cover fotografija;
   - naziv;
   - lokacija;
   - status projekta;
   - kratka poruka;
   - raspoložive strukture;
   - CTA ka projektu.
4. Direktni kontakt CTA.

### Pravila

- Nema pretrage i filtera u v1.
- Završeni projekti ne prikazuju se u Ponudi.
- Budući projekti mogu imati oznaku `U pripremi`, ali ne smeju izgledati kao dostupna prodaja ako jedinice nisu objavljene.

## 11.4. Projekat `/ponuda/[projekat]`

### Cilj

Objasniti vrednost projekta i omogućiti brz izbor jedinice.

### Sekcije

1. Hero sa nazivom, lokacijom, statusom i prodajnim CTA-om.
2. Sažetak projekta.
3. Ključne brojke.
4. Lokacija i važne udaljenosti.
5. Galerija/renderi.
6. Standard gradnje i materijali.
7. Pogodnosti projekta.
8. Tok/rok izgradnje, ako je potvrđen.
9. Ponuda stanova grupisana po strukturi, lameli ili spratu.
10. Opcioni PDF katalog.
11. Centralna kontakt sekcija.

### Lista jedinica

Svaka jedinica prikazuje:

- oznaku stana;
- lamelu/objekat;
- sprat;
- strukturu;
- kvadraturu;
- status;
- CTA `Pogledajte stan`;
- `Cena na upit` bez numeričke cene.

### Pravila grupisanja

- Nema interaktivnih filtera.
- Primarno grupisanje se bira po projektu.
- Default je grupisanje po strukturi, zatim po lameli/spratu.
- Grupe bez jedinica se ne prikazuju.

## 11.5. Stan `/ponuda/[projekat]/[stan]`

### Cilj

Korisniku dati dovoljno informacija da odluči da kontaktira prodaju.

### Obavezni podaci

- projekat;
- oznaka/broj stana;
- lamela ili objekat;
- sprat;
- struktura;
- kvadratura;
- status;
- `Cena na upit`;
- CTA ka telefonu i formi.

### Opcioni podaci

- tlocrt;
- orijentacija;
- terasa;
- broj kupatila;
- parking/garaža;
- posebne karakteristike;
- galerija;
- PDF tlocrt;
- napomena prodaje.

### Status ponašanje

- `Dostupan`: aktivan CTA i puna kontakt sekcija.
- `Rezervisan`: CTA ostaje dostupan uz poruku da prodaja može predložiti alternativu.
- `Prodat`: nema prodajne tvrdnje; prikazuje se CTA `Pogledajte slične stanove` i kontakt.

### Tlocrt

- Prikazati samo ako postoji asset.
- Omogućiti uvećanje slike.
- Download dugme prikazati samo kada postoji poseban fajl za preuzimanje.
- Alt tekst mora sadržati projekat, jedinicu i sprat.

## 11.6. Reference `/reference`

### Cilj

Prikazati završene projekte kao dokaz iskustva i kvaliteta.

### Sekcije

1. Uvod u portfolio.
2. Grid završenih projekata.
3. Za svaki projekat:
   - fotografija;
   - naziv;
   - lokacija;
   - godina završetka;
   - tip objekta;
   - kratka činjenica ili rezultat;
   - CTA ka detalju reference.
4. Kontakt CTA.

### Pravila

- Aktivni projekti ne pripadaju ovoj stranici.
- Reference se ne predstavljaju kao aktuelna ponuda.
- Ne prikazivati izmišljene brojke ili statuse.

## 11.7. Detalj reference `/reference/[projekat]`

### Sekcije

1. Hero završenog objekta.
2. Uvod i osnovne činjenice.
3. Lokacija.
4. Obim projekta.
5. Galerija realizacije.
6. Kvaliteti/izazovi projekta, ako postoji odobren sadržaj.
7. CTA ka aktuelnoj Ponudi.
8. Kontakt CTA.

## 11.8. Kontakt `/kontakt`

### Cilj

Omogućiti najkraći moguć put do centralne prodaje.

### Sadržaj

- naslov i kratka poruka;
- telefon;
- email;
- adresa;
- radno vreme kada se dostavi;
- minimalna forma;
- link ka mapi;
- opcione društvene mreže.

### Forma

Polja:

- Ime i prezime
- Telefon
- Email
- Poruka

Validacija:

- ime je obavezno;
- najmanje telefon ili email je obavezan;
- email mora imati validan format ako je unet;
- poruka je obavezna;
- poruka ima maksimalno 2.000 karaktera;
- trimovati whitespace;
- odbiti honeypot popunjen od bota.

Stanja:

- idle;
- sending;
- success;
- validation error;
- server error;
- rate limited.

Success poruka:

> Hvala na upitu. Prodajni tim Novak Invest će vas kontaktirati u najkraćem roku.

Server error poruka:

> Upit trenutno nije moguće poslati. Pozovite nas ili pokušajte ponovo.

## 12. Model podataka

Podaci se čuvaju kao TypeScript moduli u `src/data/`.

### 12.1. Zajednički tipovi

```ts
type ProjectStatus = "available" | "coming-soon" | "completed" | "archived";

type UnitStatus = "available" | "reserved" | "sold";

type MediaAsset = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};
```

### 12.2. Project

```ts
type Project = {
  id: string;
  slug: string;
  name: string;
  status: ProjectStatus;
  featured: boolean;
  location: {
    address: string;
    city: string;
    coordinates?: { lat: number; lng: number };
  };
  shortDescription: string;
  description: string[];
  hero: MediaAsset;
  gallery: MediaAsset[];
  facts: Array<{ label: string; value: string }>;
  amenities: string[];
  constructionStandards: Array<{
    title: string;
    description: string;
    image?: MediaAsset;
  }>;
  nearbyPlaces?: Array<{
    name: string;
    distance: string;
  }>;
  timeline?: Array<{
    label: string;
    value: string;
  }>;
  brochureUrl?: string;
};
```

### 12.3. Unit

```ts
type Unit = {
  id: string;
  slug: string;
  projectSlug: string;
  label: string;
  building?: string;
  floor: string;
  roomType: string;
  area: number;
  status: UnitStatus;
  orientation?: string;
  terrace?: string;
  bathrooms?: number;
  parking?: string;
  features?: string[];
  floorPlan?: MediaAsset;
  floorPlanDownloadUrl?: string;
  gallery?: MediaAsset[];
  salesNote?: string;
};
```

### 12.4. ReferenceProject

```ts
type ReferenceProject = {
  id: string;
  slug: string;
  name: string;
  location: string;
  completionYear?: number;
  buildingType?: string;
  description: string[];
  hero: MediaAsset;
  gallery: MediaAsset[];
  facts: Array<{ label: string; value: string }>;
};
```

### 12.5. SiteSettings

```ts
type SiteSettings = {
  companyName: string;
  legalName: string;
  phone: string;
  phoneHref: string;
  email: string;
  address: string;
  mapUrl?: string;
  instagramUrl?: string;
  facebookUrl?: string;
  linkedinUrl?: string;
};
```

### 12.6. Privremene vrednosti

Dok ne stignu potvrđeni podaci:

- telefon: `+381 64 812 4494`;
- email: `office@novakinvest.rs`;
- adresa: `Radnička 49, Novi Sad`.

Sve vrednosti moraju biti definisane na jednom mestu, ne hardkodovane u više komponenti.

## 13. Kontakt email tok

### 13.1. Implementacija

- Next.js Server Action ili Route Handler.
- Resend kao default provider.
- Nema klijentskog API ključa.
- Nema baze podataka.
- Email se šalje centralnoj prodaji.
- Korisniku se ne šalje automatski marketing email.

### 13.2. Environment promenljive

```text
RESEND_API_KEY=
CONTACT_TO_EMAIL=office@novakinvest.rs
CONTACT_FROM_EMAIL=
```

### 13.3. Email payload

Email sadrži:

- ime;
- telefon;
- email;
- poruku;
- izvorni URL;
- projekat ako postoji;
- jedinicu ako postoji;
- datum i vreme;
- user agent samo ako je potreban za spam dijagnostiku.

### 13.4. Subject format

Bez konteksta:

```text
Novi upit sa sajta — Novak Invest
```

Sa projektom:

```text
Novi upit — Atrium Residence
```

Sa jedinicom:

```text
Novi upit — Atrium Residence / Lamela B, stan 7
```

### 13.5. Zaštita

- honeypot polje;
- server-side validacija;
- ograničenje dužine;
- osnovni rate limit po IP adresi;
- sanitizacija sadržaja u HTML emailu;
- generična korisnička poruka bez otkrivanja internih grešaka.

## 14. Vizuelna personalizacija

### 14.1. Zadržava se

- premium editorial pristup;
- neutralna pozadina;
- veliki arhitektonski vizuali;
- Inter ili slična čista sans-serif tipografija;
- veliki naslovi;
- facts grid;
- dvokolonske galerije;
- split specifications blok;
- story/reference kartice;
- tamna inquiry sekcija;
- veliki footer wordmark;
- mali radijusi i tanke linije.

### 14.2. Menja se

- Avenor logo → Novak Invest identitet;
- engleski tekst → srpska latinica;
- one-property hero → aktivni projekti;
- property facts → project/company facts;
- property gallery → galerije projekata;
- floor-plan specifications → standard gradnje ili detalj projekta/stana;
- story carousel → reference ili kvaliteti projekta;
- enquiry copy → centralna prodajna poruka;
- footer linkovi i pravni podaci.

### 14.3. Brand pravac

- Postojeći naziv i prepoznatljivi elementi se zadržavaju.
- Logo, paleta i tipografija se vizuelno pročišćavaju kada stignu finalni materijali.
- Ne radi se potpuni rebranding u v1.
- Privremeni logo ne sme biti predstavljen kao finalan identitet.

## 15. Responsive zahtevi

### Desktop ≥ 1280px

- maksimalna širina stranice prati `DESIGN.md`;
- Ponuda koristi pune, široke kartice;
- projekat može koristiti split layout;
- specifications i tlocrt ostaju čitljivi;
- kontakt CTA je prisutan u headeru.

### Tablet 768–1279px

- grid prelazi sa 4 na 2 kolone gde je potrebno;
- projekat i specifications mogu preći u stacked layout;
- touch target minimum 44px;
- navigacija može preći na mobilni meni kada linkovi više ne staju.

### Mobilni ≤ 767px

- jedna kolona za ponudu i galerije;
- čitljivi naslovi bez horizontalnog overflow-a;
- sticky `Pozovite` / `Pošaljite upit` bar na prodajnim stranicama;
- forma koristi punu dostupnu širinu;
- floor plan podržava uvećanje ili horizontalno pomeranje samo unutar kontrolisanog viewer-a;
- nema horizontalnog scroll-a na nivou dokumenta;
- footer wordmark ostaje unutar kontejnera.

### Obavezni QA viewport-i

- 1440 × 900
- 1280 × 800
- 768 × 1024
- 390 × 844

## 16. Accessibility zahtevi

- semantički `header`, `nav`, `main`, `section`, `article` i `footer` elementi;
- jedan `h1` po stranici;
- logičan redosled heading-a;
- vidljiv focus state;
- sve kontrole dostupne tastaturom;
- `aria-expanded` i `aria-controls` na mobilnom meniju;
- alt tekst za sve sadržajne slike;
- dekorativne slike imaju prazan alt;
- status jedinice nije predstavljen samo bojom;
- forma ima povezane label-e i error poruke;
- success/error poruke koriste `aria-live`;
- dovoljan kontrast teksta i dugmadi;
- reduced-motion fallback za slider i hover animacije.

## 17. SEO zahtevi

### 17.1. Osnova

- jedinstveni title i description po ruti;
- canonical URL;
- `robots.ts`;
- `sitemap.ts`;
- Open Graph metadata;
- favicon i social image;
- čisti slug-ovi;
- breadcrumb na projektu, stanu i referenci;
- server-renderovan osnovni sadržaj.

### 17.2. Ciljne teme

Primarne teme sadržaja:

- novogradnja Novi Sad;
- stanovi Novi Sad direktno od investitora;
- prodaja stanova Novi Sad;
- naziv konkretnog projekta;
- naziv naselja/lokacije;
- struktura stana + projekat.

Ne pretrpavati tekst ključnim rečima. Primarni cilj je jasan sadržaj za korisnika.

### 17.3. Strukturirani podaci

- `Organization` za Novak Invest;
- `BreadcrumbList` za unutrašnje rute;
- odgovarajući project/property schema samo kada su dostupni tačni podaci;
- bez lažnih rating/review podataka.

## 18. Performance zahtevi

- koristiti `next/image` za fotografije;
- lokalni asseti umesto remote hotlink-a;
- hero preload samo za prvi vidljivi asset;
- responsive `sizes` za svaku sliku;
- WebP/AVIF kada je praktično;
- izbegavati velike client component granice;
- slider i forma ostaju fokusirani Client Components;
- podaci projekata se renderuju server-side;
- bez nepotrebnih UI biblioteka;
- izbegavati layout shift rezervisanjem dimenzija;
- produkcijski build mora prolaziti bez upozorenja koja utiču na funkcionalnost.

## 19. Analytics i privatnost

V1 nema:

- GA4;
- oglasne piksele;
- remarketing;
- behavior recording;
- marketing cookies.

Osnovni server logovi hostinga nisu deo produkcijske analitike.

Ako se naknadno uvedu analytics ili marketing alati, mora se posebno definisati:

- consent model;
- Privacy Policy;
- događaji;
- retention;
- pristup podacima.

## 20. Mapa postojeće komponente → novi sadržaj

| Postojeća komponenta | Nova namena |
|---|---|
| `HeaderHero` | Globalni header + hero aktivnih projekata |
| `PropertyOverview` | Sažetak prioritetnog projekta ili uvod u Ponudu |
| `PropertyFeatures` | Project facts ili kompanijske brojke |
| `PropertyGallery` | Galerija projekta/reference |
| `Specifications` | Standard gradnje, tehničke informacije ili tlocrt |
| `StoryCarousel` | Završene reference ili ključne prednosti |
| `InquirySection` | Centralna prodajna forma/CTA |
| `SiteFooter` | Novak Invest footer i wordmark |

Komponente koje dobiju više konteksta moraju biti generalizovane kroz props umesto dupliciranja JSX-a.

## 21. Content requirements

### 21.1. Globalni materijali

- finalni Novak Invest logo u SVG formatu;
- brand boje;
- favicon;
- Open Graph vizual;
- potvrđen telefon;
- potvrđen email;
- potvrđena adresa;
- društvene mreže;
- pravni naziv firme;
- PIB/matični podaci samo ako treba da budu javni;
- Privacy Policy;
- Terms ili druge pravne stranice ako su potrebne.

### 21.2. Po aktivnom projektu

- naziv;
- status;
- adresa/lokacija;
- kratak opis;
- detaljan opis;
- hero render/fotografija;
- galerija;
- karakteristike;
- standard gradnje;
- pogodnosti;
- važna mesta i udaljenosti;
- rokovi;
- strukture stanova;
- spisak jedinica;
- status svake jedinice;
- tlocrti;
- opcioni katalog.

### 21.3. Po završenoj referenci

- naziv;
- lokacija;
- godina završetka;
- tip objekta;
- opis;
- hero fotografija;
- galerija realizacije;
- potvrđene brojke;
- partneri/izvođači ako su odobreni za objavu.

### 21.4. O Nama

- potvrđene godine iskustva;
- broj završenih projekata;
- broj realizovanih jedinica, ako se koristi;
- vrednosti;
- razvojni proces;
- standard kontrole kvaliteta;
- odobrene fotografije tima/gradilišta/projekata.

## 22. Scope of Work

## Faza 1 — Content audit i data foundation

### Zadaci

- inventarisati sve stranice i projekte postojećeg sajta;
- klasifikovati projekte;
- izdvojiti privremeni sadržaj;
- označiti podatke koji čekaju potvrdu;
- definisati TypeScript modele;
- kreirati centralizovane data module;
- kreirati `SiteSettings`;
- pripremiti asset strukturu po projektu.

### Deliverables

- potvrđen sitemap;
- data modeli;
- privremeni project/unit/reference podaci;
- content gap lista;
- asset manifest.

## Faza 2 — Globalni Novak Invest identitet

### Zadaci

- zameniti Avenor branding;
- uvesti Novak Invest logo placeholder/final asset;
- lokalizovati globalni UI na srpsku latinicu;
- napraviti novi header i mobilni meni;
- napraviti Novak Invest footer;
- dodati globalni CTA sistem;
- ažurirati metadata;
- prilagoditi tokene kada stignu brand materijali.

### Deliverables

- globalni layout;
- header;
- mobilna navigacija;
- footer;
- shared CTA komponente;
- shared status badge;
- shared breadcrumb.

## Faza 3 — Početna i korporativne stranice

### Zadaci

- personalizovati početnu;
- napraviti O Nama;
- napraviti Reference listing;
- napraviti detalj reference;
- napraviti Kontakt;
- povezati globalne CTA tokove.

### Deliverables

- `/`;
- `/o-nama`;
- `/reference`;
- `/reference/[projekat]`;
- `/kontakt`.

## Faza 4 — Ponuda i detalji

### Zadaci

- napraviti Ponuda listing bez filtera;
- napraviti project page template;
- napraviti unit page template;
- grupisati jedinice;
- implementirati tri statusa;
- dodati optional floor-plan viewer;
- dodati optional brochure CTA;
- dodati mobile sticky sales bar;
- dodati contextual contact CTA.

### Deliverables

- `/ponuda`;
- `/ponuda/[projekat]`;
- `/ponuda/[projekat]/[stan]`;
- project cards;
- unit cards;
- unit detail facts;
- status sistem;
- tlocrt komponenta.

## Faza 5 — Kontakt email

### Zadaci

- implementirati server-side email;
- povezati Resend;
- dodati validation schema;
- dodati honeypot;
- dodati rate limit;
- implementirati sva UI stanja;
- proslediti project/unit context;
- dokumentovati environment promenljive.

### Deliverables

- funkcionalna Kontakt forma;
- shared inquiry forma;
- email template;
- success/error UX;
- environment dokumentacija.

## Faza 6 — SEO, accessibility i QA

### Zadaci

- metadata po stranici;
- sitemap i robots;
- canonical i Open Graph;
- breadcrumb structured data;
- accessibility pregled;
- responsive QA;
- interaction QA;
- performance pregled;
- content proofread;
- production build.

### Deliverables

- indeksabilne stranice;
- završni QA izveštaj;
- potvrđen build;
- launch checklist;
- lista poznatih ograničenja.

## 23. Acceptance kriterijumi

### Navigacija

- Glavni meni sadrži tačno četiri dogovorene stranice.
- Logo vodi na `/`.
- Svaka stavka vodi na funkcionalnu rutu.
- Mobilni meni radi tastaturom i touch unosom.

### Ponuda

- Ponuda je dostupna jednim klikom.
- Aktivni i završeni projekti nisu pomešani.
- Nema filtera u v1.
- Jedinice su jasno grupisane.
- Svaka jedinica prikazuje strukturu, površinu, sprat i status.
- Nijedna jedinica ne prikazuje numeričku cenu.
- `Cena na upit` je dosledno prikazana.

### Status

- Dostupan, Rezervisan i Prodat imaju različit tekst i vizuelnu oznaku.
- Status nije predstavljen samo bojom.
- Status na listi i detalju je identičan.
- Prodat stan ne koristi lažni prodajni CTA.

### Kontakt

- Telefon koristi `tel:` link.
- Email koristi `mailto:` link gde je prikladno.
- Forma se može poslati sa telefonom ili emailom.
- Forma ne može biti poslata bez imena i kontakt podatka.
- Success i server error stanja su jasna.
- Kontekst projekta/stana stiže u email.
- Upiti se ne čuvaju u bazi.

### Sadržaj

- Sav UI je na srpskoj latinici.
- Nema Avenor copy-ja ili logotipa.
- Privremeni podaci su zamenjeni ili potvrđeni pre lansiranja.
- Slike imaju tačne alt opise.
- Tlocrt/katalog UI se ne prikazuje bez fajla.

### Responsive

- Nema horizontalnog document scroll-a.
- Header, CTA, facts, galerije, tlocrti, forma i footer rade na sva četiri QA viewport-a.
- Sticky mobile CTA ne prekriva sadržaj.
- Tekst je čitljiv bez browser zoom-a.

### Tehnički kvalitet

- `npx tsc --noEmit` prolazi.
- `npm run lint` prolazi.
- `npm run build` prolazi.
- Nema runtime error-a u browser konzoli.
- Nema neuspešnih lokalnih asset zahteva.

## 24. Rizici i mitigacije

### Nepotpuni materijali

**Rizik:** finalne fotografije, logo, tlocrti i tekstovi još nisu dostupni.  
**Mitigacija:** data i asset struktura se pripremaju unapred; placeholder se jasno odvaja od produkcijskog materijala.

### Neažuran status stanova

**Rizik:** ručno održavanje može dovesti do zastarelog statusa.  
**Mitigacija:** jedan centralni `units` izvor, jasna procedura izmene i obavezna provera pred objavu.

### Nepotvrđene tvrdnje

**Rizik:** postojeći sajt može sadržati zastarele rokove i brojke.  
**Mitigacija:** svaka brojka dobija status `pending verification` u content auditu i ne objavljuje se bez odobrenja.

### Email deliverability

**Rizik:** forma šalje email koji završava u spam-u.  
**Mitigacija:** verifikovan domen, SPF/DKIM, produkcijski sender i testovi pre lansiranja.

### Rast ponude

**Rizik:** ručni TypeScript podaci postaju nepraktični sa velikim brojem projekata.  
**Mitigacija:** komponente koriste stabilne tipove i props, pa se izvor kasnije može zameniti CMS-om ili bazom.

## 25. Launch checklist

### Sadržaj

- [ ] Potvrđen status svih projekata
- [ ] Potvrđen spisak jedinica
- [ ] Potvrđen status svake jedinice
- [ ] Potvrđene kvadrature, spratovi i strukture
- [ ] Potvrđene company brojke
- [ ] Odobren sav copy
- [ ] Odobrene fotografije
- [ ] Odobreni tlocrti
- [ ] Potvrđen telefon, email i adresa
- [ ] Dostavljeni pravni tekstovi

### Brand

- [ ] Finalni logo
- [ ] Finalna paleta
- [ ] Favicon
- [ ] Open Graph vizual
- [ ] Provera footer wordmark-a

### Kontakt

- [ ] Verifikovan email domen
- [ ] Podešene environment promenljive
- [ ] Testirana success poruka
- [ ] Testirana error poruka
- [ ] Testiran rate limit
- [ ] Testiran email na desktopu i mobilnom

### SEO i tehnički QA

- [ ] Metadata po ruti
- [ ] Canonical URL
- [ ] Sitemap
- [ ] Robots
- [ ] Breadcrumbs
- [ ] Alt tekstovi
- [ ] Keyboard QA
- [ ] Responsive QA
- [ ] TypeScript
- [ ] Lint
- [ ] Production build
- [ ] Broken-link provera

## 26. Definicija završetka v1

V1 je završena kada:

- sve planirane rute postoje;
- aktivni projekti i jedinice koriste centralizovane podatke;
- završeni projekti postoje u Referencama;
- statusi jedinica su tačni;
- nijedna cena nije javno prikazana;
- telefon, email i forma rade;
- centralni email prima strukturirane upite;
- sav korisnički sadržaj je na srpskoj latinici;
- finalni brand i odobreni materijali su ubačeni;
- responsive i accessibility acceptance kriterijumi prolaze;
- TypeScript, lint i production build prolaze;
- nema otvorenih launch-blocking grešaka.

---

## 27. Odobrene odluke

| Tema | Odluka |
|---|---|
| Primarna publika | Kupci koji traže dom |
| Struktura ponude | Projekat → stan |
| Prodajni kontakt | Centralni kontakt |
| Reference | Završeni projekti |
| Cena | Ne prikazuje se |
| Status | Javno vidljiv |
| Upravljanje ponudom | Ručno kroz kod |
| Početna | Aktuelna ponuda odmah nakon hero sekcije |
| Brand | Zadržati i pročistiti Novak Invest identitet |
| Jezik | Srpski, latinica |
| Filteri | Bez filtera u v1 |
| Dokumenti | Opcioni, prikazuju se samo kada postoje |
| Kanali | Telefon, email i forma |
| O Nama | Iskustvo i proces |
| Forma | Minimalna |
| Portfolio | Svi postojeći projekti ulaze u audit |
| Dokumentacija | Jedan `PRD.md` |
| Dostava forme | Email bez baze |
| Analytics | Nije deo v1 |

import type { Project, SiteSettings, Unit } from "../types/site";

export const siteSettings: SiteSettings = {
  companyName: "Novak Invest",
  legalName: "Novak AT Invest DOO",
  phone: "+381 64 812 4494",
  phoneHref: "tel:+381648124494",
  email: "office@novakinvest.rs",
  address: "Radnička 49, Novi Sad",
  mapUrl: "https://maps.google.com/?q=Radnička+49,+Novi+Sad",
};

export const navigation = [
  { label: "Početna", href: "/" },
  { label: "O nama", href: "/o-nama" },
  { label: "Ponuda", href: "/ponuda" },
  { label: "Reference", href: "/reference" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

export const projects: Project[] = [
  {
    id: "temerinska-141",
    slug: "temerinska-141",
    name: "Temerinska 141",
    status: "available",
    statusLabel: "U ponudi",
    featured: true,
    location: { address: "Temerinska 141", city: "Novi Sad" },
    shortDescription:
      "Savremen stambeno-poslovni objekat koji povezuje funkcionalan dizajn, kvalitetnu gradnju i dobru gradsku povezanost.",
    description: [
      "Na adresi Temerinska 141 planiran je objekat sa četiri sprata i potkrovljem, sa stanovima, poslovnim apartmanima i lokalima u prizemlju.",
      "Za informacije o dostupnim jedinicama i rokovima kontaktirajte prodajni tim Novak Invest.",
    ],
    hero: {
      src: "/images/novak/temerinska-141.webp",
      alt: "Render projekta Temerinska 141 u Novom Sadu",
    },
    gallery: [],
    facts: [
      { label: "Stanovi", value: "21" },
      { label: "Poslovni apartmani", value: "2" },
      { label: "Lokali", value: "2" },
      { label: "Garažna mesta", value: "22" },
    ],
    amenities: ["Funkcionalne strukture", "Garažna mesta", "Brza veza sa centrom"],
    constructionStandards: [
      { title: "Podovi", description: "Hrastov parket u dnevnim i spavaćim sobama." },
      { title: "Stolarija", description: "Termoizolaciono staklo i PVC roletne." },
      { title: "Konstrukcija", description: "Armirano-betonski skeletni sistem." },
    ],
    verification: "draft",
  },
  {
    id: "petrovaradin",
    slug: "petrovaradin",
    name: "Petrovaradin",
    status: "available",
    statusLabel: "U ponudi",
    featured: true,
    location: { address: "Vladimira Gortana 8c", city: "Petrovaradin" },
    shortDescription:
      "Mirna lokacija za porodični život, na korak od Novog Sada i Petrovaradinske tvrđave.",
    description: [
      "Projekat se nalazi u uređenom delu Petrovaradina, blizu škole i svakodnevnih sadržaja, uz brzu vezu sa centrom Novog Sada.",
      "Za aktuelnu raspoloživost prikazanih jedinica obratite se prodajnom timu Novak Invest.",
    ],
    hero: {
      src: "/images/novak/petrovaradin.webp",
      alt: "Render stambenog projekta u Petrovaradinu",
    },
    gallery: [],
    facts: [
      { label: "Osnovna škola", value: "350 m" },
      { label: "Supermarket", value: "300 m" },
      { label: "Centar Novog Sada", value: "2,5 km" },
      { label: "Petrovaradinska tvrđava", value: "1,4 km" },
    ],
    amenities: ["Mirna ulica", "Porodično okruženje", "Blizina centra"],
    constructionStandards: [],
    nearbyPlaces: [
      { name: "OŠ Jovan Dučić", distance: "350 m" },
      { name: "Univerexport", distance: "300 m" },
      { name: "Centar Novog Sada", distance: "2,5 km" },
    ],
    verification: "draft",
  },
  {
    id: "sremska-kamenica-zj25",
    slug: "sremska-kamenica-zj25",
    name: "Sremska Kamenica Z.J.25",
    status: "coming-soon",
    statusLabel: "U pripremi",
    featured: false,
    location: { address: "Zmaj Jovina 25", city: "Sremska Kamenica" },
    shortDescription:
      "Dvojni stambeni kompleks u mirnom okruženju, blizu prirode i gradskih sadržaja.",
    description: [
      "Projekat je osmišljen za porodični život, sa garažama u prizemlju i funkcionalno organizovanim četvorosobnim stanovima na višim etažama.",
    ],
    hero: {
      src: "/images/novak/sremska-kamenica.webp",
      alt: "Render projekta Zmaj Jovina 25 u Sremskoj Kamenici",
    },
    gallery: [],
    facts: [
      { label: "Tip", value: "Dvojni objekat" },
      { label: "Spratnost", value: "P + 1 + Pk" },
      { label: "Okruženje", value: "Porodično" },
      { label: "Status", value: "U pripremi" },
    ],
    amenities: ["Blizina prirode", "Garaže", "Porodične strukture"],
    constructionStandards: [],
    verification: "draft",
  },
  {
    id: "atrium-residence",
    slug: "atrium-residence",
    name: "Atrium Residence",
    status: "completed",
    statusLabel: "Referenca",
    featured: false,
    location: { address: "Petefi Šandora", city: "Novi Sad" },
    shortDescription:
      "Stambeno-poslovni kompleks na Telepu, projektovan oko ideje funkcionalnog i mirnog gradskog doma.",
    description: [
      "Atrium Residence objedinjuje stanovanje, poslovne sadržaje, parking i uređene zajedničke površine.",
    ],
    hero: {
      src: "/images/novak/atrium-hero.jpg",
      alt: "Render kompleksa Atrium Residence na Telepu",
    },
    gallery: [
      { src: "/images/novak/atrium-street.jpg", alt: "Ulični pogled na Atrium Residence" },
      { src: "/images/novak/atrium-night.jpg", alt: "Noćni render Atrium Residence" },
    ],
    facts: [
      { label: "Stambene jedinice", value: "194" },
      { label: "Poslovne jedinice", value: "9" },
      { label: "Lokacija", value: "Telep" },
      { label: "Investitor", value: "Novak AT Invest" },
    ],
    amenities: ["Uređeno dvorište", "Parking i garaže", "Različite strukture"],
    constructionStandards: [],
    verification: "draft",
  },
  {
    id: "gunduliceva-33",
    slug: "gunduliceva-33",
    name: "Gundulićeva 33",
    status: "completed",
    statusLabel: "Referenca",
    featured: false,
    location: { address: "Gundulićeva 33", city: "Novi Sad" },
    shortDescription:
      "Stambeno-poslovni objekat u centralnom i mirnom delu Novog Sada, na Podbari.",
    description: [
      "Objekat je projektovan sa 23 stambene jedinice različitih struktura i poslovnim prostorom u prizemlju i podrumu.",
    ],
    hero: {
      src: "/images/novak/gunduliceva-33.jpg",
      alt: "Noćni render objekta Gundulićeva 33 u Novom Sadu",
    },
    gallery: [],
    facts: [
      { label: "Stanovi", value: "23" },
      { label: "Raspon kvadratura", value: "26,64–125,05 m²" },
      { label: "Garažna mesta", value: "17" },
      { label: "Lokacija", value: "Podbara" },
    ],
    amenities: ["Centralna lokacija", "Lift", "Parking za bicikle"],
    constructionStandards: [],
    verification: "draft",
  },
];

export const units: Unit[] = [
  {
    id: "petrovaradin-sa-pr-1",
    slug: "stan-sa-pr-1",
    projectSlug: "petrovaradin",
    label: "Stan SA PR 1",
    building: "Lamela A",
    floor: "Prizemlje",
    roomType: "Dvosoban",
    area: 45.31,
    status: "available",
    terrace: "Lođa 3,62 m²",
    bathrooms: 1,
    features: ["Dnevna soba 18,31 m²", "Odvojena kuhinja", "Lođa"],
    floorPlan: {
      src: "/images/novak/petrovaradin-plan.webp",
      alt: "Tlocrt stana SA PR 1 u Petrovaradinu, prizemlje",
    },
    positionPlan: {
      src: "/images/novak/petrovaradin-position.webp",
      alt: "Pozicija stana SA PR 1 u objektu Petrovaradin",
    },
    verification: "draft",
  },
  {
    id: "petrovaradin-sb-pr-7",
    slug: "stan-sb-pr-7",
    projectSlug: "petrovaradin",
    label: "Stan SB PR 7",
    building: "Lamela B",
    floor: "Prizemlje",
    roomType: "Dvosoban",
    area: 43.68,
    status: "reserved",
    terrace: "Lođa 2,33 m²",
    bathrooms: 1,
    verification: "draft",
  },
  {
    id: "petrovaradin-sa-pr-8",
    slug: "stan-sa-pr-8",
    projectSlug: "petrovaradin",
    label: "Stan SA PR 8",
    building: "Lamela A",
    floor: "Prizemlje",
    roomType: "Trosoban",
    area: 60.8,
    status: "sold",
    terrace: "Lođa 2,64 m²",
    bathrooms: 2,
    verification: "draft",
  },
];

export const offerProjects = projects.filter((project) => project.status !== "completed");
export const referenceProjects = projects.filter((project) => project.status === "completed");

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
export const getProjectUnits = (slug: string) => units.filter((unit) => unit.projectSlug === slug);
export const getUnit = (projectSlug: string, unitSlug: string) =>
  units.find((unit) => unit.projectSlug === projectSlug && unit.slug === unitSlug);

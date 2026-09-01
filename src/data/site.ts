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
    id: "temerinska-143",
    slug: "temerinska-143",
    name: "Temerinska 143",
    status: "available",
    statusLabel: "U ponudi",
    featured: true,
    location: { address: "Temerinska 143", city: "Novi Sad" },
    shortDescription:
      "Savremen stambeno-poslovni objekat sa pažljivo organizovanim stanovima i direktnom vezom sa gradskim sadržajima.",
    description: [
      "Na adresi Temerinska 143 nastaje savremen stambeno-poslovni objekat spratnosti Po + P + 2 + Pk, oblikovan za funkcionalan gradski život.",
      "Aktuelna ponuda obuhvata sedam dvosobnih i trosobnih stanova na prvom spratu, drugom spratu i u potkrovlju.",
    ],
    hero: {
      src: "/images/novak/temerinska-143/building-hero.webp",
      alt: "Render ulične fasade projekta Temerinska 143 u Novom Sadu",
    },
    gallery: [
      {
        src: "/images/novak/temerinska-143/building-angle.webp",
        alt: "Pogled iz ugla na fasadu projekta Temerinska 143",
      },
      {
        src: "/images/novak/temerinska-143/building-front.webp",
        alt: "Frontalni prikaz projekta Temerinska 143",
      },
      {
        src: "/images/novak/temerinska-143/building-courtyard.webp",
        alt: "Dvorišna fasada projekta Temerinska 143",
      },
    ],
    facts: [
      { label: "Aktuelna ponuda", value: "7 stanova" },
      { label: "Strukture", value: "Dvosobni i trosobni" },
      { label: "Spratnost", value: "Po + P + 2 + Pk" },
      { label: "Lokacija", value: "Novi Sad" },
    ],
    amenities: ["Funkcionalne strukture", "Savremena arhitektura", "Gradska lokacija"],
    constructionStandards: [
      { title: "Podovi", description: "Hrastov parket u dnevnim i spavaćim sobama." },
      { title: "Stolarija", description: "Termoizolaciono staklo i PVC roletne." },
      { title: "Konstrukcija", description: "Armirano-betonski skeletni sistem." },
    ],
    verification: "draft",
  },
  {
    id: "petrovaradin-vladimira-gortana-8c",
    slug: "petrovaradin-vladimira-gortana-8c",
    name: "Petrovaradin - Vladimira Gortana 8c",
    status: "available",
    statusLabel: "U ponudi",
    featured: true,
    location: { address: "Vladimira Gortana 8c", city: "Petrovaradin" },
    shortDescription:
      "Savremena stambena zgrada sa dve lamele, liftovima, podzemnom garažom i uređenim zelenim površinama u mirnom delu Petrovaradina.",
    description: [
      "Na adresi Vladimira Gortana 8c nastaje slobodnostojeća stambena zgrada sa 53 stana, organizovana kroz lamele A i B, spratnosti Po + P + 1 + Pk (M).",
      "Aktuelna ponuda obuhvata četiri trosobna i četvorosobna stana, sa detaljnim 3D prikazima, tlocrtima, pozicijama na etaži i komercijalnim skicama.",
    ],
    hero: {
      src: "/images/novak/petrovaradin-vladimira-gortana-8c/building-street.webp",
      alt: "Ulični pogled na projekat Petrovaradin - Vladimira Gortana 8c",
    },
    gallery: [
      {
        src: "/images/novak/petrovaradin-vladimira-gortana-8c/building-courtyard.webp",
        alt: "Dvorišni pogled na projekat Vladimira Gortana 8c u Petrovaradinu",
      },
      {
        src: "/images/novak/petrovaradin-vladimira-gortana-8c/building-street.webp",
        alt: "Prilaz i ulična fasada projekta Vladimira Gortana 8c",
      },
    ],
    facts: [
      { label: "Aktuelna ponuda", value: "4 stana" },
      { label: "Strukture", value: "Trosobni i četvorosobni" },
      { label: "Spratnost", value: "Po + P + 1 + Pk (M)" },
      { label: "Lokacija", value: "Petrovaradin" },
    ],
    amenities: ["Dve stambene lamele", "Podzemna garaža", "Uređene zelene površine"],
    constructionStandards: [
      {
        title: "Fasadna stolarija",
        description: "Aluminijumska stolarija sa termoprekidom i niskoemisionim staklom.",
      },
      {
        title: "Podovi",
        description: "Parket i keramika prilagođeni nameni prostorija.",
      },
      {
        title: "Sigurnost",
        description: "Protivprovalna ulazna vrata na stambenim jedinicama.",
      },
    ],
    verification: "verified",
  },
  {
    id: "atrium-residence",
    slug: "atrium-residence",
    name: "Atrium Residence",
    status: "completed",
    statusLabel: "Referenca",
    featured: false,
    location: { address: "Petefi Šandora 19–23", city: "Novi Sad" },
    shortDescription:
      "Stambeno-poslovni kompleks na Telepu, projektovan oko ideje funkcionalnog i mirnog gradskog doma.",
    description: [
      "Atrium Residence objedinjuje stanovanje, poslovne sadržaje, parking i uređene zajedničke površine.",
    ],
    hero: {
      src: "/reference-media/atrium-residence/01.webp",
      alt: "Atrium Residence i centralno dvorište iz vazduha",
    },
    gallery: [
      { src: "/reference-media/atrium-residence/03.webp", alt: "Kompleks Atrium Residence na Telepu" },
      { src: "/reference-media/atrium-residence/05.webp", alt: "Atrium Residence u urbanom okruženju Telepa" },
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
      src: "/reference-media/gunduliceva-33/02.webp",
      alt: "Završeni objekat Gundulićeva 33 iz vazduha",
    },
    gallery: [
      { src: "/reference-media/gunduliceva-33/01.webp", alt: "Bočni pogled na objekat Gundulićeva 33" },
      { src: "/reference-media/gunduliceva-33/04.webp", alt: "Prednja fasada objekta Gundulićeva 33" },
    ],
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
    id: "temerinska-143-stan-2",
    slug: "stan-2",
    projectSlug: "temerinska-143",
    label: "Stan 2",
    floor: "Prvi sprat",
    roomType: "Dvosoban",
    area: 55.98,
    status: "available",
    terrace: "Terasa 6,11 m²",
    bathrooms: 1,
    visual: {
      src: "/images/novak/temerinska-143/stan-2-3d-transparent-v5.webp",
      alt: "Trodimenzionalni prikaz stana 2 u Temerinskoj 143",
    },
    floorPlan: {
      src: "/images/novak/temerinska-143/stan-2-floor-transparent-v5.webp",
      alt: "Tlocrt stana 2 na prvom spratu",
    },
    positionPlan: {
      src: "/images/novak/temerinska-143/stan-2-position-transparent-v5.webp",
      alt: "Pozicija stana 2 na etaži projekta Temerinska 143",
    },
    commercialSketchPdf: "/documents/temerinska-143/komercijalna-skica-stan-2.pdf",
    verification: "draft",
  },
  {
    id: "temerinska-143-stan-6",
    slug: "stan-6",
    projectSlug: "temerinska-143",
    label: "Stan 6",
    floor: "Prvi sprat",
    roomType: "Trosoban",
    area: 68.91,
    status: "available",
    terrace: "Terasa 2,88 m²",
    bathrooms: 1,
    visual: {
      src: "/images/novak/temerinska-143/stan-6-3d-transparent-v5.webp",
      alt: "Trodimenzionalni prikaz stana 6 u Temerinskoj 143",
    },
    floorPlan: {
      src: "/images/novak/temerinska-143/stan-6-floor-transparent-v5.webp",
      alt: "Tlocrt stana 6 na prvom spratu",
    },
    positionPlan: {
      src: "/images/novak/temerinska-143/stan-6-position-transparent-v5.webp",
      alt: "Pozicija stana 6 na etaži projekta Temerinska 143",
    },
    commercialSketchPdf: "/documents/temerinska-143/komercijalna-skica-stan-6.pdf",
    verification: "draft",
  },
  {
    id: "temerinska-143-stan-8",
    slug: "stan-8",
    projectSlug: "temerinska-143",
    label: "Stan 8",
    floor: "Drugi sprat",
    roomType: "Dvosoban",
    area: 55.98,
    status: "available",
    terrace: "Terasa 6,11 m²",
    bathrooms: 1,
    visual: {
      src: "/images/novak/temerinska-143/stan-8-3d-transparent-v5.webp",
      alt: "Trodimenzionalni prikaz stana 8 u Temerinskoj 143",
    },
    floorPlan: {
      src: "/images/novak/temerinska-143/stan-8-floor-transparent-v5.webp",
      alt: "Tlocrt stana 8 na drugom spratu",
    },
    positionPlan: {
      src: "/images/novak/temerinska-143/stan-8-position-transparent-v5.webp",
      alt: "Pozicija stana 8 na etaži projekta Temerinska 143",
    },
    commercialSketchPdf: "/documents/temerinska-143/komercijalna-skica-stan-8.pdf",
    verification: "draft",
  },
  {
    id: "temerinska-143-stan-18",
    slug: "stan-18",
    projectSlug: "temerinska-143",
    label: "Stan 18",
    floor: "Drugi sprat",
    roomType: "Trosoban",
    area: 68.91,
    status: "available",
    terrace: "Terasa 2,88 m²",
    bathrooms: 1,
    visual: {
      src: "/images/novak/temerinska-143/stan-18-3d-transparent-v5.webp",
      alt: "Trodimenzionalni prikaz stana 18 u Temerinskoj 143",
    },
    floorPlan: {
      src: "/images/novak/temerinska-143/stan-18-floor-transparent-v5.webp",
      alt: "Tlocrt stana 18 na drugom spratu",
    },
    positionPlan: {
      src: "/images/novak/temerinska-143/stan-18-position-transparent-v5.webp",
      alt: "Pozicija stana 18 na etaži projekta Temerinska 143",
    },
    commercialSketchPdf: "/documents/temerinska-143/komercijalna-skica-stan-18.pdf",
    verification: "draft",
  },
  {
    id: "temerinska-143-stan-19",
    slug: "stan-19",
    projectSlug: "temerinska-143",
    label: "Stan 19",
    floor: "Potkrovlje",
    roomType: "Dvosoban",
    area: 96.18,
    status: "available",
    terrace: "Dve terase",
    bathrooms: 2,
    visual: {
      src: "/images/novak/temerinska-143/stan-19-3d-transparent-v6.webp",
      alt: "Trodimenzionalni prikaz stana 19 u Temerinskoj 143",
    },
    floorPlan: {
      src: "/images/novak/temerinska-143/stan-19-floor-transparent-v5.webp",
      alt: "Tlocrt stana 19 u potkrovlju",
    },
    positionPlan: {
      src: "/images/novak/temerinska-143/stan-19-position-transparent-v5.webp",
      alt: "Pozicija stana 19 na etaži projekta Temerinska 143",
    },
    commercialSketchPdf: "/documents/temerinska-143/komercijalna-skica-stan-19.pdf",
    verification: "draft",
  },
  {
    id: "temerinska-143-stan-20",
    slug: "stan-20",
    projectSlug: "temerinska-143",
    label: "Stan 20",
    floor: "Potkrovlje",
    roomType: "Dvosoban",
    area: 69.45,
    status: "available",
    terrace: "Dve terase",
    bathrooms: 1,
    visual: {
      src: "/images/novak/temerinska-143/stan-20-3d-transparent-v6.webp",
      alt: "Trodimenzionalni prikaz stana 20 u Temerinskoj 143",
    },
    floorPlan: {
      src: "/images/novak/temerinska-143/stan-20-floor-transparent-v5.webp",
      alt: "Tlocrt stana 20 u potkrovlju",
    },
    positionPlan: {
      src: "/images/novak/temerinska-143/stan-20-position-transparent-v5.webp",
      alt: "Pozicija stana 20 na etaži projekta Temerinska 143",
    },
    commercialSketchPdf: "/documents/temerinska-143/komercijalna-skica-stan-20.pdf",
    verification: "draft",
  },
  {
    id: "temerinska-143-stan-21",
    slug: "stan-21",
    projectSlug: "temerinska-143",
    label: "Stan 21",
    floor: "Potkrovlje",
    roomType: "Trosoban",
    area: 79.68,
    status: "available",
    terrace: "Terasa 11,49 m²",
    bathrooms: 2,
    visual: {
      src: "/images/novak/temerinska-143/stan-21-3d-transparent-v5.webp",
      alt: "Trodimenzionalni prikaz stana 21 u Temerinskoj 143",
    },
    floorPlan: {
      src: "/images/novak/temerinska-143/stan-21-floor-transparent-v5.webp",
      alt: "Tlocrt stana 21 u potkrovlju",
    },
    positionPlan: {
      src: "/images/novak/temerinska-143/stan-21-position-transparent-v5.webp",
      alt: "Pozicija stana 21 na etaži projekta Temerinska 143",
    },
    commercialSketchPdf: "/documents/temerinska-143/komercijalna-skica-stan-21.pdf",
    verification: "draft",
  },
  {
    id: "petrovaradin-vladimira-gortana-8c-stan-4",
    slug: "stan-4",
    projectSlug: "petrovaradin-vladimira-gortana-8c",
    label: "Stan 4",
    building: "Lamela A",
    floor: "Prizemlje",
    roomType: "Trosoban",
    area: 61.69,
    status: "available",
    terrace: "Lođa 2,02 m²",
    bathrooms: 1,
    visual: {
      src: "/images/novak/petrovaradin-vladimira-gortana-8c/stan-4-3d.webp",
      alt: "Trodimenzionalni prikaz stana 4 u Lameli A",
    },
    floorPlan: {
      src: "/images/novak/petrovaradin-vladimira-gortana-8c/stan-4-floor.webp",
      alt: "Tlocrt stana 4 u prizemlju Lamele A",
    },
    positionPlan: {
      src: "/images/novak/petrovaradin-vladimira-gortana-8c/stan-4-position.webp",
      alt: "Pozicija stana 4 na etaži Lamele A",
    },
    commercialSketchPdf:
      "/documents/petrovaradin-vladimira-gortana-8c/komercijalna-skica-stan-4.pdf",
    verification: "verified",
  },
  {
    id: "petrovaradin-vladimira-gortana-8c-stan-7",
    slug: "stan-7",
    projectSlug: "petrovaradin-vladimira-gortana-8c",
    label: "Stan 7",
    building: "Lamela A",
    floor: "Prizemlje",
    roomType: "Četvorosoban",
    area: 91.19,
    status: "available",
    terrace: "Terasa 4,33 m²",
    bathrooms: 2,
    visual: {
      src: "/images/novak/petrovaradin-vladimira-gortana-8c/stan-7-3d.webp",
      alt: "Trodimenzionalni prikaz stana 7 u Lameli A",
    },
    floorPlan: {
      src: "/images/novak/petrovaradin-vladimira-gortana-8c/stan-7-floor.webp",
      alt: "Tlocrt stana 7 u prizemlju Lamele A",
    },
    positionPlan: {
      src: "/images/novak/petrovaradin-vladimira-gortana-8c/stan-7-position.webp",
      alt: "Pozicija stana 7 na etaži Lamele A",
    },
    commercialSketchPdf:
      "/documents/petrovaradin-vladimira-gortana-8c/komercijalna-skica-stan-7.pdf",
    verification: "verified",
  },
  {
    id: "petrovaradin-vladimira-gortana-8c-stan-8",
    slug: "stan-8",
    projectSlug: "petrovaradin-vladimira-gortana-8c",
    label: "Stan 8",
    building: "Lamela A",
    floor: "Prizemlje",
    roomType: "Trosoban",
    area: 58.98,
    status: "available",
    terrace: "Lođa 2,56 m²",
    bathrooms: 2,
    visual: {
      src: "/images/novak/petrovaradin-vladimira-gortana-8c/stan-8-3d.webp",
      alt: "Trodimenzionalni prikaz stana 8 u Lameli A",
    },
    floorPlan: {
      src: "/images/novak/petrovaradin-vladimira-gortana-8c/stan-8-floor.webp",
      alt: "Tlocrt stana 8 u prizemlju Lamele A",
    },
    positionPlan: {
      src: "/images/novak/petrovaradin-vladimira-gortana-8c/stan-8-position.webp",
      alt: "Pozicija stana 8 na etaži Lamele A",
    },
    commercialSketchPdf:
      "/documents/petrovaradin-vladimira-gortana-8c/komercijalna-skica-stan-8.pdf",
    verification: "verified",
  },
  {
    id: "petrovaradin-vladimira-gortana-8c-stan-b-1-2",
    slug: "stan-b-1-2",
    projectSlug: "petrovaradin-vladimira-gortana-8c",
    label: "Stan B 1.2",
    building: "Lamela B",
    floor: "Prvi sprat",
    roomType: "Četvorosoban",
    area: 101.33,
    status: "available",
    terrace: "Lođa 5,36 m²",
    bathrooms: 2,
    visual: {
      src: "/images/novak/petrovaradin-vladimira-gortana-8c/stan-b-1-2-3d.webp",
      alt: "Trodimenzionalni prikaz stana B 1.2 u Lameli B",
    },
    floorPlan: {
      src: "/images/novak/petrovaradin-vladimira-gortana-8c/stan-b-1-2-floor.webp",
      alt: "Tlocrt stana B 1.2 na prvom spratu Lamele B",
    },
    positionPlan: {
      src: "/images/novak/petrovaradin-vladimira-gortana-8c/stan-b-1-2-position.webp",
      alt: "Pozicija stana B 1.2 na etaži Lamele B",
    },
    commercialSketchPdf:
      "/documents/petrovaradin-vladimira-gortana-8c/komercijalna-skica-stan-b-1-2.pdf",
    verification: "verified",
  },
];

export const offerProjects = projects.filter((project) => project.status !== "completed");
export const referenceProjects = projects.filter((project) => project.status === "completed");

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
export const getProjectUnits = (slug: string) => units.filter((unit) => unit.projectSlug === slug);
export const getUnit = (projectSlug: string, unitSlug: string) =>
  units.find((unit) => unit.projectSlug === projectSlug && unit.slug === unitSlug);

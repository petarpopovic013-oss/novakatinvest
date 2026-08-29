export type ProjectStatus = "available" | "coming-soon" | "completed";
export type UnitStatus = "available" | "reserved" | "sold";

export type MediaAsset = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type Project = {
  id: string;
  slug: string;
  name: string;
  status: ProjectStatus;
  statusLabel: string;
  featured: boolean;
  location: {
    address: string;
    city: string;
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
  nearbyPlaces?: Array<{ name: string; distance: string }>;
  verification: "draft" | "verified";
};

export type Unit = {
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
  features?: string[];
  visual: MediaAsset;
  floorPlan?: MediaAsset;
  positionPlan?: MediaAsset;
  verification: "draft" | "verified";
};

export type SiteSettings = {
  companyName: string;
  legalName: string;
  phone: string;
  phoneHref: string;
  email: string;
  address: string;
  mapUrl: string;
};

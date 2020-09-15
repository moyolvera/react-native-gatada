export interface VatosData {
  timestamp: string;
  vatos: Vato[];
}

export interface Vato {
  id: string;
  biography: string;
  group: string;
  name: string;
  photo: Photo;
  seasons: string[];
  social: Social;
  youtubeLink: string;
}

export interface Photo {
  cover: string;
  icon: string;
  profile: string;
}

export interface Social {
  facebook: string;
  twitter: string;
  instagram: string;
  youtube: string;
}

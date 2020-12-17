export interface Movie {
  id: string;
  title: string;
  statistics: string;
  createdAt: any;
}

export interface NewFilmData {
  type: 'youtube' | 'vimeo';
  id: string;
}

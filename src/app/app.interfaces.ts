export interface Movie {
  id: string;
  title: string;
  createdAt: any;
}

export interface NewFilmData {
  type: 'youtube' | 'vimeo';
  id: string;
}

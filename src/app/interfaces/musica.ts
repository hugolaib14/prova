export interface Musica {
  id: number;
  nom: string;
  artista: string;
  album: string;
  durada: number;
  descarregada: boolean;
  genere?: string;
}
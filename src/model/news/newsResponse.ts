export interface NewsResponse {
  id: string | null;
  title: string;
  //FIXME: string => date
  date: string;
  details: string;
  image: string;
}

export interface SurahData {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
}

export interface SurahResponse {
  code: number;
  status: string;
  data: SurahData[];
}

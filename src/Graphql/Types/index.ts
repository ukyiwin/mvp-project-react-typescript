export type Hero = {
  name: string;
  id: string;
  appearsIn: string[];
  friends: Hero[];
};

export type Response = {
  hero: Hero;
};
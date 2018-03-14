interface JQuery {
  alton(options?: any) : any;
  fullpage(options: any): any;
  timeago() : any;
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.css'
declare module '*.scss'
declare module '*.svg'

declare global {
  interface Window { anima(): any; effects: any; slideshow: any; }
  interface String {
    truncString(lstr: string, add: number) : string;
    lenInMin(): string;
  }
}

interface Window { anima(): any;  effects: any; slideshow: any; }

interface String {
  truncString(lstr: string, add: number) : string;
  lenInMin(): string;
}
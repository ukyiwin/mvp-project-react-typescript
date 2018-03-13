interface JQuery {
  alton(options?: any) : any;
  fullpage(options: any): any;
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.css'
declare module '*.scss'
declare module '*.svg'

declare global {
  interface Window { anima(): any; effects: any; slideshow: any; }
}

interface Window { anima(): any;  effects: any; slideshow: any; }
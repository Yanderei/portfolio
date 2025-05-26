import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Helper function to create SVG data URIs
export function createSVGDataURI(svg: string): string {
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

// Grid background utilities
export const gridBackgrounds = {
  grid: (color: string = "#000") => ({
    backgroundImage: createSVGDataURI(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100" height="100" fill="none" stroke="${color}"><path d="M0 .5H31.5V32"/></svg>`
    ),
  }),
  gridSmall: (color: string = "#000") => ({
    backgroundImage: createSVGDataURI(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${color}"><path d="M0 .5H31.5V32"/></svg>`
    ),
  }),
  dot: (color: string = "#000") => ({
    backgroundImage: createSVGDataURI(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${color}" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
    ),
  }),
};

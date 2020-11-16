/// <reference types="next" />
/// <reference types="next/types/global" />

declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.mp4" {
  const src: string;
  export default src;
}

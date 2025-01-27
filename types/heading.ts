export type Heading = {
  level: number;
  title: string;
  id: string;
};

export interface HeadingWithElement extends Heading {
  element: HTMLElement | null;
}

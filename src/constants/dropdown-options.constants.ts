import { imageUrls } from "./img-urls.constants";

export type DropdownOptionsObjType = {
  value: string;
  label: string;
};

export const avatarDropdownOptions: DropdownOptionsObjType[] = [
  { value: imageUrls.beluga, label: "Beluga" },
  { value: imageUrls.cat2, label: "Pinky" },
  { value: imageUrls.cheemz, label: "Cheemz" },
  { value: imageUrls.doge, label: "Doge" },
];

export const userColorOptions: DropdownOptionsObjType[] = [
  { label: "Red", value: "red" },
  { label: "Blue", value: "blue" },
  { label: "Green", value: "green" },
  { label: "Yellow", value: "yellow" },
  { label: "Pink", value: "pink" },
];

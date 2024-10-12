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
  { label: "Red", value: "text-red-800" },
  { label: "Blue", value: "text-blue-300" },
  { label: "Green", value: "text-green-300" },
  { label: "Yellow", value: "text-yellow-300" },
  { label: "Pink", value: "text-pink-300" },
];

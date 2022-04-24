type Language = {
  id: number;
  src: string;
  label: string;
};

type Tags = "ru" | "en";

type Languages = {
  [key in Tags]: Language;
};

const ru: Language = {
  id: 1,
  src: "/country_images/ru.svg",
  label: "Рус",
};

const en: Language = {
  id: 2,
  src: "/country_images/en.svg",
  label: "Eng",
};

const languages: Languages = {
  ru,
  en,
};

export { languages };
export type { Language };

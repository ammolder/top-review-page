export enum TopLevelCategory {
  Corses,
  Services,
  Books,
  Products,
}

export class TopPageModul {
  firstCategory: TopLevelCategory;
  secondCategory: string;
  title: string;
  category: string;
  hh?: {
    count: number;
    juniorsalary: number;
    middleSalary: number;
    seniorSalary: number;
  };
  advantages: {
    title: string;
    description: string;
  }[];
  seoText: string;
  tagsTitle;
  string;
  tags: string[];
}

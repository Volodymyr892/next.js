// export const getSummaryStats = ()=>{
//   return Promise.resolve({
//     promotions: 427,
//     categories: 8,
//     newCompanies:28,
//     activeCompanies: 670,
//   });
// };

export interface SummaryStats {
  promotions: number;
  categories: number;
  newCategories: number;
  activeCompanies: number;
}
export interface SummarySales{
  id:string;
  companyId:string;
  companyTitle:string;
  sold: number;
  income: number;
}
export interface Country {
  id: string;
  title: string;
}

export interface Category {
  id: string;
  title: string;
}

export enum CompanyStatus {
  Active = 'active',
  NotActive = 'notActive',
  Pending = 'pending',
  Suspended = 'suspended',
}

export interface Company{
  id: string;
  title: string;
  description: string;
  status: CompanyStatus;
  joinedDate: string;
  hasPromotions: boolean;
  categoryId: string;
  categoryTitle: string;
  countryId: string;
  countryTitle: string;
  avatar?:string;
}
export interface Promotion {
  id: string;
  title: string;
  description: string;
  discount: number;
  companyId: string;
  companyTitle: string;
  avatar?:string;
}
export const getSummarySales = ()=>{
  const  items = []
  for (let i = 0; i < 6; i++) {
    items.push({
      companyId:i+1,
      companyTitle: 'Costco Wholesale',
      sold:459,
      income: 600,
    })
  }
  return Promise.resolve(items)
}


export const getSummaryPromotions = ()=>{
  const  items = [];
  for (let i = 0; i < 7; i++) {
    items.push({
      promotionId:i+1,
      promotionName: 'Lorem ipsum dolor',
      companyTitle: 'Costco Wholesale',
      discount: 40,
    })
  }
  return Promise.resolve(items)
}

export const getSummaryCountries = ()=>{
  return Promise.resolve([
    {
      countryId: 1,
      countryTitle: 'Canada',
      count:4,
    },
    {
      countryId: 2,
      countryTitle: 'USA',
      count:4,
    },
    {
      countryId: 3,
      countryTitle: 'Italia',
      count:2,
    },
    {
      countryId: 4,
      countryTitle: 'Ukraine',
      count:2,
    },
    {
      countryId: 5,
      countryTitle: 'Spain',
      count:2,
    },
  ])
}
export const getSummaryCategories =()=>{
  return Promise.resolve([
    {
      countryId: 1,
      categoryTitle: 'Products',
      count:4,
    },
    {
      countryId: 2,
      categoryTitle: 'Products',
      count:8,
    },
    {
      countryId: 3,
      categoryTitle: 'Products',
      count:26,
    },
    {
      countryId: 4,
      categoryTitle: 'Products',
      count:1,
    },
    {
      countryId: 5,
      categoryTitle: 'Products',
      count:37,
    },
    {
      countryId: 6,
      categoryTitle: 'Products',
      count:22,
    },
    {
      countryId: 7,
      categoryTitle: 'Products',
      count:4,
    },
    {
      countryId: 8,
      categoryTitle: 'Products',
      count:4,
    },

  ])
}
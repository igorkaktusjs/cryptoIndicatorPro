// hooks/useNewsTags.ts
import { useGetCoinsMarketQuery } from "../redux/slices/globalApiSlice";
//import { CryptoPanicCurrency } from "../types/types"; 

export interface Tag {
  id: string;
  label: string;
  logo?: string;
  priceChange24h?: number;
}

export const useNewsTags = (currencies = []) => {
  const symbols = currencies.map((c) => c.slug.toLowerCase());

  const { data: coinsData = [] } = useGetCoinsMarketQuery(symbols, {
    skip: currencies.length === 0,
  });

  const tags: Tag[] = currencies.map((currency) => {
    const coin = coinsData.find((c) => c.id === currency.slug.toLowerCase());
    return {
      id: currency.slug,
      label: currency.title,
      logo: coin?.image,
      priceChange24h: coin?.price_change_percentage_24h,
    };
  });

  return tags;
};

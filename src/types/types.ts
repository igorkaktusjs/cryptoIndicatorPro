export interface TrendigCoin {
    id: string;
    name: string;
    symbol: string;
    thumb: string;
}

export interface TopLosersCoin {
    id: string;
    name: string;
    symbol: string;
    image:string;
    current_price: number;
    price_change_percentage_24h: number;
    thumb: string
   }

  export interface TopGainersCoin {
    id: string;
    name: string;
    symbol: string;
    image: string;
    price_change_percentage_24h: number;
    total_volume: number;
    market_cap: number;
  }

  export interface CoinCategoryMarket {
    id: string;
    name: string;
    symbol: string;
    image: string;
    current_price: number;
    market_cap: number;
    price_change_percentage_24h: number;
  }
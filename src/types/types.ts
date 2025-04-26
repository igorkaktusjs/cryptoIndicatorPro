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


  export interface CryptoPanicPost {
    id: number;
    title: string;
    url: string;
    published_at: string;
    created_at: string;
    source: {
      title: string;
      domain: string;
      path: string;
    };
    currencies: { code: string; title: string; slug: string }[];
    tags: string[];
    vote_stats: {
      negative: number;
      positive: number;
      important: number;
      liked: number;
      disliked: number;
      lol: number;
    };
    metadata?: Record<string, any>;
  }
  
  export interface CryptoPanicApiResponse {
    results: CryptoPanicPost[];
    next?: string;
  }
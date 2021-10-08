export class Market {
  id: string;
  symbol: string;
  base: string;
  quote: string;
  baseId: string;
  quoteId: string;
  active: boolean;
  taker: boolean;
  maker: boolean;
  percentage: boolean;
  tierBased: boolean;
  feeSide: string;
  precision: Map<string, number>;
  limits: Map<string, any>;
  info: Map<string, any>;
}

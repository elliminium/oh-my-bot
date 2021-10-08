export class Exchange {
  id: string;
  name: string;
  countries: [string];
  urls: Map<string, string>;
  version: string;
  api: Map<string, string>;
  has: Map<string, boolean>;
  timeFrames: Map<string, string>;
  timeout: number;
  rateLimit: number;
  userAgent: string;
  verbose: boolean;
  markets: Map<string, string>;
  symbols: string;
  currencies: Map<string, string>;
  marketsById: Map<string, string>;
  currenciesById: Map<string, string>;
  apiKey: string;
  secret: string;
  password: string;
  uid: string;
  options: Map<string, any>;
}

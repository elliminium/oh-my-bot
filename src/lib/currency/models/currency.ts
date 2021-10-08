export class Currency {
  id: string;
  code: string;
  name: string;
  active: boolean;
  fee: number;
  precision: number;
  limits: Map<string, any>;
}

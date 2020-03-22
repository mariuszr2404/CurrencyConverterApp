import { RateCompare } from './rate-compare.enum';

export interface ComparisonRate {
  currency: string;
  diff: number;
  diffPercentage: number;
  trend: RateCompare;
}

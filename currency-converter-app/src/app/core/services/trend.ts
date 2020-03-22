import { RateCompare } from 'src/app/shared/models/rate-compare.enum';

export const compareRates = (today: number, yesterday: number) => {
    if (today > yesterday) {
      return RateCompare.INCREASE;
    } else if (today < yesterday) {
      return RateCompare.DECREASE;
    }
    return RateCompare.EQUAL;
};

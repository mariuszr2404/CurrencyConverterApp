import * as moment from 'node_modules/moment';

export const currentDate = moment().format('YYYY-MM-DD');
export const prevDate = (period: number, flag: any ) => moment().subtract(period, flag).format('YYYY-MM-DD');

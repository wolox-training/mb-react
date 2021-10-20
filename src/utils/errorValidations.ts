import i18n from 'config/i18n';
import { Error } from 'utils/types';

export const getNetworkError = (error: Error, customMsg: string) =>
  error.problem === 'NETWORK_ERROR' ? i18n.t('Common:networkError') : customMsg;

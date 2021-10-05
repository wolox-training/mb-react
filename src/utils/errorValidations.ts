import i18n from 'config/i18n';
import { Error } from 'hooks/useRequest';

export const getNetworkError = (error: Error<unknown>, customMsg: string) =>
  error.problem === 'NETWORK_ERROR' ? i18n.t('Common:networkError') : customMsg;

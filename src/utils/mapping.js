import { BankLogo, BankStatus, USDTWalletName } from 'src/constants/bank';

export const mappingBank = data =>
  data
    .map(item => {
      if (item.status === BankStatus.Available) {
        return {
          ...item,
          logo: BankLogo[item.bankCode],
        };
      }
      return undefined;
    })
    ?.filter(item => !!item);

export const mappingBanksVNOption = data =>
  data.map(item => ({
    label: item,
    value: item,
  }));

export const mappingUSDTWallet = data =>
  data?.map(item => ({
    value: item,
    label: USDTWalletName[item],
  }));

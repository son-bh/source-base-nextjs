/* eslint-disable no-useless-escape */
export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;
export const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

export const MAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;

export const IntegrateTabKey = {
  PaymentUI: 'paymentUI',
  PaymentCallback: 'paymentCallback',
  CheckingPayment: 'checkingPayment',
  BankSupportPayment: 'bankSupportPayment',
};

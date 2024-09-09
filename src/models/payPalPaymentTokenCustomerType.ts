/**
 * Paypal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PayPalPaymentTokenCustomerType
 */
export enum PayPalPaymentTokenCustomerType {
  CONSUMER = 'CONSUMER',
  BUSINESS = 'BUSINESS',
}

/**
 * Schema for PayPalPaymentTokenCustomerType
 */
export const payPalPaymentTokenCustomerTypeSchema: Schema<PayPalPaymentTokenCustomerType> = stringEnum(
  PayPalPaymentTokenCustomerType,
  true
);

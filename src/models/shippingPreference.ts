/**
 * Paypal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ShippingPreference
 */
export enum ShippingPreference {
  GETFROMFILE = 'GET_FROM_FILE',
  NOSHIPPING = 'NO_SHIPPING',
  SETPROVIDEDADDRESS = 'SET_PROVIDED_ADDRESS',
}

/**
 * Schema for ShippingPreference
 */
export const shippingPreferenceSchema: Schema<ShippingPreference> = stringEnum(
  ShippingPreference,
  true
);

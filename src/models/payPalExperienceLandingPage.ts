/**
 * Paypal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PayPalExperienceLandingPage
 */
export enum PayPalExperienceLandingPage {
  LOGIN = 'LOGIN',
  GUESTCHECKOUT = 'GUEST_CHECKOUT',
  NOPREFERENCE = 'NO_PREFERENCE',
}

/**
 * Schema for PayPalExperienceLandingPage
 */
export const payPalExperienceLandingPageSchema: Schema<PayPalExperienceLandingPage> = stringEnum(
  PayPalExperienceLandingPage,
  true
);

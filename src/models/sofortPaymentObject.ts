/**
 * Paypal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Information used to pay using Sofort. */
export interface SofortPaymentObject {
  /** The full name representation like Mr J Smith. */
  name?: string;
  /** The [two-character ISO 3166-1 code](/api/rest/reference/country-codes/) that identifies the country or region.<blockquote><strong>Note:</strong> The country code for Great Britain is <code>GB</code> and not <code>UK</code> as used in the top-level domain names for that country. Use the `C2` country code for China worldwide for comparable uncontrolled price (CUP) method, bank card, and cross-border transactions.</blockquote> */
  countryCode?: string;
  /** The business identification code (BIC). In payments systems, a BIC is used to identify a specific business, most commonly a bank. */
  bic?: string;
  /** The last characters of the IBAN used to pay. */
  ibanLastChars?: string;
}

export const sofortPaymentObjectSchema: Schema<SofortPaymentObject> = object({
  name: ['name', optional(string())],
  countryCode: ['country_code', optional(string())],
  bic: ['bic', optional(string())],
  ibanLastChars: ['iban_last_chars', optional(string())],
});

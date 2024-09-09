/**
 * Paypal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';
import { TaxIdType, taxIdTypeSchema } from './taxIdType';

/** The tax ID of the customer. The customer is also known as the payer. Both `tax_id` and `tax_id_type` are required. */
export interface TaxInfo {
  /** The customer's tax ID value. */
  taxId: string;
  /** The customer's tax ID type. */
  taxIdType: TaxIdType;
}

export const taxInfoSchema: Schema<TaxInfo> = object({
  taxId: ['tax_id', string()],
  taxIdType: ['tax_id_type', taxIdTypeSchema],
});

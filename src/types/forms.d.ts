import { FieldValues } from "react-hook-form";

export type DealershipFormData = FieldValues & {
  name: string;
  company: string;
  mobile_phone: string;
  email_address: string;
  postcode: string;
  pay_later: boolean;
  pay_now: boolean;
};

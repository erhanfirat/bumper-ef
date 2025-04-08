"use client";

import Button from "../ui/Button";
import FormInput from "../ui/FormInput";

export default function RegisterForm() {
  return (
    <form className="space-y-4">
      <FormInput label="Name" icon="/icons/user.svg" />
      <FormInput label="Company" icon="/icons/company.svg" />
      <FormInput
        label="Mobile phone number"
        type="tel"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        icon="/icons/phone.svg"
      />
      <FormInput label="Email address" type="email" icon="/icons/email.svg" />
      <FormInput label="Postcode" icon="/icons/house.svg" />
      <FormInput
        label="What services are you interested in?"
        description="Please select the services you’re interested in offering your customers"
        icon="/icons/service.svg"
        type="radio"
        options={[
          { label: "PayLater", value: "paylater" },
          { label: "PayNow", value: "paynow" },
        ]}
        name="payment-type"
      />
      <Button
        label="Register"
        type="submit"
        icon="/icons/right-arrow.svg"
        className="w-full"
        rounded
      />
    </form>
  );
}

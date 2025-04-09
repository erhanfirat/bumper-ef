"use client";

import { FieldValues, useForm } from "react-hook-form";
import Image from "next/image";
import Button from "../ui/Button";
import FormInput from "../ui/FormInput";
import InputRadio from "../ui/InputRadio";

type RegisterFormData = FieldValues & {
  name: string;
  company: string;
  mobile_phone: string;
  email_address: string;
  postcode: string;
  pay_later: boolean;
  pay_now: boolean;
};

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    defaultValues: {
      name: "",
      company: "",
      mobile_phone: "",
      email_address: "",
      postcode: "",
      pay_later: false,
      pay_now: false,
    },
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const doSubmit = (data: RegisterFormData) => {
    console.log("Form submitted successfully", data);
  };

  return (
    <form
      className="space-y-4"
      onSubmit={handleSubmit((data) => doSubmit(data))}
    >
      <FormInput
        label="Name"
        icon="/icons/user.svg"
        type="text"
        {...register("name", {
          required: "Name is required",
          maxLength: {
            value: 255,
            message: "Name cannot be longer than 255 characters",
          },
          pattern: {
            value: /^[a-zA-Z0-9]*$/,
            message: "Name can contain only letters and numbers",
          },
        })}
        error={errors.name?.message}
      />
      <FormInput
        label="Company"
        icon="/icons/company.svg"
        type="text"
        {...register("company", {
          maxLength: {
            value: 255,
            message: "Company cannot be longer than 255 characters",
          },
        })}
        error={errors.company?.message}
      />
      <FormInput
        label="Mobile phone number"
        type="tel"
        icon="/icons/phone.svg"
        {...register("mobile_phone", {
          pattern: {
            value: /^0(\s*)7(\s*)(\d(\s*)){9}$/,
            message: "Mobile phone number is not valid",
          },
        })}
        error={errors.mobile_phone?.message}
      />
      <FormInput
        label="Email address"
        type="text"
        icon="/icons/email.svg"
        {...register("email_address", {
          pattern: {
            value:
              /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: "Email address is not valid",
          },
          maxLength: {
            value: 255,
            message: "Email address cannot be longer than 255 characters",
          },
          minLength: {
            value: 5,
            message: "Email address must be longer than 5 characters",
          },
        })}
        error={errors.email_address?.message}
      />
      <FormInput
        label="Postcode"
        icon="/icons/house.svg"
        {...register("postcode", {
          pattern: {
            value: /^[a-zA-Z0-9]*$/,
            message: "Postcode can contain only letters and numbers",
          },
          maxLength: {
            value: 30,
            message: "Postcode cannot be longer than 30 characters",
          },
        })}
        error={errors.postcode?.message}
      />

      <div className="flex flex-col mt-3 mb-6">
        <p className="flex items-center font-semibold mb-2">
          <Image
            src={"/icons/service.svg"}
            alt="What services are you interested in?"
            width={16}
            height={16}
            className="mr-2"
          />
          What services are you interested in?
        </p>
        <p className="text-gray-700 text-sm mt-[-6px] mb-2">
          Please select the services you’re interested in offering your
          customers
        </p>

        <div className="flex gap-2">
          <InputRadio
            label="PayLater"
            {...register("payment-type", {
              required: "Please select a payment type",
            })}
            error={
              typeof errors["payment-type"]?.message === "string"
                ? errors["payment-type"]?.message
                : undefined
            }
            value="pay_later"
          />
          <InputRadio
            label="PayNow"
            {...register("payment-type", {
              required: "Please select a payment type",
            })}
            error={
              typeof errors["payment-type"]?.message === "string"
                ? errors["payment-type"]?.message
                : undefined
            }
            value="pay_now"
          />
        </div>
        {errors["payment-type"]?.message && (
          <span className="text-red-500 text-sm mt-1">
            {typeof errors["payment-type"]?.message === "string" &&
              errors["payment-type"]?.message}
          </span>
        )}
      </div>

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

import { DealershipFormData } from "@/types/forms";
import { fetcher } from "./api";

export const submitDealershipForm = async (formData: DealershipFormData) => {
  const url = "/dealership"; // Backend API endpoint

  try {
    const response = await fetcher<{ message: string }>(url, {
      body: JSON.stringify(formData),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.error("Form submission failed", error);
    throw error;
  }
};

import { DealershipFormData } from "@/types/forms";
import { memo } from "react";

function DealershipCard({ data }: { data: DealershipFormData }) {
  return (
    <div className="bg-white rounded-4xl p-6 shadow mt-6">
      <h2 className="text-xl font-bold border-b border-gray-300 py-3">
        {data.name}
      </h2>
      <p className="flex justify-between border-b border-gray-300 py-3">
        <strong>Company</strong> {data.company}
      </p>
      <p className="flex justify-between border-b border-gray-300 py-3">
        <strong>Phone</strong> {data.mobile_phone}
      </p>
      <p className="flex justify-between border-b border-gray-300 py-3">
        <strong>Email</strong> {data.email_address}
      </p>
      <p className="flex justify-between border-b border-gray-300 py-3">
        <strong>Postcode</strong> {data.postcode}
      </p>
    </div>
  );
}

export default memo(DealershipCard);

import { DealershipFormData } from "@/types/forms";
import { memo } from "react";

function DealershipCard({ data }: { data: DealershipFormData }) {
  return (
    <div className="border rounded-full p-4 shadow mb-4">
      <h2 className="text-lg font-semibold">{data.company}</h2>
      <p>
        <strong>Phone:</strong> {data.mobile_phone}
      </p>
      <p>
        <strong>Email:</strong> {data.email_address}
      </p>
      <p>
        <strong>Postcode:</strong> {data.postcode}
      </p>
    </div>
  );
}

export default memo(DealershipCard);

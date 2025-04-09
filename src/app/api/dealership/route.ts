import { dealershipFormSchema } from "@/lib/validators";
import { DealershipFormData } from "@/types/forms";
import { NextResponse } from "next/server";

const formDataList: DealershipFormData[] = [];

export async function GET() {
  return NextResponse.json(formDataList);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = dealershipFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          data: body,
          error: "Invalid form data",
          errorDetail: result.error.flatten(),
        },
        { status: 400 }
      );
    }

    formDataList.push(result.data);
    return NextResponse.json(
      { success: true, data: result.data, error: null },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        data: null,
        error: "Server error",
        errorDetail: err instanceof Error ? err.message : String(err),
      },
      { status: 500 }
    );
  }
}

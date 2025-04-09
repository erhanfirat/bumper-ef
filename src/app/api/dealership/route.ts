import { dummyData } from "@/lib/dummyData";
import { dealershipFormSchema } from "@/lib/validators";
import { DealershipFormData } from "@/types/forms";
import { NextRequest, NextResponse } from "next/server";

const formDataList: DealershipFormData[] = dummyData;

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  const page = parseInt(searchParams.get("page") || "0", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);
  const search = (searchParams.get("search") || "").toLowerCase();

  const start = page * limit;
  const end = start + limit;

  const filtered = formDataList.filter((item) =>
    item.company.toLowerCase().includes(search)
  );

  const paginatedData = filtered.slice(start, end);

  return NextResponse.json(paginatedData);
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

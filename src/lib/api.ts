const baseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api";

export async function fetcher<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  try {
    const res = await fetch(`${baseUrl}${url}`, options);

    if (!res.ok) {
      const errorBody = await res.json();
      throw new Error(errorBody?.error || "API Error");
    }

    return await res.json();
  } catch (error) {
    if (error) {
      console.error("Fetch error:", error);
      throw error;
    }
    throw new Error("An unknown error occurred");
  }
}

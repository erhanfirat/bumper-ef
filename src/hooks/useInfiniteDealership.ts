import useSWRInfinite from "swr/infinite";
import { fetcher } from "@/lib/api";
import { DealershipFormData } from "@/types/forms";

const PAGE_SIZE = 10;

export function useInfiniteDealerships(searchTerm: string = "") {
  const getKey = (
    pageIndex: number,
    previousPageData: DealershipFormData[] | null
  ) => {
    if (previousPageData && !previousPageData.length) return null;

    const query = new URLSearchParams({
      page: String(pageIndex),
      limit: String(PAGE_SIZE),
      search: searchTerm,
    });

    return `/dealership?${query.toString()}`;
  };

  const { data, size, setSize, isLoading, isValidating } = useSWRInfinite<
    DealershipFormData[]
  >(getKey, fetcher);

  const dealerships: DealershipFormData[] = data?.flat() ?? [];

  const isReachingEnd = data && data[data.length - 1]?.length < PAGE_SIZE;

  return {
    dealerships,
    size,
    setSize,
    isLoading,
    isValidating,
    isReachingEnd,
  };
}

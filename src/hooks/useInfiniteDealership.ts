import useSWRInfinite from "swr/infinite";
import { fetcher } from "@/lib/api";
import { DealershipFormData } from "@/types/forms";

const PAGE_SIZE = 10;

const getKey = (
  pageIndex: number,
  previousPageData: DealershipFormData[] | null
) => {
  if (previousPageData && !previousPageData.length) return null;
  return `/dealership?page=${pageIndex}&limit=${PAGE_SIZE}`;
};

export function useInfiniteDealerships() {
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

"use client";

import DealershipCard from "@/components/shared/DealershipCard";
import SearchInput from "@/components/shared/SearchInput";
import { useInfiniteDealerships } from "@/hooks/useInfiniteDealership";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export default function Dealerships() {
  const [searchStr, setSearchStr] = useState<string>("");
  const { dealerships, setSize, isReachingEnd } =
    useInfiniteDealerships(searchStr);
  const loaderRef = useRef(null);

  const observerCallback = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting && !isReachingEnd) {
        setSize((prev) => prev + 1);
      }
    },
    [setSize, isReachingEnd]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback);

    const loaderEl = loaderRef.current;
    if (loaderEl) observer.observe(loaderEl);

    return () => {
      if (loaderEl) observer.unobserve(loaderEl);
    };
  }, [observerCallback]);

  const doSearch = (searchText: string) => {
    setSearchStr(searchText);
  };

  // Dealership kartlarını memoize et
  const dealershipCards = useMemo(() => {
    return dealerships.map((dealership) => (
      <DealershipCard key={dealership.company} data={dealership} />
    ));
  }, [dealerships]);

  return (
    <main className="flex-1 py-12 bg-slateblue">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto ">
          <h1 className="text-4xl font-bold text-white mb-8">
            Interested Dealerships
          </h1>
          <div className="bg-white rounded-4xl px-6 py-3">
            <SearchInput
              onSearch={doSearch}
              label="Search Company"
              icon="/icons/company.svg"
              placeholder="Start typing company and press Enter to search"
            />
          </div>
          {dealershipCards}
          {!isReachingEnd && (
            <div ref={loaderRef} className="text-center p-4 text-white">
              Loading more...
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

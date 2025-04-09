"use client";

import DealershipCard from "@/components/shared/DealershipCard";
import SearchInput from "@/components/shared/SearchInput";
import { useInfiniteDealerships } from "@/hooks/useInfiniteDealership";
import { useEffect, useRef } from "react";

export default function Dealerships() {
  const { dealerships, setSize, isReachingEnd } = useInfiniteDealerships();
  const loaderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isReachingEnd) {
        setSize((prev) => prev + 1);
      }
    });

    const loaderEl = loaderRef.current;
    if (loaderEl) observer.observe(loaderEl);

    return () => {
      if (loaderEl) observer.unobserve(loaderEl);
    };
  }, [setSize, isReachingEnd]);

  const doSearch = (searchText: string) => {
    console.log("search for:", searchText);
  };

  return (
    <main className="flex-1 py-12 bg-slateblue">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto ">
          <div className="bg-white rounded-4xl px-6 py-3">
            <SearchInput
              onSearch={doSearch}
              label="Search Company"
              icon="/icons/company.svg"
              placeholder="Start typing company"
            />
          </div>
          {dealerships.map((dealership) => (
            <DealershipCard key={dealership.company} data={dealership} />
          ))}
          {!isReachingEnd && (
            <div ref={loaderRef} className="text-center p-4">
              Loading more...
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

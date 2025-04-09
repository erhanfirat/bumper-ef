"use client";

import DealershipCard from "@/components/shared/DealershipCard";
import SearchInput from "@/components/shared/SearchInput";
import { useInfiniteDealerships } from "@/hooks/useInfiniteDealership";
import { useEffect, useRef, useState } from "react";

export default function Dealerships() {
  const [searchStr, setSearchStr] = useState<string>("");
  const { dealerships, setSize, isReachingEnd } =
    useInfiniteDealerships(searchStr);
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
    setSearchStr(searchText);
  };

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
          {dealerships.map((dealership) => (
            <DealershipCard key={dealership.company} data={dealership} />
          ))}
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

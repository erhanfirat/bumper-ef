"use client";

import SearchInput from "@/components/shared/SearchInput";

export default function Dealerships() {
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
          
        </div>
      </div>
    </main>
  );
}

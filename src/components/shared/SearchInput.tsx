"use client";

import { useEffect, useState } from "react";
import FormInput, { FormInputProps } from "../ui/FormInput";

type SearchInputProps = FormInputProps & {
  onSearch: (term: string) => void;
  delay: number;
};

const DEFAULT_DEBOUNCE_TIME = 500;

export default function SearchInput({
  onSearch,
  delay = DEFAULT_DEBOUNCE_TIME,
  ...restInputProps
}: SearchInputProps) {
  const [searchText, setSearchText] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(searchText);
    }
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(searchText);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [searchText, onSearch]);

  return (
    <FormInput
      value={searchText}
      onChange={handleChange}
      onKeyDown={keyDownHandler}
      {...restInputProps}
    />
  );
}

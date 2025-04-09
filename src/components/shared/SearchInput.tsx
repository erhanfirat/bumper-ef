"use client";

import { useState } from "react";
import FormInput, { FormInputProps } from "../ui/FormInput";

type SearchInputProps = FormInputProps & {
  onSearch: (term: string) => void;
};

export default function SearchInput({
  onSearch,
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

  return (
    <FormInput
      value={searchText}
      onChange={handleChange}
      onKeyDown={keyDownHandler}
      {...restInputProps}
    />
  );
}

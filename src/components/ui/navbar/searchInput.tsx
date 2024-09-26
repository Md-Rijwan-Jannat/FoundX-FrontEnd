import { Input } from "@nextui-org/input";
import { Kbd } from "@nextui-org/kbd";
import { SearchIcon } from "../../ui/icons";
import { forwardRef } from "react";

type TSearchInputProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput = forwardRef<HTMLInputElement, TSearchInputProps>(
  ({ onChange }, ref) => (
    <Input
      ref={ref}
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd
          className="hidden lg:inline-block whitespace-nowrap"
          keys={["command"]}
        >
          Esc
        </Kbd>
      }
      labelPlacement="outside"
      name="search"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      onChange={onChange}
    />
  )
);

SearchInput.displayName = "SearchInput";

export default SearchInput;

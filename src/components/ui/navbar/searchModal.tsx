"use client";

import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { FC, useEffect, useRef, useState } from "react";
import SearchInput from "./searchInput";
import { Divider } from "@nextui-org/divider";
import { useDebounce } from "@/src/hooks/debounce.hook";
import { useSearchItemsMutation } from "@/src/hooks/search.hook";
import { TSearchModalProps } from "@/src/types";
import SearchResultCard from "../cards/searchResultCard";
import { useRouter } from "next/navigation";

const SearchModal: FC<TSearchModalProps> = ({
  text,
  isIconOnly = true,
  variant = "flat",
  color = "secondary",
  endContent,
  modalSize = "md",
  modalPlacement = "top",
  noDataMessage = "No Data",
  classNames = {},
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const {
    mutate: searchItemsFn,
    data: searchData,
    isPending,
    isSuccess,
  } = useSearchItemsMutation();
  const searchTerm = useDebounce(searchValue);

  console.log(searchData);

  useEffect(() => {
    if (searchTerm) {
      searchItemsFn(searchTerm);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (!searchTerm) {
      setSearchResults([]);
    }
    if (!isPending && isSuccess && searchData && searchTerm) {
      setSearchResults(searchData?.data ?? []);
    }
  }, [isPending, isSuccess, searchData, searchTerm]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const value = event.target.value;

    setSearchValue(value);
  };

  // Only trigger search on "Enter" key press or button click
  const handleSeeAll = (query: string) => {
    const splitQuery = query.toString().trim().split(" ").join("+");

    // Navigate to the page with the query
    if (searchTerm) {
      router.push(`/found-items?query=${splitQuery}`);
    }
  };

  // Press enter key to see all items
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        handleSeeAll(searchTerm);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [searchTerm]);

  // Control + K to open search modal
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        onOpen();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [onOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <>
      <Button
        color={color}
        endContent={endContent}
        isIconOnly={isIconOnly}
        radius="full"
        variant={variant}
        onClick={onOpen}
      >
        {text}
      </Button>

      <Modal
        hideCloseButton
        backdrop={"blur"}
        className={`m-2 mt-16 ${classNames.wrapper || ""}`}
        isOpen={isOpen}
        placement={modalPlacement}
        size={modalSize}
        onOpenChange={onOpenChange}
      >
        <ModalContent className={classNames.base}>
          <ModalHeader className={`flex flex-col ${classNames.header || ""}`}>
            <SearchInput ref={inputRef} onChange={handleSearchChange} />
            <Divider className="mt-3 mb-4" />
          </ModalHeader>
          <ModalBody>
            <SearchResultCard
              noDataMessage={noDataMessage}
              searchResults={searchResults}
            />
            <Button
              className="text-default-600"
              size="sm"
              onClick={() => handleSeeAll(searchTerm)}
            >
              See All
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchModal;

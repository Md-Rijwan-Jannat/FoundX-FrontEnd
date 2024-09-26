"use client";

import { useGetCategoriesQuery } from "@/src/hooks/category.hook";
import { TCategory } from "@/src/types";
import { Button } from "@nextui-org/button";
import { useRouter, useSearchParams } from "next/navigation";
import { FC } from "react";
import { FaTags } from "react-icons/fa";
import { IoReload } from "react-icons/io5";

type TFilteringProps = object;

const Filtering: FC<TFilteringProps> = () => {
  const { data: categories } = useGetCategoriesQuery();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategoryFiltering = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());

    const [key, value] = category.split("=");

    console.log(key, value);

    params.set(key, value);

    router.push(`/found-items?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap items-center gap-3 justify-start">
      <Button
        isIconOnly
        className="text-xs"
        radius="md"
        size="sm"
        startContent={<IoReload className="text-secondary-500" />}
        variant="bordered"
        onClick={() => router.push("/found-items")}
      />
      {categories?.data?.map(({ _id, name }: TCategory) => (
        <Button
          key={_id}
          className="text-xs"
          radius="md"
          size="sm"
          startContent={<FaTags className="text-secondary-500" />}
          variant="bordered"
          onClick={() => handleCategoryFiltering(`category=${name}`)}
        >
          {name}
        </Button>
      ))}
    </div>
  );
};

export default Filtering;

import { allDistict } from "@bangladeshi/bangladesh-address";

export const cityOptions = allDistict()
  ?.sort()
  ?.map((city: { city: string }) => ({
    label: city,
    key: city,
  }));

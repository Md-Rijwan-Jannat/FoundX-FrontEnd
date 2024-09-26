import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { TSearchItem } from "@/src/types";

const SearchResultCard = ({
  searchResults,
  noDataMessage,
}: {
  searchResults: TSearchItem[];
  noDataMessage: string;
}) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      {searchResults?.length > 0 ? (
        <div className="flex flex-col gap-6 h-[400px] overflow-y-auto scrollbar-hide">
          {searchResults?.map((item: TSearchItem, index: number) => (
            <Link key={item.id} href={`/found-items/item/${item.id}`}>
              <motion.div
                animate="visible"
                className="flex items-center justify-start gap-5 p-2 border border-default-200 rounded-xl bg-default-100 hover:bg-secondary-50 shadow-md transition-all z-20"
                initial="hidden"
                transition={{
                  delay: index * 0.001,
                  duration: 0.4,
                  type: "spring",
                }}
                variants={itemVariants}
              >
                <Image
                  alt={item?.title}
                  className="rounded-md w-[70px] h-[60px] object-cover object-center"
                  height={100}
                  src={item?.thumbnail}
                  width={100}
                />
                <div className="flex flex-col items-start gap-3">
                  <h3 className="text-sm font-semibold text-secondary-500">
                    {item?.title}
                  </h3>
                  <p className="text-xs text-default-600">
                    {item?.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="flex items-center justify-center text-default-700 my-5">
          {noDataMessage}
        </p>
      )}
    </div>
  );
};

export default SearchResultCard;

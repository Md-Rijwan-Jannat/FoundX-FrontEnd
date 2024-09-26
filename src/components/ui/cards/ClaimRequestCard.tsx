"use client";

import { FC } from "react";
import { TClaimRequest } from "@/src/types";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Chip } from "@nextui-org/chip";
import envConfig from "@/src/config/envConfig";
import { Avatar } from "@nextui-org/avatar";
import UpdateClaimantStatusModal from "../modal/updateClaimantStatusModal";

type TClaimRequestProps = {
  claimRequest: TClaimRequest;
};

const ClaimRequestCard: FC<TClaimRequestProps> = ({ claimRequest }) => {
  const { _id, item, claimant, status, description, answers } =
    (claimRequest as TClaimRequest) || {};

  return (
    <Card isFooterBlurred>
      <div className="flex justify-between items-center w-full p-3 rounded-lg">
        <div className="flex items-center gap-3">
          <Avatar
            className={`cursor-pointer text-[24px] font-bold ${
              claimant?.profilePhoto === envConfig?.default_image
                ? "bg-secondary text-white"
                : ""
            }`}
            name={claimant?.name?.slice(0, 1)}
            src={
              claimant?.profilePhoto &&
              claimant?.profilePhoto !== envConfig?.default_image
                ? claimant?.profilePhoto
                : undefined
            }
          />
          <div>
            <p>{claimant?.name}</p>
            <p className="text-xs">{claimant?.email}</p>
          </div>
        </div>
        <div>
          <Chip
            color={status === "PENDING" ? "warning" : "success"}
            variant="dot"
          >
            {status}
          </Chip>
        </div>
      </div>

      {/* Header */}
      <CardHeader className="flex flex-col items-start">
        <h5 className="text-lg font-semibold">{item?.title}</h5>
        <p className="text-sm text-default-500">{item?.description}</p>
      </CardHeader>

      {/* Body */}
      <CardBody className="p-2">
        <div className="flex flex-col">
          <div className="relative">
            {item?.images && item?.images.length > 0 && (
              <Image
                alt={item.title}
                className="object-cover rounded-lg h-[200px] xl:h-[150px]"
                src={item?.images[0]}
                width="100%"
              />
            )}
            <CardFooter className="justify-between before:bg-white/10 border-default-100 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">
                Found at {item?.location}, {item?.city}
              </p>
              <UpdateClaimantStatusModal claimRequestId={_id} />
            </CardFooter>
          </div>
          <div className="mt-4">
            <p className="text-sm font-semibold text-default-600 mb-1">
              Claimants Message:
            </p>
            <p className="text-sm text-default-500 border border-default-200 p-2 rounded-md">
              {description}
            </p>
          </div>

          {/* Claim Questions & Answers */}
          <div className="mt-6">
            <h5 className="text-sm font-semibold text-default-600 mb-1">
              Claim Verification Answer -
            </h5>
            {answers?.length > 0 ? (
              answers.map((answer, idx) => (
                <div key={idx} className="border-t border-default-100 py-2">
                  <p className="text-sm">
                    <span className="font-semibold">Question: </span>
                    <span className="text-xs font-semibold">
                      {answer.question}
                    </span>
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold text-default-500">
                      Answer:{" "}
                    </span>
                    <span className="text-xs text-default-500 font-normal">
                      {" "}
                      {answer.answer}
                    </span>
                  </p>
                </div>
              ))
            ) : (
              <p className="text-sm">No verification answers provided.</p>
            )}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ClaimRequestCard;

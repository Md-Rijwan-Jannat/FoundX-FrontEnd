import ClaimRequestCard from "@/src/components/ui/cards/ClaimRequestCard";
import NoDataAnimation from "@/src/components/ui/noData";
import { TClaimRequest } from "@/src/types";
import { Divider } from "@nextui-org/divider";
import { FC } from "react";

type TClaimRequestProps = {
  claimRequests: TClaimRequest[];
};

const ClaimRequest: FC<TClaimRequestProps> = ({ claimRequests }) => {
  return (
    <>
      <h2 className="text-default-700 text-sm">Recent Claim Requests</h2>
      <Divider className="my-2" style={{ margin: "20px 0px 25px" }} />

      {/* No data animation */}
      {claimRequests.length === 0 && <NoDataAnimation />}

      {/* Grid layout for claimRequests */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        {claimRequests?.map((claimRequest) => (
          <ClaimRequestCard
            key={claimRequest._id}
            claimRequest={claimRequest}
          />
        ))}
      </div>
    </>
  );
};

export default ClaimRequest;

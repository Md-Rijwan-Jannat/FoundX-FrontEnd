import ClaimRequest from "../../_components/claimRequest/claimRequest";
import ClaimRequestSkeleton from "@/src/components/ui/claimRequestSkeleton";
import { GetMyClaimRequests } from "@/src/services/ClaimRequest";
import { Suspense } from "react";

const ClamRequestPage = async () => {
  const { data: claimRequests } = await GetMyClaimRequests();

  return (
    <Suspense fallback={<ClaimRequestSkeleton />}>
      <ClaimRequest claimRequests={claimRequests} />
    </Suspense>
  );
};

export default ClamRequestPage;

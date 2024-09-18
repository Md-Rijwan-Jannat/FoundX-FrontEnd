import { FC } from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Skeleton } from "@nextui-org/skeleton";
import SocialLoginSkeleton from "./socialSkeleton";

const LoginSkeleton: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-2">
      <Card className="max-w-xl w-full px-2 py-6 md:p-6">
        <CardHeader className="flex flex-col items-center">
          <Skeleton className="h-8 w-32 mb-2 rounded-md" />{" "}
          {/* Placeholder for Logo */}
          <Skeleton className="h-4 w-64 mb-2 rounded-md" />{" "}
          {/* Placeholder for header text */}
        </CardHeader>
        <CardBody>
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <Skeleton className="h-10 w-full rounded-xl" />{" "}
              {/* Placeholder for Email */}
            </div>
            <div className="flex items-center">
              <Skeleton className="h-10 w-full rounded-xl " />{" "}
              {/* Placeholder for Password */}
            </div>
            <div className="w-full mx-auto flex justify-center">
              <Skeleton className="h-12 w-32 rounded-xl" />{" "}
              {/* Placeholder for Log In button */}
            </div>
          </div>
          <SocialLoginSkeleton />
        </CardBody>
        <CardFooter className="mt-4 flex justify-center">
          <Skeleton className="h-4 w-64 rounded-md" />{" "}
          {/* Placeholder for footer text */}
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginSkeleton;

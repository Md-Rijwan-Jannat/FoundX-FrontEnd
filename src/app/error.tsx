"use client";

import { Button } from "@nextui-org/button";
import { useEffect } from "react";
import Player from "lottie-react";
import notFoundAnimation from "../assets/NotFound.json";
import Container from "../components/ui/container";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container>
      <div className="flex items-center flex-col gap-5 justify-center h-screen relative">
        <Player
          autoplay
          loop
          animationData={notFoundAnimation}
          className="rounded-lg"
          style={{ height: "100%", width: "100%" }}
        />
        <div className="absolute mt-[250px] md:mt-[450px] lg:mt-[550px] inset-0 flex items-center justify-center">
          {" "}
          <Button
            className=""
            color="secondary"
            size="sm"
            variant="bordered"
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            Try again
          </Button>
        </div>
      </div>
    </Container>
  );
}

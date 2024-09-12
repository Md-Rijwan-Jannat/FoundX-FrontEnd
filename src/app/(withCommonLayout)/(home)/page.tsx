import { FC } from "react";
import Landing from "@/src/components/modules/home/landing";
import Container from "@/src/components/ui/container";

type THomePageProps = object;

const HomePage: FC<THomePageProps> = async () => {
  return (
    <div>
      <Container>
        <Landing />
      </Container>
    </div>
  );
};

export default HomePage;

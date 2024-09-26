import { FC } from "react";
import Container from "../components/ui/container";
import NotFound from "../components/ui/notFound";

type TNotFoundPageProps = object;

const NotFoundPage: FC<TNotFoundPageProps> = () => {
  return (
    <Container>
      <NotFound />
    </Container>
  );
};

export default NotFoundPage;

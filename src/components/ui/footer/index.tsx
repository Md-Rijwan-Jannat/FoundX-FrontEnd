import { FC } from "react";

import Container from "../container";

type TFooterProps = object;

const Footer: FC<TFooterProps> = () => {
  return (
    <Container>
      <footer>
        <h2 className="text-center">This is a Footer component</h2>
      </footer>
    </Container>
  );
};

export default Footer;

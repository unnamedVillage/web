import { Alert, Container, Paragraph } from "@ogcio/design-system-react";
import React from "react";

const Wip = () => {
  return (
    <>
      <Container>
        <Alert title="Work in Progress" variant="info">
          <React.Fragment key=".0">
            <Paragraph>We're not quite ready yet, sorry.</Paragraph>
          </React.Fragment>
        </Alert>
      </Container>
    </>
  );
};

export default Wip;

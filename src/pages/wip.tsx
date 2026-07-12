import { Alert, Container, Paragraph } from "@ogcio/design-system-react";
import React from "react";

const Wip = () => {
  return (
    <>
      <Container className={"gi-layout-container-max-l"}>
          <div className={"gi-layout-container-1-column"}>
              <Alert title="Work in Progress" variant="info">
          <React.Fragment key=".0">
            <Paragraph>We're not quite ready yet, sorry.</Paragraph>
          </React.Fragment>
        </Alert>
          </div>
      </Container>
    </>
  );
};

export default Wip;

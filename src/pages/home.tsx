import {Container, Heading, Paragraph} from "@ogcio/design-system-react";

const Home = () => {
  return (
    <>
      <main>
        <Container className={"gi-layout-container-max-l"}>
          <div className={"gi-layout-container-3-column"}>
            <div className={"gi-layout-column-2-3"}>
              <div className={"info-section gi-mt-8"}>
                <Heading className="gi-heading-xl gi-mb-4">Welcome to the Unnamed Village</Heading>
              </div>
            </div>
            <div className={"gi-layout-column-1-3"}></div>
            <div className="gi-layout-column-2-3">
                <Heading as="h2">Who are we?</Heading>
                <Paragraph>The Unnamed Village is a group of friends from around the world.</Paragraph>
            </div>
            <div className="gi-layout-column-1-3">
              <div className="sidebar-box gi-mb-9">
                <div className="part-of-container">
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
};

export default Home;

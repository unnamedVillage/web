import { Footer, Link, Stack } from "@ogcio/design-system-react";
import broken from "../images/broken.svg";

const PageFooter = () => {
  return (
    <>
      <Footer
        style={{ position: "fixed", left: 0, right: 0, bottom: 0 }}
        logo={{
          imageLarge: broken,
        }}
        secondarySlot={
          <div>
              <div>Unnamedvilla.ge is not associated with the Government of Ireland <br />
                  or any entity associated with the Government of Ireland.</div>
              <div>Built using <Link href="https://ds.services.gov.ie/">Government of Ireland Design System</Link></div>
          </div>
        }
        utilitySlot={
          <Stack direction={{ base: "column", md: "row" }} gap={4} justify="center"></Stack>
        }
      />
    </>
  );
};

export default PageFooter;

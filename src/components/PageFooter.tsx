import { Footer, Stack } from "@ogcio/design-system-react";
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
            Unnamedvilla.ge is not associated with the Irish Government <br /> or any entity
            associated with the Irish Government.{" "}
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

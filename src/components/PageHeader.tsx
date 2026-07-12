import {
  Container,
  DrawerBody,
  DrawerWrapper,
  Header,
  HeaderLogo,
  HeaderMenuItemButton,
  HeaderMenuItemLink,
  HeaderPrimaryMenu,
  HeaderTitle,
  ListItem,
} from "@ogcio/design-system-react";
import { MenuIcon } from "@ogcio/design-system-react/icons";
import { useState } from "react";
import broken from "../images/broken.svg";
import { useNavigate } from "@tanstack/react-router";

const PageHeader = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <Header variant="default" aria-label="Site header" id="govieHeader">
        <HeaderLogo>
          <a href="/" aria-label="unnamedvilla.ge home">
            <Container className="gi-hidden gi-h-12 gi-w-auto sm:gi-block" role="navigation">
              <img
                src={broken}
                alt={"BrokenImage"}
                className="gi-hidden gi-h-12 gi-w-auto sm:gi-block"
              />
            </Container>
            <Container className="gi-block gi-h-10 gi-w-auto sm:gi-hidden" role="navigation">
              <img
                src={broken}
                alt={"BrokenImage"}
                className="gi-hidden gi-h-12 gi-w-auto sm:gi-block"
              />
            </Container>
          </a>
        </HeaderLogo>
        <HeaderTitle>Unnamed Village</HeaderTitle>
        <HeaderPrimaryMenu>
          <HeaderMenuItemLink href="#" showItemMode="desktop-only">
            News
          </HeaderMenuItemLink>
          <HeaderMenuItemLink showItemMode="desktop-only" onClick={() => navigate({ to: "/wip" })}>
            Resident Services
          </HeaderMenuItemLink>
          <HeaderMenuItemLink href="https://kotp.unnamedvilla.ge" showItemMode="desktop-only">
            King of the Phone
          </HeaderMenuItemLink>
          <HeaderMenuItemButton
            showItemMode="mobile-only"
            aria-label="Toggle main menu"
            aria-expanded={isMenuOpen}
            aria-controls="MobileMenuDrawer"
            aria-haspopup="dialog"
            onClick={toggleMenu}
          >
            <MenuIcon />
          </HeaderMenuItemButton>
        </HeaderPrimaryMenu>
      </Header>
      <DrawerWrapper
        id="MobileMenuDrawer"
        isOpen={isMenuOpen}
        onClose={toggleMenu}
        position="right"
        closeButtonSize="small"
        aria-label="Main menu"
      >
        <DrawerBody>
          <ul>
            <li>
              <ListItem href="#" label="News" />
            </li>
            <li>
              <ListItem onClick={() => navigate({ to: "/wip" })} label="Resident Services" />
            </li>
            <li>
              <ListItem href="https://kotp.unnamedvilla.ge" label="King of the Phone" />
            </li>
          </ul>
        </DrawerBody>
      </DrawerWrapper>
    </>
  );
};

export default PageHeader;

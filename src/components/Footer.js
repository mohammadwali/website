import styled from "styled-components";

import config from "../config";

import Icon from "./Icon";
import FlexContainer from "./FlexContainer";

const FooterContainer = styled(FlexContainer)`
  flex: 0.2;
`;

const IconsContainer = styled(FlexContainer)`
  justify-content: space-evenly;
  align-items: center;
  flex: 0.2;
  margin: 0 auto;

  @media (max-width: 480px) {
    flex: 0.8;
  }
`;

const icons = [
  { href: `mailto:${config.email}`, name: "email", label: "Email" },
  {
    href: `//fb.me/${config.socialHandles.facebook}`,
    name: "fb",
    label: "Facebook",
  },
  {
    href: `//twitter.com/${config.socialHandles.twitter}`,
    name: "twitter",
    label: "Twitter",
  },
  {
    href: `//instagram.com/${config.socialHandles.instagram}`,
    name: "insta",
    label: "Instagram",
  },
];

export default function Footer() {
  return (
    <FooterContainer>
      <IconsContainer>
        {icons.map((icon) => (
          <Icon
            key={icon.name}
            href={icon.href}
            name={icon.name}
            label={icon.label}
          />
        ))}
      </IconsContainer>
    </FooterContainer>
  );
}

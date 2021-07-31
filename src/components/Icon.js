import styled from "styled-components";

const StyledIcon = styled.i`
  &::after {
    content: "";
    width: 36px;
    height: 36px;
    display: inline-flex;
    background-size: contain;
  }

  &.icon-fb::after {
    background-image: url(/assets/icons/facebook-circle-line.svg);
  }

  &.icon-email::after {
    background-image: url(/assets/icons/mail-send-line.svg);
  }

  &.icon-twitter::after {
    background-image: url(/assets/icons/twitter-line.svg);
  }

  &.icon-insta::after {
    background-image: url(/assets/icons/instagram-line.svg);
  }
`;

export default function Icon({ label, name, href }) {
  return (
    <div>
      <a aria-label={label} href={href}>
        <StyledIcon className={`icon-${name}`} />
      </a>
    </div>
  );
}

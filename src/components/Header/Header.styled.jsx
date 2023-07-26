import styled from "@emotion/styled";

export const TextLogo = styled.span`
  font-size: 28px;
  margin-left: 8px;
  font-weight: 600;
  color: #0d6efd;
`;

export const Link = styled.a`
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    scale: 1.02;
  }
`;

export const Wrap = styled.div`
  width: 50%;
  @media (min-width: 992px) {
    width: auto;
  }
`;

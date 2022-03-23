import styled from "@emotion/styled";

const LoadingBase = styled.div`
  background-color: ${({ theme }) => theme.colors.loading};
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;

export default LoadingBase;

import styled from "@emotion/styled";

const boxWidth = 30;

const Container = styled.div<{ box_width: number }>`
  //padding: 100px;
  display: flex;
  position: relative;
  //background-color: aqua;
  text-align: center;
  vertical-align: center;

  @keyframes slide {
    0% {
      transform: translate(0, 0);
    }
    3% {
      transform: ${({ box_width }) => `translate(${box_width + 2}px, 0);`};
    }

    25% {
      transform: ${({ box_width }) => `translate(${box_width + 2}px, 0);`};
    }
    28% {
      transform: ${({ box_width }) =>
        `translate(${box_width + 2}px, ${box_width + 2}px);`};
    }

    50% {
      transform: ${({ box_width }) =>
        `translate(${box_width + 2}px, ${box_width + 2}px);`};
    }
    53% {
      transform: ${({ box_width }) => `translate(0, ${box_width + 2}px);`};
    }

    75% {
      transform: ${({ box_width }) => `translate(0, ${box_width + 2}px);`};
    }
    78% {
      transform: translate(0, 0);
    }

    100% {
      transform: translate(0, 0);
    }
  }
`;

const Loading = styled.svg`
  & rect {
    animation: slide 4s linear infinite;
  }

  & rect#rect1 {
    animation-delay: 0s;
  }

  & rect#rect2 {
    animation-delay: -1.333333333333333s;
  }

  & rect#rect3 {
    animation-delay: -2.666666666666667s;
  }
`;

const PuzzleLoadingIcon = () => {
  return (
    <Container box_width={boxWidth}>
      <div>
        <Loading width={"62"} height={"62"} viewBox="0 0 62 62">
          <g>
            <rect
              className="rect1"
              id="rect1"
              x="0"
              y="0"
              width={String(boxWidth)}
              height={String(boxWidth)}
              fill="#77B0EF"
            />
            <rect
              className="rect2"
              id="rect2"
              x="0"
              y="0"
              width={String(boxWidth)}
              height={String(boxWidth)}
              fill="#80D692"
            />
            <rect
              className="rect3"
              id="rect3"
              x="0"
              y="0"
              width={String(boxWidth)}
              height={String(boxWidth)}
              fill="#8B86E5"
            />
          </g>
        </Loading>
      </div>
    </Container>
  );
};

export default PuzzleLoadingIcon;

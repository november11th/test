import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import SliderUnstyled from "@mui/base/SliderUnstyled";
import { FaPlay, FaPause } from "react-icons/fa";
import Text from "../../elements/Text";
import { theme } from "../../../styles/theme";

//슬라이더 스타일링
const StyledSlider = styled(SliderUnstyled)`
  color: ${({ theme }) => theme.colors.chart0C};
  height: 4px;
  width: calc(900px - 140px - 60px);
  padding: 13px 0;
  display: inline-block;
  position: relative;
  cursor: pointer;
  touch-action: none;

  & .MuiSlider-rail {
    display: block;
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.colors.grayEa};
  }

  & .MuiSlider-track {
    display: block;
    position: absolute;
    height: 4px;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.colors.chart0C};
  }

  & .MuiSlider-thumb {
    position: absolute;
    width: 20px;
    height: 20px;
    /* margin-right: 8px; */
    margin-top: -8px;
    box-sizing: border-box;
    border-radius: 50%;
    outline: 0;
    transform: translateX(-20px);
    background-color: ${({ theme }) => theme.colors.chart0C};
  }
`;

const Container = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
`;
const StyledText = styled(Text)`
  width: 140px;
`;
const ToggleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 60px;
`;

interface Props {
  value: number;
  setValue: any;
  initial: number;
  // label: string
  min: number;
  max: number;
  step: number;
  delay: number;
  className?: string;
}

const PlayController = ({
  value,
  setValue,
  initial,
  min,
  max,
  step,
  delay,
  className,
}: Props) => {
  const [isPlayedOn, setIsPlayedOn] = useState(true);

  // 상태값이 바뀔때마다 isPlayedOn, value 값을 확인하여 타이머를 조율
  useEffect(() => {
    if (isPlayedOn === false) return;
    if (value >= max) return;
    const timer = setTimeout(() => setValue((x: number) => x + step), delay);
    return () => clearTimeout(timer);
  }, [isPlayedOn, value, max, delay, setValue, step]);

  // 재생멈춤버튼
  const PlayPauseToggle = () => {
    if (isPlayedOn) {
      return (
        <FaPause
          color={theme.colors.chart0C}
          size={30}
          onClick={() => setIsPlayedOn(!isPlayedOn)}
        />
      );
    }
    return (
      <ToggleContainer>
        <FaPlay
          color={theme.colors.chart0C}
          size={30}
          onClick={() => setIsPlayedOn(!isPlayedOn)}
        />
      </ToggleContainer>
    );
  };

  // 슬라이더를 바꾸면 값이 바뀌고 멈춤
  const sliderChange = (e: any, newValue: any) => {
    setValue(newValue);
    setIsPlayedOn(false);
  };

  // 플레이어 label
  const getPlayerLabel = (value: number): string => {
    const h = Math.floor(value / 60); //0 ~ 23
    let ampm;
    switch (true) {
      case value === 12 * 60:
        ampm = "정오";
        break;
      case value > 12 * 60:
        ampm = "오후";
        break;
      default:
        ampm = "오전";
        break;
    }
    const hh = h > 12 ? ("00" + (h - 12)).slice(-2) : ("00" + h).slice(-2);
    const mm = ("00" + (value - h * 60)).slice(-2);

    return `${ampm} ${hh}:${mm}`;
  };

  return (
    <Container data-testid="playController" className={className}>
      <StyledText type={"copy"} scale={"2"}>
        {getPlayerLabel(value)}
      </StyledText>
      <ToggleContainer>
        <PlayPauseToggle />
      </ToggleContainer>
      <StyledSlider
        defaultValue={initial}
        value={value}
        min={min}
        max={max}
        step={step}
        marks={false}
        onChange={sliderChange}
        valueLabelDisplay="off"
        aria-labelledby="discrete-slider-always"
      />
    </Container>
  );
};

PlayController.defaultProps = {
  value: 0,
  setValue: console.log,
  initial: 330,
  min: 330,
  max: 1430,
  step: 10,
  delay: 500,
};

export default PlayController;

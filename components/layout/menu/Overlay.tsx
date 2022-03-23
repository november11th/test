import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Overlay = styled(motion.div)<{ open: boolean }>`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: transparent;
  pointer-events: ${({ open }) => (open ? "auto" : "none")};
`;

export default Overlay;

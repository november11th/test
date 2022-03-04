import React from "react";
import styled from "@emotion/styled";
import Overlay from "./Overlay";
import MenuContents from "./MenuContents";

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 999;
`;

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const MenuModal = ({ isOpen, onClose }: Props) => {
  return (
    <Container>
      <Overlay
        open={isOpen}
        animate={{
          backgroundColor: isOpen ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0)",
        }}
        transition={{ duration: isOpen ? 0.2 : 0.7 }}
        onClick={onClose}
      />
      <MenuContents isOpen={isOpen} onClose={onClose} />
    </Container>
  );
};

export default MenuModal;

import { useState } from "react";

export function useToggle() {
  const [toggle, setToggle] = useState(false);

  const toggler = () => setToggle((curToggleState) => !curToggleState);
  return {
    toggle,
    toggler,
  };
}

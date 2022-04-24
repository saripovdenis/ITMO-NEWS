import { useState } from "react";

function useToggle(init: boolean): [boolean, () => void] {
  const [state, setState] = useState<boolean>(init);
  return [state, () => setState((v) => !v)];
}

export default useToggle;

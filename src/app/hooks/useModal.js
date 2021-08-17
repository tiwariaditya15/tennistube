import { useSelector } from "react-redux";
import { selectModalInteraction } from "../../features/Interactions/interactionsSlice";

export function useModal() {
  const modal = useSelector(selectModalInteraction);
  return {
    modal,
  };
}

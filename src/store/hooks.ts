import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import { AppDispatch, RootState } from "./store";

type DispatchFunction = () => AppDispatch;

export const useCalculateDispacth: DispatchFunction = useDispatch;
export const useCalculateSElector: TypedUseSelectorHook<RootState> =
  useSelector;

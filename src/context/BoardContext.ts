import { createContext } from "react";
import type { useTasks } from "../hooks/useTasks";

export const BoardContext = createContext<
  ReturnType<typeof useTasks> | undefined
>(undefined);

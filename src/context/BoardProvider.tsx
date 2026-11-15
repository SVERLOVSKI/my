import type { ReactNode } from "react";
import { useTasks } from "../hooks/useTasks";
import { BoardContext } from "./BoardContext";

export function BoardProvider({ children }: { children: ReactNode }) {
  const board = useTasks();

  return (
    <BoardContext.Provider value={board}>
      {children}
    </BoardContext.Provider>
  );
}

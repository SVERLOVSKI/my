import Board from './components/Board/Board'
import { BoardProvider } from './context/BoardProvider'
import { ThemeProvider } from './context/ThemeProvider'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <BoardProvider>
        <Board />
      </BoardProvider>
    </ThemeProvider>
  )
}

export default App

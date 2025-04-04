export function Reset ({ resetGame, children }) {
  return (
    <button onClick={resetGame}>{children}</button>
  )
}

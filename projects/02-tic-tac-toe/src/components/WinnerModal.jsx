import { Square } from './Square.jsx'
import { Reset } from './Reset.jsx'

export function WinnerModal ({ winner, resetGame }) {
  if (winner === null) return null

  const winnerText = winner === false ? 'Empate' : 'Ganó:'

  return (
    <section className='winner'>
      <div className='text'>
        <h2>{winnerText}</h2>

        <header className='win'>
          {winner && <Square>{winner}</Square>}
        </header>

        <footer>
          <Reset resetGame={resetGame}>Empezar de nuevo</Reset>
        </footer>
      </div>
    </section>
  )
}

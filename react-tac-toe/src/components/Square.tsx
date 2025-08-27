export default function Square({value, onSquareClick} : {value: string | null, onSquareClick: () => void}) {
  return (
    <button onClick={onSquareClick}className="square border border-grey-200 text-black">{value}</button>
  )
}

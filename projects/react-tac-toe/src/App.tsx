import Game from "./components/Game";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-oxford-900 to-charcoal-700 text-lavender p-4">
      <h1 className="text-4xl font-bold mb-6 tracking-wide">React-Tac-Toe</h1>
      <Game />
    </div>
  );
}

import Game from "./components/Game";

type AppProps = {
  variant?: "standalone" | "embedded";
  className?: string; // optional wrapper tweaks from umbrella
};

export default function App({ variant = "standalone", className = "" }: AppProps) {
  const isEmbedded = variant === "embedded";

  return (
    <div
      className={[
        "min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-oxford-900 to-charcoal-700 text-lavender p-4",
        className,
      ].join(" ")}
    >
      {!isEmbedded && (
        <h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide">
          React-Tac-Toe
        </h1>
      )}

      <Game />
    </div>
  );
}

import { Suspense, lazy } from "react";

const ReactTacToe = lazy(() =>
  import("../../../projects/react-tac-toe/src/export").then(m => ({ default: () => <m.ReactTacToe variant="embedded" /> }))
);

export default function ReactTacToeRoute() {
  return (
    <Suspense fallback={<div className="p-8">Loading React-Tac-Toe…</div>}>
      <ReactTacToe />
    </Suspense>
  );
}

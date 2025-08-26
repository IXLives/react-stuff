import { useState } from "react";
import { FaQuoteLeft, FaQuoteRight, FaSyncAlt } from "react-icons/fa";

function App() {
  const [quote, setQuote] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const fetchQuote = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://api.adviceslip.com/advice`).then((res) =>
        res.json()
      );
      if (!res.ok) {
        console.error("error fetching from api");
      }
      setQuote(res.slip.advice);
      setLoading(false);
    } catch (e) {
      console.error(`${e}: error`);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: "url(https://i.imgur.com/vgqEbKB.jpeg)" }}
    >
      <div className="backdrop-blur-md bg-white/70 border border-white/50 shadow-2xl rounded-2xl p-10 max-w-2xl w-full text-center text-black">
        <FaQuoteLeft className="text-5xl text-purple-600 mb-4 mx-auto" />
        <p className="text-2xl font-bold italic text-gray-900 transition-opacity duration-500 ease-in-out">
          {loading ? "Loading..." : `"${quote}"`}
        </p>
        <FaQuoteRight className="text-5xl text-purple-600 mb-4 mx-auto" />
        <div className="mt-10 flex justify-center">
          <button 
            className="flex items-center gap-2 px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white font-semibold text-lg rounded-full transition-all duration-300 shadow-md"
            onClick={fetchQuote}
          >
            <FaSyncAlt className={`${loading ? "animate-spin" : ""}`} />
            {loading ? "Generating..." : "Generate"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

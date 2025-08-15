export default function Navbar({ theme, setTheme }) {
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="fixed z-20 w-full top-0 flex justify-between items-center text-gray-50 px-5 py-2 bg-pastel">
      <h1>IB</h1>
      <nav className="flex gap-10">
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded"
      >
        Toggle Theme
      </button>
    </div>
  );
}

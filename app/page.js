export default function Home() {
  const name = "วงศกร กริชคมสัน";
  
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500">
      <div className="text-8xl mb-6">🧍‍♀️</div>
      <div className="text-center text-white">
        <h1 className="text-7xl font-bold mb-4">
           {name}
        </h1>
        <p className="text-xl">Web Developer · Bangkok</p>
        <div className="flex gap-4 justify-center">
          <button className="bg-white text-black hover:bg-gray-200 font-bold py-2 px-4 rounded">
            Projects
          </button>
          <button className="bg-black text-white hover:bg-gray-200 font-bold py-2 px-4 rounded">
            Contact
          </button>
        </div>
      </div>
    </main>
  );
}
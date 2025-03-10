export function Hero() {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat text-white p-8" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=1600&q=80&auto=format&fit=crop&crop=edges')" }}>
      <div className="bg-gray-900 bg-opacity-70 p-10 rounded-lg max-w-2xl mx-auto">
        <h1 className="text-5xl font-extrabold">The Ultimate Solution for Your Needs</h1>
        <p className="mt-4 text-lg max-w-xl mx-auto text-center">Welcome to the most flexible and powerful landing page. Designed to capture attention and drive engagement.</p>
        <div className="mt-6">
          <button className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-600">Get Started</button>
          <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg ml-4 hover:bg-gray-700 hover:text-white">Learn More</button>
        </div>
      </div>
    </section>
  );
}
"use client";

export function Hero() {
  return (
    <section 
      className="w-full min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat text-white p-6 md:p-8" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=1600&q=80&auto=format&fit=crop&crop=edges')" }}
    >
      <div className="bg-gray-900 bg-opacity-70 p-6 md:p-10 rounded-lg max-w-lg md:max-w-2xl mx-auto flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">The Ultimate Solution for Your Needs</h1>
        <p className="mt-3 md:mt-4 text-base md:text-lg max-w-md md:max-w-xl text-center">
          Welcome to the most flexible and powerful landing page. Designed to capture attention and drive engagement.
        </p>
        <div className="mt-4 md:mt-6 flex flex-col md:flex-row gap-3 md:gap-4 justify-center w-full">
          <button 
            className="bg-gray-700 text-white px-5 py-2 md:px-6 md:py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-600 w-full md:w-auto text-center"
            onClick={() => alert('Primary CTA Clicked!')}
          >
            Get Started
          </button>
          <button 
            className="bg-transparent border-2 border-white text-white px-5 py-2 md:px-6 md:py-3 rounded-lg hover:bg-gray-700 hover:text-white w-full md:w-auto text-center"
            onClick={() => alert('Secondary CTA Clicked!')}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
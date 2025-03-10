export function Gallery() {
  return (
    <section className="w-full p-12 bg-white text-center">
      <h2 className="text-4xl font-semibold">Our Work in Action</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="relative rounded-lg shadow-lg overflow-hidden">
          <img src="https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800&q=80&auto=format&fit=crop&crop=edges" alt="Project 1" className="w-full h-64 object-cover opacity-80" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white font-bold text-xl">Project 1</div>
        </div>
        <div className="relative rounded-lg shadow-lg overflow-hidden">
          <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&q=80&auto=format&fit=crop" alt="Project 2" className="w-full h-64 object-cover opacity-80" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white font-bold text-xl">Project 2</div>
        </div>
        <div className="relative rounded-lg shadow-lg overflow-hidden">
          <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80&auto=format&fit=crop&crop=edges" alt="Project 3" className="w-full h-64 object-cover opacity-80" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white font-bold text-xl">Project 3</div>
        </div>
      </div>
    </section>
  );
}
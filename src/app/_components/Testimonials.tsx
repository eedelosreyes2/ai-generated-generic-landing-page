export function Testimonials() {
  return (
    <section className="w-full p-12 bg-white text-center">
      <h2 className="text-4xl font-semibold">What Our Users Say</h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Hear from our satisfied users who love the simplicity and efficiency of our landing page.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
          <p className="text-gray-700 italic">"This landing page made it so easy to get started. I launched my site in minutes!"</p>
          <h3 className="mt-4 font-bold">- Alex D.</h3>
        </div>
        <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
          <p className="text-gray-700 italic">"I love the clean design and speed. Everything just works! Highly recommended."</p>
          <h3 className="mt-4 font-bold">- Sarah M.</h3>
        </div>
      </div>
    </section>
  );
}
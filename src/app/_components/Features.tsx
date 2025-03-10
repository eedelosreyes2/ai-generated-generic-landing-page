export function Features() {
  return (
    <section className="w-full p-12 bg-gray-100 text-center">
      <h2 className="text-4xl font-semibold">Key Features</h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Discover what makes our landing page stand out. Designed for simplicity, speed, and engagement.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold">🚀 Lightning Fast</h3>
          <p className="mt-2 text-gray-600">Optimized for performance, ensuring quick load times and a seamless user experience.</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold">🎨 Customizable Design</h3>
          <p className="mt-2 text-gray-600">Easily adaptable to any brand with flexible styling and content options.</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold">🔒 Secure & Reliable</h3>
          <p className="mt-2 text-gray-600">Built with modern security best practices to keep your data safe.</p>
        </div>
      </div>
    </section>
  );
}
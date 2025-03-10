export function FAQ() {
  return (
    <section className="w-full p-12 bg-gray-100 text-center">
      <h2 className="text-4xl font-semibold">Frequently Asked Questions</h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Find answers to some of the most common questions about our landing page.</p>
      <div className="mt-6 text-left max-w-2xl mx-auto">
        <div className="mb-4">
          <h3 className="font-bold text-lg">📌 What is this landing page for?</h3>
          <p className="text-gray-600">This landing page is designed to be a flexible, easy-to-use template for any purpose.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-bold text-lg">🔧 Can I customize the design?</h3>
          <p className="text-gray-600">Yes! The layout and content can be fully customized to match your brand.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-bold text-lg">⚡ Is it mobile-friendly?</h3>
          <p className="text-gray-600">Absolutely! This landing page is fully responsive and looks great on any device.</p>
        </div>
      </div>
    </section>
  );
}

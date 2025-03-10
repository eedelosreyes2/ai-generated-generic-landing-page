export function Pricing() {
  return (
    <section className="w-full p-12 bg-white text-center">
      <h2 className="text-4xl font-semibold">Choose Your Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="p-6 bg-gray-100 shadow-lg rounded-lg">Basic - $0/month</div>
        <div className="p-6 bg-gray-200 shadow-lg rounded-lg">Pro - $29/month</div>
        <div className="p-6 bg-gray-300 shadow-lg rounded-lg">Enterprise - $99/month</div>
      </div>
    </section>
  );
}
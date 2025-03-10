export function Contact() {
  return (
    <section className="w-full p-12 bg-white text-center">
      <h2 className="text-4xl font-semibold">Get in Touch</h2>
      <p className="mt-2 text-gray-600">We&apos;d love to hear from you! Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
      <form className="mt-6 max-w-lg mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="border p-3 rounded-lg w-full" type="text" placeholder="Your Name" />
          <input className="border p-3 rounded-lg w-full" type="email" placeholder="Your Email" />
        </div>
        <textarea className="border p-3 rounded-lg w-full mt-4" rows={4} placeholder="Your Message"></textarea>
        <button className="mt-6 bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-600">Send Message</button>
      </form>
    </section>
  );
}
export function ContactForm({ compact = false }: { compact?: boolean }) {
  return (
    <form className="grid gap-4 rounded-lg border border-ink/10 bg-white p-5 shadow-soft md:p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-ink">
          Name
          <input className="focus-ring rounded-md border border-ink/15 px-3 py-3 font-normal" name="name" required />
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink">
          Email
          <input
            className="focus-ring rounded-md border border-ink/15 px-3 py-3 font-normal"
            name="email"
            type="email"
            required
          />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-ink">
          Phone
          <input className="focus-ring rounded-md border border-ink/15 px-3 py-3 font-normal" name="phone" type="tel" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink">
          Business Name
          <input className="focus-ring rounded-md border border-ink/15 px-3 py-3 font-normal" name="business" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-bold text-ink">
        Message
        <textarea
          className="focus-ring min-h-32 rounded-md border border-ink/15 px-3 py-3 font-normal"
          name="message"
          required
        />
      </label>
      <button className="focus-ring min-h-12 rounded-md bg-medway px-5 py-3 text-sm font-bold text-white hover:bg-medway/90">
        {compact ? "Request a Free Website Concept" : "Get a Free Website Mockup"}
      </button>
    </form>
  );
}

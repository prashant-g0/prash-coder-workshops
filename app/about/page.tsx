export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
          About the Workshop
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900">
          Learn by Building
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Our workshops focus on practical learning. Instead of simply
          learning concepts, participants work on real projects and practice
          the tools and workflows used by developers every day.
        </p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Practical Learning
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            Workshops are designed around hands-on activities so participants
            can apply what they learn immediately.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Real Workflows
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            Learn tools and workflows through projects that resemble the way
            developers collaborate in real-world environments.
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-8 text-center">
        <h2 className="text-xl font-semibold text-gray-900">
          Learn. Build. Collaborate.
        </h2>

        <p className="mx-auto mt-3 max-w-xl leading-7 text-gray-600">
          The goal is simple: learn the fundamentals, practice them together,
          and leave with something you have actually built.
        </p>
      </div>
    </section>
  );
}
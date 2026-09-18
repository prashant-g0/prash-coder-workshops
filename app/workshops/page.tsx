import Link from "next/link";

const workshops = [
  {
    title: "Git & GitHub Workshop",
    description:
      "Learn Git fundamentals and practice a complete GitHub workflow through a hands-on project.",
    topics: [
      "Git fundamentals",
      "Branches & commits",
      "GitHub & Pull Requests",
      "Collaboration workflow",
    ],
  },
];

export default function WorkshopsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
          Workshops
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900">
          Learn by Doing
        </h1>

        <p className="mt-4 text-lg leading-7 text-gray-600">
          Explore hands-on workshops designed to help you learn practical
          skills through real projects.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {workshops.map((workshop) => (
          <article
            key={workshop.title}
            className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-gray-900">
              {workshop.title}
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              {workshop.description}
            </p>

            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-900">
                What you&apos;ll practice
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {workshop.topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href="/"
              className="mt-8 inline-block rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-700"
            >
              Learn More
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
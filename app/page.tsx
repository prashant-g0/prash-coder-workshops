import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-wider text-gray-500">
          Learn • Build • Collaborate
        </p>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Learn Git & GitHub by Building Together
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Hands-on workshops designed to help you understand version control,
          collaboration, and real-world GitHub workflows.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/workshops"
            className="rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-700"
          >
            Explore Workshops
          </Link>

          <Link
            href="/testimonials"
            className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900 transition hover:bg-gray-50"
          >
            Student Testimonials
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
              The Approach
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
              Learn by doing
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Instead of learning Git and GitHub only through theory, our
              workshops focus on practical workflows that developers use when
              working on real projects.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900">
                Hands-on Practice
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Practice Git commands and workflows through real tasks.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900">
                Real Collaboration
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Learn branches, pull requests, reviews, and collaboration.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900">
                Build Together
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Contribute to a shared project and experience a real workflow.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
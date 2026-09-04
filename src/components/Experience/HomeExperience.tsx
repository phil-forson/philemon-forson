import Link from "next/link";
import { professionalExperience } from "@/data/experience";

const HomeExperience = () => {
  return (
    <section id="experience" className="w-full py-8 lg:pt-16 lg:pb-16">
      <h2 className="text-2xl lg:text-4xl font-semibold mb-8 tracking-[-0.98px]">
        Experience
      </h2>

      <ol className="space-y-4">
        {professionalExperience.map((job) => (
          <li
            key={`${job.company}-${job.dates}`}
            className="bg-[rgba(var(--color-background))] border border-[var(--ds-gray-200-value)] rounded-xl p-6"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
              <div>
                <h3 className="text-lg font-semibold text-[var(--ds-gray-900)]">
                  {job.title}
                </h3>
                {job.companyUrl ? (
                  <a
                    href={job.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 rounded-sm"
                  >
                    {job.company}
                  </a>
                ) : (
                  <p className="text-[var(--ds-gray-900)]">{job.company}</p>
                )}
                <p className="text-sm text-[var(--ds-gray-600)]">
                  {job.location}
                </p>
              </div>
              <p className="text-sm text-[var(--ds-gray-900)] sm:text-right flex-shrink-0">
                {job.dates}
              </p>
            </div>
            {job.highlights[0] && (
              <p className="mt-3 text-sm text-[var(--ds-gray-900)] leading-relaxed">
                {job.highlights[0]}
              </p>
            )}
          </li>
        ))}
      </ol>

      <div className="mt-8">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 rounded-sm"
        >
          Full background
        </Link>
      </div>
    </section>
  );
};

export default HomeExperience;

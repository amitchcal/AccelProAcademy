import Link from "next/link";
import { courses } from "@/lib/courses";

export function AcademyArchitecture({ compact = false }: { compact?: boolean }) {
  return <div className={`architecture ${compact ? "architecture-compact" : ""}`} aria-label="AccelPro Academy architecture">
    <div className="architecture-parent">
      <strong>AccelPro Academy</strong>
      <small>Parent brand and learning platform</small>
    </div>
    <div className="architecture-branches">
      {courses.map((course) => <article className="architecture-branch" id={compact ? undefined : course.id} key={course.id}>
        <div className="architecture-heading">
          <h3>{course.shortTitle}</h3>
          <small>{course.format}</small>
        </div>
        <ul>{course.programmes.map((programme) => <li key={programme}>{programme}</li>)}</ul>
        <Link href={`/programmes#${course.id}-details`} aria-label={`Explore ${course.title}`}>Explore academy <span aria-hidden="true">→</span></Link>
      </article>)}
    </div>
    <p className="architecture-foot">One parent brand, distinct learner promises, shared operating backbone</p>
  </div>;
}

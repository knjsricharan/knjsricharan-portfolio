// Skills.jsx - The standalone "Technologies & Tools" section was deleted
// and folded into About.jsx per the homepage restructure.
// Reusable ProjectTag component for project card tags.

export const ProjectTag = ({ tag }) => (
  <span
    className="font-mono text-[10px] px-2 py-1 border border-[var(--rule)] text-[var(--ink-3)] uppercase tracking-tighter cursor-default"
  >
    {tag}
  </span>
);

const Skills = () => null;

export default Skills;

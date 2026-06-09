import type { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border border-gray-800 bg-terminal rounded p-5 hover:border-accent transition-colors duration-200">
      {/* Project ID */}
      <div className="font-mono text-xs text-muted mb-2">{project.id}</div>

      {/* Title */}
      <h3 className="font-mono text-lg font-semibold text-white mb-2">{project.title}</h3>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-xs border border-gray-700 text-gray-400 px-2 py-0.5"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-accent hover:underline"
          >
            Live ↗
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-muted hover:text-accent hover:underline"
          >
            GitHub ↗
          </a>
        )}
      </div>
    </div>
  );
}

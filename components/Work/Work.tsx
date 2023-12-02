import ProjectCard from './ProjectCards'
import Split from 'components/SplitText'
export default function Work() {
  return (
    <div className="relative">
      <div className="mx-auto w-full px-12 pb-28 md:w-4/5">
        <div className="relative z-10">
          <h1 className="split-lines text-6xl font-bold tracking-wide md:text-8xl ">
            <Split>Projects</Split>
          </h1>
        </div>
        <div className="mt-16 flex flex-col gap-10 md:mt-28">
          <ProjectCard
            title="Github Readme Activity Graph"
            description="An open source project to show the last 30 days contributions of the github users on an animated graph."
            imageUrl="/img/activity-graph.png"
            github="https://github.com/Ashutosh00710/github-readme-activity-graph"
            live="https://ashutosh00710.github.io/github-readme-activity-graph/"
            number="01"
          />
          <ProjectCard
            title="Forkify"
            description="A recipe finder application using MVC architecture."
            imageUrl="/img/forkify.png"
            github="https://github.com/Kshitij978"
            live="https://kshitij978.github.io/Forkify/"
            number="02"
          />
        </div>
        <span className="watermark absolute -left-10 -top-24 -z-20 hidden text-[12rem] font-extrabold md:block">
          EXPERIENCE
        </span>
        <span className="watermark absolute bottom-5 right-0 -z-20 hidden text-[12rem] font-extrabold md:block">
          EXPERIENCE
        </span>
      </div>
    </div>
  )
}

import ProjectCard from './ProjectCards'
import Split from 'components/SplitText'
export default function Work() {
  return (
    <div className="relative">
      <div className="w-full px-12 mx-auto pb-28 md:w-4/5">
        <div className="relative z-10">
          <h1 className="text-6xl font-bold tracking-wide split-lines md:text-8xl ">
            <Split>Projects</Split>
          </h1>
        </div>
        <div className="flex flex-col gap-10 mt-16 md:mt-28">
          <ProjectCard
            title="Github Readme Activity Graph"
            description="An open source project to show the last 30 days contributions of the github users on an animated graph."
            imageUrl="/img/Second.jpg"
            number="01"
          />
          <ProjectCard
            title="Forkify"
            description="A recipe finder application using MVC architecture."
            imageUrl="/img/Second.jpg"
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

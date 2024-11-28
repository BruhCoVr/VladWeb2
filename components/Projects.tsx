import Project from "@/components/Project";
import React from "react";
export default function Projects() {
  return (
    <div className="w-full p-12">
      <h1 className="text-2xl font-bold">Projects</h1>
      <div className="w-full flex flex-wrap space-x-4 mt-4">
        <Project title="Crayons to Calculators" features={["Github", "Godot", "Team Project"]} date="October 2023"
        description="This was a game made for MruHacks 2023 it was the first time working in Godot for me and my teammates. 
        Things that I learned in this project was how to work on a team using git and on a project."
        link="https://github.com/BruhCoVr/CrayonsToCalculators_working"/>
        <Project title="Activify" features={["Flask", "Team Project", "Html"]} date="October 2024" description="This was a web app created for
        MruHacks 2024, that would use the spotify API to get user data to genereate a playlist for an activity."link="https://github.com/BruhCoVr/Activify"/>
        <Project title="This website!" features={["React", "Portfolio", "Html"]} date="Ongoing Started May 2024" description="Made this website to learn react
        and to make it my personal portfolio with some of my personal interest."link="https://github.com/BruhCoVr/VladWeb"/>
      </div>
    </div>
  );
}
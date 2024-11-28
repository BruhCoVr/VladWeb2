import React from "react";
export default function Project({ title, features, date, description, link }: {title: string; features: string[]; date: string; description: string; link: string}){
    return(
        <div className="flex-1 p-4 bg-black rounded-lg">
            <h2 className="font-bold text-xl">{title}</h2>
            <div className="flex justify-between items-center">
                <small className="text-white">{date}</small>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 inline-block bg-blue-500 text-white rounded-md p-1 text-center hover:bg-blue-600 transition"
                >
                    View Project
                </a>
                </div>
            <hr className="my-1"/>
            <p className="leading-7">{description}</p>
            <ul className="flex flex-row space-x-2 pt-2">
                {features.map((feature, index) => (
                <li key={index} className="bg-gray-500 rounded-md p-1 px-2 text-sm">{feature}</li>))}
            </ul>
        </div>

    
    );
}
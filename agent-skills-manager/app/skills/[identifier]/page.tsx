"use client";

import { useParams } from "next/navigation";
import { Skill, SKILLS } from "../SKILLS";
import { useEffect, useState } from "react";

export default function Page() {
  const params = useParams<{ identifier: string }>();

  const [skills,setSkills]=useState(SKILLS);
  const [skill,setSkill]=useState<Skill | null>(null)
  useEffect(()=>{
    const skill = SKILLS.find((skill) => skill.id === params.identifier)
    if(skill){
      setSkill(skill)
    }
  },[params.identifier])
  return skill ? (
    <article>
      <h1>{skill?.name}</h1>
      <p>{skill?.description}</p>
      <p>{skill?.category}</p>
      <p>{skill?.craetedAt}</p>
      <p>{skill?.updatedAt}</p>
    </article>
  ) : (
    <div>Skill not found</div>
  );
}

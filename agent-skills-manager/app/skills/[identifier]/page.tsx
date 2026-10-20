import { SKILLS } from "../SKILLS";

type SkillsPageProps = {
  params: {
    identifier: string;
  };
};

export default async function page({ params }: SkillsPageProps) {
  const { identifier } = await params;
  const skill = SKILLS.find((skill) => skill.id === identifier);
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

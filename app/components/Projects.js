import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "ประวัติหนังสือ",
      description: "เว็บไซต์แนะนำหนังสือ",
      p: 20
    },
    {
      id: 2,
      title: "ระบบเช็คจำนวนหนังสือ",
      description: "ระบบจัดการจำนวนหนังสือ",
      p: 20
    },
    {
      id: 3,
      title: "ค้นหาข้อมูลหนังสือ",
      description: "ค้นหาข้อมูลหนังสือ",
      p: 20
    }
  ];

  return (
    <section className="py-10 px-20">
      <h2 className="text-4xl font-bold mb-8">
        ผลงาน
      </h2>

      <div className="grid md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            p={project.p}
          />
        ))}
      </div>
    </section>
  );
}

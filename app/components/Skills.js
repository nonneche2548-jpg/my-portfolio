export default function Skills() {
  const skills = [
    "คิดเร็ว",
    "ออกแบบได้",
    "เรียนรู้เร็ว",
    "ปรับตัวเก่ง",
    "ทำงานเป็นทีม",
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">
        ทักษะ
      </h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-black text-blue-500 px-4 py-2 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
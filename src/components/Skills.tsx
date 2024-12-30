const skills = ['Python', 'SQL', 'JavaScript', 'TypeScript', 'Git']

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-100 dark:bg-gray-800 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">スキル</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-full px-4 py-2 text-sm font-semibold">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


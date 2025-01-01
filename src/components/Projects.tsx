import Image from 'next/image'
import Link from 'next/link'

const projects = [
  { id: 1, title: 'タスクアプリ', description: 'Next.js 練習のために作りました', image: '/images/taskapp.png', url: 'https://task-app-beige-eight.vercel.app/' },
  { id: 2, title: 'markdown blog', description: 'マークダウンでブログ投稿できるアプリ', image: '/images/mdblog.png', url: 'https://markdown-blog-gilt-three.vercel.app/'},
  { id: 3, title: 'プロジェクト3', description: 'プロジェクト3の説明', image: '/placeholder.svg?height=200&width=300', url: '' },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">自作アプリ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link href={project.url} key={project.id} className="block" target="_blank" rel="noopener noreferrer">
              <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <Image src={project.image} alt={project.title} width={300} height={200} className="w-full" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}


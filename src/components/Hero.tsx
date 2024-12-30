import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-gray-10 dark:bg-gray-800 py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <p className="text-xl mb-6">ポートフォリオサイトにお越しいただき、ありがとうございます。</p>
          <p className="text-xl mb-6">ここでは、私が作ったアプリを公開しています。</p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image 
            src="/images/hero.png" 
            alt="エンジニアのワークスペース" 
            width={500} 
            height={375} 
            className="rounded-lg shadow-sm"
          />
        </div>
      </div>
    </section>
  )
}


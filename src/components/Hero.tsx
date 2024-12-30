import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <Image 
        src="/images/hero.png" 
        alt="エンジニアのワークスペース"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">技術を活かして、少しでもお役に立ちたい</h1>
        <p className="text-xl md:text-2xl mb-6">日々の学びを活かして、着実に価値のあるものを提供いたします。</p>
      </div>
    </section>
  )
}
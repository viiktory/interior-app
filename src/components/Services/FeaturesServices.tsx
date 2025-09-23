import { FadeIn } from '@/components'

const infoData = [
  { value: '12', label: 'Years Of Experience' },
  { value: '5K', label: 'Success InfoProjects' },
  { value: '1K', label: 'Active InfoProjects' },
  { value: '4K', label: 'Happy Customers' },
]

const FeaturesServices = () => {
  return (
    <section className="bg-sectionBg">
      <FadeIn viewport={{ once: true, amount: 0.3 }}>
        <div className="container flex-col items-center justify-between gap-4 py-8 text-center lg:flex-row">
          {infoData.map((item, index) => (
            <div key={index} className="py-0 leading-[1.4] lg:py-24">
              <h3 className="font-serif text-[35px] text-secondary md:text-[60px] lg:text-titleHome">
                {item.value}
              </h3>
              <p className="hero-subtitle-p">{item.label}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}

export default FeaturesServices

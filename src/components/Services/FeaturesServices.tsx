const infoData = [
  { value: '12', label: 'Years Of Experience' },
  { value: '5K', label: 'Success InfoProjects' },
  { value: '1K', label: 'Active InfoProjects' },
  { value: '4K', label: 'Happy Customers' },
]

const FeaturesServices = () => {
  return (
    <section className="bg-sectionBg mb-24">
      <div className="container lg:flex-row flex-col items-center justify-between py-8 gap-4 text-center">
        {infoData.map((item, index) => (
          <div key={index} className=" lg:py-24 py-0 leading-[1.4]">
            <h3 className="text-secondary font-serif text-[35px] md:text-[60px] lg:text-titleHome">{item.value}</h3>
            <p className="hero-subtitle-p">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturesServices

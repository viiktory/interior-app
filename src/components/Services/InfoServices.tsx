import { FC } from 'react'

const infoData = [
  { value: '12', label: 'Years Of Experience' },
  { value: '5K', label: 'Success InfoProjects' },
  { value: '1K', label: 'Active InfoProjects' },
  { value: '4K', label: 'Happy Customers' },
]

const InfoServices: FC = () => {
  return (
    <section className="bg-bgBeige">
      <div className="mx-auto flex max-w-container items-center justify-center gap-8 px-safe text-center">
        {infoData.map((item, index) => (
          <div key={index} className="py-24">
            <h3 className="font-serif text-titleHome text-btn-hover">{item.value}</h3>
            <p className="font-sans text-base text-secondary">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default InfoServices

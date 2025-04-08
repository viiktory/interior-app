import { FC } from 'react'

const infoData = [
  { value: '12', label: 'Years Of Experience' },
  { value: '5K', label: 'Success Project' },
  { value: '1K', label: 'Active Project' },
  { value: '4K', label: 'Happy Customers' },
]

const InfoServices: FC = () => {
  return (
    <section className="bg-bgBeige">
      <div className="max-w-container mx-auto px-safe text-center flex justify-center items-center gap-8">
        {infoData.map((item, index) => (
          <div key={index} className="py-24">
            <h3 className="text-titleHome text-btn-hover font-serif">{item.value}</h3>
            <p className="text-base text-secondary font-sans">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default InfoServices

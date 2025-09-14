type ItemCardProps = {
  title: string
  description: string
  button?: string
  onClick?: () => void
}

const ItemCard = ({ title, description, button, onClick }: ItemCardProps) => {
  return (
    <div className="card">
      <div className="flex flex-col gap-4 items-center text-center">
      <h3 className="hero-title-h3">{title}</h3>
      <p className="hero-subtitle-p">{description}</p>
      </div>
      <button className="text-[16px] lg:text-[18px] hover:text-secondary"  onClick={onClick}>{button}</button>
    </div>
  )
}

export default ItemCard

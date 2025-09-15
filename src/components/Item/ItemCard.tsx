type ItemCardProps = {
  image?: string
  title: string
  description: string
  location?: string
  button?: string
  onClick?: () => void
  className?: string
}

const ItemCard = ({
  image,
  title,
  description,
  location,
  button,
  onClick,
  className,
}: ItemCardProps) => {
  return (
    <div className={`card ${className ?? ''}`}>
      <div className="flex flex-col items-center gap-4 text-center">
        {image && <img src={image} alt={title} className="h-20 w-20 rounded-full object-cover" />}
        <h3 className="hero-title-h3">{title}</h3>
        {location && <span>{location}</span>}
        <p className="hero-subtitle-p">{description}</p>
      </div>
      {button && (
        <button className="text-[16px] hover:text-secondary lg:text-[18px]" onClick={onClick}>
          {button}
        </button>
      )}
    </div>
  )
}

export default ItemCard

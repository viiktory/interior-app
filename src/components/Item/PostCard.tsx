type PostCardProps = {
  image?: string
  title: string
  description?: string
  dataPost?: string
  button?: string
  onClick?: () => void
  className?: string
}

const PostCard = ({
  image,
  title,
  description,
  dataPost,
  button,
  onClick,
  className,
}: PostCardProps) => {
  return (
    <div className={`flex flex-col gap-4 ${className ?? ''}`}>
      {image && <img src={image} alt={title} className="h-60 w-full rounded-t-lg object-cover" />}

      <div className="flex flex-col gap-2">
        <h3 className="hero-title-h3">{title}</h3>
        <p className="hero-subtitle-p">{description}</p>
        {dataPost && (
          <span className="leading-[1.3]; font-sans text-[16px] text-description">{dataPost}</span>
        )}
      </div>

      {button && (
        <div className="mt-auto flex justify-end">
          <button
            className="text-[16px] font-medium text-primary hover:text-secondary"
            onClick={onClick}
          >
            {button}
          </button>
        </div>
      )}
    </div>
  )
}

export default PostCard

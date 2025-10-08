import { FiBookmark } from 'react-icons/fi'

type PostCardProps = {
  image?: string
  title: string
  description?: string
  dataPost?: string
  button?: string
  onClick?: () => void
  isSaved?: boolean
  onToggleSave?: () => void
  className?: string
}

const PostCard = ({
  image,
  title,
  description,
  dataPost,
  onClick,
  className,
  isSaved,
  onToggleSave,
}: PostCardProps) => {
  return (
    <div
      className={`flex flex-col gap-4 rounded-2xl bg-cardBg p-4 transition-transform duration-300 hover:scale-105 lg:p-6 ${className ?? ''}`}
      onClick={onClick}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="h-60 w-full rounded-t-lg object-cover transition-transform duration-300"
        />
      )}

      <div className="flex flex-col gap-2">
        <h3 className="hero-title-h3">{title}</h3>
        <p className="hero-subtitle-p">{description}</p>
        {dataPost && (
          <span className="leading-[1.3]; font-sans text-[16px] text-description">{dataPost}</span>
        )}
      </div>

      {onToggleSave && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onToggleSave()
          }}
          className={`mt-2 flex items-center self-start rounded-xl px-4 py-2 text-sm transition-all ${
            isSaved
              ? 'bg-description text-white hover:bg-description/80'
              : 'bg-secondary text-white hover:bg-secondary/80'
          }`}
        >
          <FiBookmark className="mr-2" />
          {isSaved ? 'Saved' : 'Save'}
        </button>
      )}
    </div>
  )
}

export default PostCard

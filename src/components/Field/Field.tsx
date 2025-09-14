type FieldProps = {
  title: string
  description: string
  className?: string
}

const Field = ({ title, description, className }: FieldProps) => {
  return (
    <div className={`${className} flex flex-col lg:gap-8 gap-6`}>
      <h2 className="hero-title-h2">{title}</h2>
      <p className="hero-subtitle-p">{description}</p>
    </div>
  )
}

export default Field

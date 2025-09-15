type FieldProps = {
  title: string
  description?: string
  className?: string
}

const Field = ({ title, description, className }: FieldProps) => {
  return (
    <div className={`${className} flex flex-col gap-6 lg:gap-8`}>
      <h2 className="hero-title-h2">{title}</h2>
      {description && <p className="hero-subtitle-p">{description}</p>}
    </div>
  )
}

export default Field

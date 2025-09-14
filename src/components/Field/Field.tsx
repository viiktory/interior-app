type FieldProps = {
  title: string
  description: string
  className?: string
}

const Field = ({ title, description, className }: FieldProps) => {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Field

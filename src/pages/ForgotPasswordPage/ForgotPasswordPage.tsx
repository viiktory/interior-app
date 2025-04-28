import Button from '../../components/Button/Button'

const ForgotPasswordPage = () => {
  return (
    <form>
      <h1>Відновлення паролю</h1>
      <p>
        Введіть email, з яким ви реєструвалися. Ми надішлемо вам інструкції з відновлення паролю.
      </p>
      <label htmlFor="email">Куди вам надіслати код?</label>
      <input type="email" placeholder="Електрона пошта" />
      <Button text="Відправити" />
    </form>
  )
}

export default ForgotPasswordPage

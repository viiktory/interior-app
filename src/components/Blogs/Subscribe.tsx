import * as Yup from 'yup'
import { Field as FormikField, Formik, Form, ErrorMessage } from 'formik'
import toast, { Toaster } from 'react-hot-toast'
import { Field, Button } from '@/components'

const Subscribe = () => {
  const validationSchema = Yup.object({
    phone: Yup.string()
      .matches(/^\+?[0-9]{10,15}$/, 'Enter a valid phone number (10-15 digits, optional +)')
      .required('Phone is required'),
  })

  const handleSubscribeSubmit = (
    values: {
      phone: string
    },
    { resetForm }: any,
  ) => {
    console.log('Sent values:', values)
    toast.success('The form has been sent successfully!')
    resetForm()
  }

  return (
    <section className="container my-0 rounded-none bg-sectionBg py-12 md:my-12 lg:rounded-[70px] lg:py-16">
      <Formik
        initialValues={{ phone: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubscribeSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex w-full flex-col gap-4 px-2">
            <Field
              title="Wanna join the interno?"
              description="Leave your phone number, we will definitely contact you"
              className="text-center"
            />

            <div className="mx-auto flex w-full max-w-[700px] flex-col gap-2">
              <div className="flex flex-col justify-center gap-4 pt-6 sm:flex-row sm:gap-8">
                <FormikField
                  name="phone"
                  type="tel"
                  placeholder="Your phone"
                  className="w-full rounded-[20px] border-2 border-solid border-secondary px-4 py-2 sm:flex-1"
                />
                <Button
                  type="submit"
                  text="Send"
                  disabled={isSubmitting}
                  className="w-full sm:w-[150px]"
                />
              </div>

              <ErrorMessage name="phone" component="p" className="pl-4 text-[14px] text-red-500" />
            </div>
          </Form>
        )}
      </Formik>
      <Toaster position="top-right" reverseOrder={false} />
    </section>
  )
}

export default Subscribe

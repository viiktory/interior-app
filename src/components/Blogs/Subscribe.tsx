import * as Yup from 'yup'
import { Field as FormikField, Formik, Form, ErrorMessage } from 'formik'
import toast, { Toaster } from 'react-hot-toast'
import ErrorIcon from '../../assets/icons/error-icon.svg?react'
import { Field, Button } from '@/components'

const Subscribe = () => {
  const validationSchema = Yup.object({
    phone: Yup.string()
      .matches(/^\+?[0-9]{10,15}$/, 'Enter a valid phone number (10-15 digits, optional +)')
      .required('Enter your phone'),
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
        {({ isSubmitting, errors, touched }) => (
          <Form className="flex w-full flex-col gap-4 px-2">
            <Field
              title="Wanna join the interno?"
              description="Leave your phone number, we will definitely contact you"
              className="text-center"
            />

            <div className="mx-auto flex w-full max-w-[700px] flex-col gap-2">
              <div className="flex flex-col justify-center gap-4 pt-6 sm:flex-row sm:gap-8">
                <div className="relative flex w-full flex-col sm:flex-1">
                  <FormikField
                    name="phone"
                    type="tel"
                    placeholder="Your phone"
                    className={`input ${
                      errors.phone && touched.phone ? 'border-red-500' : 'border-secondary'
                    }`}
                  />
                  {errors.phone && touched.phone && (
                    <span className="absolute right-2 top-2">
                      <ErrorIcon className="h-8 w-8" />
                    </span>
                  )}

                  <ErrorMessage
                    name="phone"
                    component="p"
                    className="mt-1 pl-2 pt-2 text-[14px] text-red-500"
                  />
                </div>

                <Button
                  type="submit"
                  text="Send"
                  disabled={isSubmitting}
                  className="w-full sm:w-[150px]"
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <Toaster position="top-right" reverseOrder={false} />
    </section>
  )
}

export default Subscribe

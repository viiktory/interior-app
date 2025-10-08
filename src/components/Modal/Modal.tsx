import { ReactNode } from 'react'
import { FiX } from 'react-icons/fi'

type ModalProps = {
  children: ReactNode
  onClose: () => void
}

const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="relative mx-4 max-h-[90vh] overflow-y-auto rounded-xl bg-white p-6 sm:mx-[10%] sm:p-10">
        <button
          onClick={onClose}
          className="absolute right-2 top-2 text-secondary hover:text-description"
        >
          <FiX size={24} />
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal

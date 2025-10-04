import { ReactNode } from 'react'
import { FiX } from 'react-icons/fi'

type ModalProps = {
  children: ReactNode
  onClose: () => void
}

const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <div className="z-50 fixed  inset-0 flex items-center justify-center bg-black/60">
      <div className="bg-white p-12 rounded-xl relative mx-[10%]">
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

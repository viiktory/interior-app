import { FC } from 'react'
import Company1 from '@/assets/company1.svg'
import Company2 from '@/assets/company2.svg'
import Company3 from '@/assets/company3.svg'
import Company4 from '@/assets/company4.svg'
import Company5 from '@/assets/company5.svg'

const Company: FC = () => {
  return (
    <section className="py-24">
      <div className="max-w-container h-[103px] flex justify-between items-center mx-auto px-safe">
        <img src={Company1} alt="Company1" />
        <img src={Company2} alt="Company2" />
        <img src={Company3} alt="Company3" />
        <img src={Company4} alt="Company4" />
        <img src={Company5} alt="Company5" />
      </div>
    </section>
  )
}

export default Company

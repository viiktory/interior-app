// import { FC, useEffect, useState } from 'react'
// import { collection, getDocs } from 'firebase/firestore'
// import { db } from '../../firebase/config'
// import BtnItem from '../../assets/icons/btn.svg'
//
// interface ProjectItem {
//   id: string
//   image: string
//   title: string
//   text: string
// }
//
// const Projects: FC = () => {
//   const [items, setItems] = useState<ProjectItem[]>([])
//   const [loading, setLoading] = useState(true)
//
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, 'projects'))
//         const data = querySnapshot.docs.map((doc) => {
//           const docData = doc.data()
//
//           return {
//             id: doc.id,
//             image: docData.image,
//             title: docData.title,
//             text: docData.text,
//           } as ProjectItem
//         })
//
//         setItems(data)
//       } catch (error) {
//         console.error('Error fetching about data:', error)
//       } finally {
//         setLoading(false)
//       }
//     }
//
//     fetchData()
//   }, [])
//
//   if (loading) return <p className="py-10 text-center">Loading...</p>
//
//   return (
//     <section className="pb-24">
//       <div className="mx-auto max-w-container px-safe text-center">
//         <h1 className="mb-4 font-serif text-title text-primary">Recent Projects</h1>
//         <p className="mx-auto mb-12 max-w-[800px] font-sans text-base text-secondary">
//           With tools to make every part of your process more human and a support team excited to
//           help you, getting started with us never been easier.
//         </p>
//         <div className="grid grid-cols-1 place-items-center gap-8 md:grid-cols-2">
//           {items.map((item) => (
//             <div key={item.id} className="w-full max-w-[500px] rounded-xl bg-white p-6 text-left">
//               <img
//                 className="mb-4 h-[500px] w-full rounded-tr-[80px]"
//                 src={item.image}
//                 alt={item.title}
//               />
//               <div className="flex items-center gap-6">
//                 <div>
//                   <h3 className="font-serif text-cartTitle text-primary">{item.title}</h3>
//                   <p className="font-sans text-base text-secondary">{item.text}</p>
//                 </div>
//                 <img src={BtnItem} alt="btn" />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
//
// export default Projects

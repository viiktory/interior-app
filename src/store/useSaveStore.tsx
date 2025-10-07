import { create } from 'zustand'

type SaveState = {
  savePosts: Record<string, boolean>
  toggleSave: (id: string) => void
}

const useSaveStore = create<SaveState>((set) => ({
  savePosts: JSON.parse(localStorage.getItem('savePosts') || '{}'),

  toggleSave: (id: string) =>
    set((state) => {
      const updated = { ...state.savePosts, [id]: !state.savePosts[id] }
      localStorage.setItem('savePosts', JSON.stringify(updated))

      return { savePosts: updated }
    }),
}))

export default useSaveStore

import create from 'zustand'
import { persist } from 'zustand/middleware'

const useStore = create(
  persist(
    (set) => ({
      favorites: [],
      addFavorite: (id) =>
        set((state) => ({ favorites: [...state.favorites, id] })),
      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((favID) => favID !== id),
        })),
    }),
    {
      name: 'favoriteIDs', // unique name
    }
  )
)

export default useStore

const getAddFavorite = (state) => state.addFavorite
const getFavorites = (state) => state.favorites
const getRemoveFavorite = (state) => state.removeFavorite

export { getAddFavorite, getFavorites, getRemoveFavorite }

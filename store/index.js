import create from 'zustand'

const useStore = create(set => ({
  searchInput: "",
  setSearchInput: (newSearchInput) => set(state => ({ searchInput: newSearchInput })),
}))

export {useStore}

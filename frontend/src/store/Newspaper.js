import {create}from "zustand"
import { createNewspaper } from "../../../backend/controllers/newspaper.controller"
export const useNewspaperStore = create((set) => ({
  newspapers: [],
  setNewspapers: (newspapers) => set({newspapers}),
  createNewspaper: async (newNewspaper) => {
    if(!newNewspaper.name || !newNewspaper.image || !newNewspaper.price){
        return {success: false, message: "Please fill in all fields."}
    }
  }
}));
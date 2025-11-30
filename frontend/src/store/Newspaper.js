import { create } from "zustand";
import { createNewspaper } from "../../../backend/controllers/newspaper.controller";
export const useNewspaperStore = create((set) => ({
  newspapers: [],
  setNewspapers: (newspapers) => set({ newspapers }),
  createNewspaper: async (newNewspaper) => {
    if (!newNewspaper.name || !newNewspaper.image || !newNewspaper.price) {
      return { success: false, message: "Please fill in all fields." };
    }
    const res = await fetch("/api/newspapers", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newNewspaper)
    })
    const data = await res.json();
    set((state)=>({ newspapers: [...state.newspapers, data.newNewspaper ] }));
    return { success: true, message: "Newspaper created successfully." };
  },
}));

import { create } from "zustand";

export const useNewspaperStore = create((set) => ({
  newspapers: [],
  setNewspapers: (newspapers) => set({ newspapers }),
  createNewspaper: async (newNewspaper) => {
    if (!newNewspaper.name || !newNewspaper.image || !newNewspaper.price) {
      return { success: false, message: "Please fill in all fields." };
    }
    const res = await fetch("http://localhost:5000/api/newspapers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newNewspaper)
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Server error:", text);
      return { success: false, message: "Server failed to create item." };
    }
      
    const data = await res.json();
    set((state)=>({ newspapers: [...state.newspapers, data.newNewspaper ] }));
    return { success: true, message: "Newspaper created successfully." };
  },
}));

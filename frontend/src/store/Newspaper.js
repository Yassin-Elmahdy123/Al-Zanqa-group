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
  fetchNewspaper: async () => {
    const res = await fetch("http://localhost:5000/api/newspapers");
    const data = await res.json();
    set({ newspapers: data.data || [] });
  },

  deleteProducts: async (nid) => {
    const res = await fetch(`http://localhost:5000/api/newspapers/${nid}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (!data.success) {
      return { success: false, message: data.message };
    }
    
    set((state) => ({
      newspapers: state.newspapers.filter((newspaper) => newspaper._id !== nid)}));
      return { success: true, message: data.message };
  },
}));

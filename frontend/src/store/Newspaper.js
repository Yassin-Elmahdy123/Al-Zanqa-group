import { create } from "zustand";

export const useNewspaperStore = create((set) => ({
  newspapers: [],

  setNewspapers: (newspapers) => set({ newspapers }),

  createNewspaper: async (newNewspaper) => {
    const res = await fetch("http://localhost:5000/api/products/newspapers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newNewspaper)
    });

    const data = await res.json();
    
    if (!data.success) {
      return { success: false, message: data.message };
    }

    set((state) => ({
      newspapers: [...state.newspapers, data.newspaper]
    }));

    return { success: true, message: data.message };
  },

  // FIXED NAME
  fetchNewspaper: async () => {
    const res = await fetch("http://localhost:5000/api/products/newspapers");
    const data = await res.json();

    set({ newspapers: data.newspapers || [] });
  },

  deleteNewspaper: async (id) => {
    const res = await fetch(`http://localhost:5000/api/products/newspapers/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (!data.success) {
      return { success: false, message: data.message };
    }

    set((state) => ({
      newspapers: state.newspapers.filter((n) => n._id !== id),
    }));

    return { success: true, message: data.message };
  },
}));

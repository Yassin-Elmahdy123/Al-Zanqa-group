import { create } from "zustand";

export const useNewspaperStore = create((set) => ({
  newspapers: [],

  setNewspapers: (newspapers) => set({ newspapers }),

  createNewspaper: async (newNewspaper) => {
    try {
      const res = await fetch("http://localhost:5000/api/newspaper", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newNewspaper)
      });

      const data = await res.json();

      if (!data.success) {
        return { success: false, message: data.message };
      }

      set((state) => ({
        newspapers: [...state.newspapers, data.newspaper],
      }));

      return { success: true, message: data.message };
    } catch (error) {
      console.error("Error creating newspaper:", error);
      return { success: false, message: "Failed to connect to server." };
    }
  },

  fetchNewspaper: async () => {
    try {
      const res = await fetch("http://localhost:5000/api/newspaper");
      const data = await res.json();

      set({ newspapers: data.newspapers || [] });
    } catch (error) {
      console.error("Error fetching newspapers:", error);
      set({ newspapers: [] });
    }
  },

  deleteNewspaper: async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/newspaper/${id}`, {
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
    } catch (error) {
      console.error("Error deleting newspaper:", error);
      return { success: false, message: "Failed to connect to server." };
    }
  },
}));

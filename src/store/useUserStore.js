import create from 'zustand';

const useUserStore = create((set) => ({
  users: [],
  addAllUsers: (newUsers) => set(() => ({ users: [...newUsers] })),
  addUser: (newUser) => set((state) => ({ users: [...state.users, newUser] })),
  removeUser: (userId) => set((state) => ({
    users: state.users.filter((user) => user.id !== userId),
  })),
}));

export default useUserStore;
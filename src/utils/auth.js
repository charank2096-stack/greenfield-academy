const USERS_KEY = 'school_users';
const CURRENT_USER_KEY = 'school_current_user';

export const getUsers = () => {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch {
    return [];
  }
};

export const saveUsers = (users) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const getCurrentUser = () => {
  try {
    return JSON.parse(localStorage.getItem(CURRENT_USER_KEY)) || null;
  } catch {
    return null;
  }
};

export const setCurrentUser = (user) => {
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  window.dispatchEvent(new Event('authChange'));
};

export const clearCurrentUser = () => {
  localStorage.removeItem(CURRENT_USER_KEY);
  window.dispatchEvent(new Event('authChange'));
};

export const findUserByEmail = (email) => {
  const users = getUsers();
  return users.find((u) => u.email.toLowerCase() === email.toLowerCase()) || null;
};

export const registerUser = (userData) => {
  const users = getUsers();
  const existing = users.find(
    (u) => u.email.toLowerCase() === userData.email.toLowerCase()
  );
  if (existing) {
    return { success: false, error: 'An account with this email already exists.' };
  }
  const newUser = {
    id: Date.now().toString(),
    name: userData.name.trim(),
    email: userData.email.trim().toLowerCase(),
    phone: userData.phone.trim(),
    grade: userData.grade,
    password: userData.password,
    createdAt: new Date().toISOString(),
  };
  users.push(newUser);
  saveUsers(users);
  setCurrentUser(newUser);
  return { success: true, user: newUser };
};

export const loginUser = (email, password) => {
  const user = findUserByEmail(email.trim());
  if (!user) {
    return { success: false, error: 'No account found with this email address.' };
  }
  if (user.password !== password) {
    return { success: false, error: 'Incorrect password. Please try again.' };
  }
  setCurrentUser(user);
  return { success: true, user };
};

export const updatePassword = (email, currentPassword, newPassword) => {
  const users = getUsers();
  const idx = users.findIndex(
    (u) => u.email.toLowerCase() === email.toLowerCase()
  );
  if (idx === -1) return { success: false, error: 'User not found.' };
  if (users[idx].password !== currentPassword) {
    return { success: false, error: 'Current password is incorrect.' };
  }
  users[idx] = { ...users[idx], password: newPassword };
  saveUsers(users);
  setCurrentUser(users[idx]);
  return { success: true };
};

export const updateCurrentUser = (updated) => {
  const users = getUsers();
  const idx = users.findIndex(
    (u) => u.email.toLowerCase() === updated.email.toLowerCase()
  );
  if (idx !== -1) {
    users[idx] = { ...users[idx], ...updated };
    saveUsers(users);
  }
  setCurrentUser(updated);
};

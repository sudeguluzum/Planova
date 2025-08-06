export const useAuth = () => {
    const isAuthenticated = useState('isAuthenticated', () => false);
    const user = useState('user', () => null);

    const login = (userData) => {
        isAuthenticated.value = true;
        user.value = userData;
    };

    const logout = () => {
        isAuthenticated.value = false;
        user.value = null;
        // Gerekirse çerez temizleme
    };

    return { isAuthenticated, user, login, logout };
};
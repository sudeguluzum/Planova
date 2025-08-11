export const useAuth = () => {
    const isAuthenticated = useState('isAuthenticated', () => false);
    const user = useState('user', () => null);

    const login = (userData) => {
        isAuthenticated.value = true;
        user.value = userData;
    };

    const logout = async () => {
        try {
            await fetch('http://localhost:3001/api/logout', {
                method: 'POST',
                credentials: 'include'
            });
        } catch (err) {
            console.error('Logout error:', err);
        }

        isAuthenticated.value = false;
        user.value = null;

        const token = useCookie('token');
        token.value = null; // Bu client side için

        const router = useRouter();
        router.push('/login');
    };

    // Kullanıcı bilgilerini API'den çeker
    const fetchUser = async () => {
        const { data, success } = await csrFetch('/api/user', { credentials: 'include' });
        if (success && data) {
            user.value = data;
            isAuthenticated.value = true;
        } else {
            user.value = null;
            isAuthenticated.value = false;
        }
    };

    return { isAuthenticated, user, login, logout, fetchUser };
};
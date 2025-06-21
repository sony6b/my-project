import React, { useState, useEffect } from 'react';
const styles = {
    appWrapper: {
        position: 'relative',
        maxWidth: 500,
        margin: '0 auto',
        padding: 20,
        fontFamily: 'Lato, sans-serif',
        textAlign: 'center',
        background: 'linear-gradient(to bottom right, #a7d9f7, #f7c7da)', 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    topBar: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 15,
        position: 'relative',
    },
    backButton: {
        padding: '5px 12px',
        fontSize: 18,
        marginRight: 10,
        backgroundColor: '#eee',
        border: '1px solid #ccc',
        borderRadius: 5,
        cursor: 'pointer'
    },
    iconButton: {
        padding: 10,
        fontSize: 18,
        backgroundColor: '#eee',
        border: '1px solid #ccc',
        borderRadius: '50%',
        cursor: 'pointer',
        marginLeft: 'auto'
    },
    title: {
        flexGrow: 1,
        textAlign: 'center',
        fontSize: 24,
        fontFamily: 'Lato, sans-serif',
        fontWeight: '700',
        color: '#333',
        textTransform: 'uppercase',
        letterSpacing: '1.5px',
    },
    subheading: { textAlign: 'left', marginTop: 20, fontSize: 18, color: '#333' },
    input: {
        width: '100%',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        border: '1px solid #ccc'
    },
    button: {
        width: '100%',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        border: 'none',
        backgroundColor: '#007BFF',
        color: '#fff',
        cursor: 'pointer'
    },
    productGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 15,
        marginTop: 20,
        flexGrow: 1,
        maxHeight: '60vh',
        overflowY: 'auto',
        paddingRight: 10,
        paddingBottom: 70,
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid #ddd',
        borderRadius: 8,
        padding: 10,
        backgroundColor: '#fff',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
        position: 'relative',
        textAlign: 'center',
    },
    productImage: {
        width: '100%',
        maxWidth: 100,
        height: 100,
        borderRadius: 5,
        objectFit: 'cover',
        marginBottom: 10,
    },
    cardText: {
        flexGrow: 1,
        width: '100%',
    },
    delete: {
        background: 'none',
        border: 'none',
        fontSize: '18px',
        cursor: 'pointer',
        color: 'red',
        position: 'absolute',
        top: 5,
        right: 5,
        padding: 5,
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },
    fab: {
        position: 'fixed',
        bottom: 30,
        right: 30,
        borderRadius: '50%',
        width: 60,
        height: 60,
        fontSize: '30px',
        backgroundColor: '#28a745',
        color: '#fff',
        border: 'none',
        cursor: 'pointer'
    },
    loading: { textAlign: 'center', color: '#555' },
    emptyText: { color: '#888', fontSize: 16, marginTop: 20 },
    backgroundShapes: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(255, 215, 0, 0.05) 0%, transparent 60%), radial-gradient(circle at 70% 80%, rgba(135, 206, 250, 0.05) 0%, transparent 60%), linear-gradient(135deg, transparent 0%, rgba(255, 192, 203, 0.05) 100%)',
        zIndex: -1,
    },
    authContainer: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f8f9fa',
        borderRadius: 10,
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        margin: 'auto',
        width: '90%',
        maxWidth: 400,
    },
    authHeading: {
        fontSize: 28,
        color: '#333',
        marginBottom: 25,
        fontWeight: '600',
    },
    authInput: {
        width: 'calc(100% - 20px)',
        padding: 12,
        marginBottom: 15,
        borderRadius: 5,
        border: '1px solid #ddd',
        fontSize: 16,
    },
    authButton: {
        width: '100%',
        padding: 12,
        marginBottom: 10,
        borderRadius: 5,
        border: 'none',
        backgroundColor: '#007BFF',
        color: '#fff',
        cursor: 'pointer',
        fontSize: 18,
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease',
    },
    authButtonHover: {
        backgroundColor: '#0056b3',
    },
    linkButton: {
        background: 'none',
        border: 'none',
        padding: 0,
        color: '#007BFF',
        cursor: 'pointer',
        textDecoration: 'underline',
        fontSize: 14,
        marginTop: 5,
        transition: 'color 0.3s ease',
    },
    linkButtonHover: {
        color: '#0056b3',
    },
    errorMessage: {
        color: 'red',
        marginBottom: 10,
        fontSize: 14,
    },
    productCount: {
        textAlign: 'left',
        fontSize: 16,
        color: '#666',
        marginTop: -10,
        marginBottom: 15,
    },
    loginImage: {
        width: 150,
        height: 'auto',
        borderRadius: '10px',
        marginBottom: 20,
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    }
};
const AddProductForm = ({ productName, setProductName, productPrice, setProductPrice, productImage, setProductImage, addProduct, cancel, loading }) => (
    <div style={styles.authContainer}>
        <h2 style={styles.authHeading}>Add Product</h2>
        <input
            placeholder="Product Name"
            value={productName}
            onChange={e => setProductName(e.target.value)}
            style={styles.authInput}
        />
        <input
            placeholder="Price"
            value={productPrice}
            onChange={e => setProductPrice(e.target.value)}
            type="number"
            style={styles.authInput}
        />
        <input
            placeholder="Image URL"
            value={productImage}
            onChange={e => setProductImage(e.target.value)}
            style={styles.authInput}
        />
        <button onClick={addProduct} style={styles.authButton} disabled={loading}>
            {loading ? 'Adding...' : 'Add Product'}
        </button>
        <button onClick={cancel} style={{ ...styles.authButton, backgroundColor: 'gray' }} disabled={loading}>
            Cancel
        </button>
    </div>
);
const LoginPage = ({ onLoginSuccess, onNavigateToRegister, users }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        setError('');
        if (!email.trim() || !password.trim()) {
            setError('Email and Password are required.');
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }
        setLoading(true);
        setTimeout(() => {
            const foundUser = users.find(
                user => user.email === email && user.password === password
            );

            if (foundUser) {
                console.log('Login successful for:', email);
                onLoginSuccess();
            } else {
                setError('Invalid email or password.');
                console.log('Login failed for:', email);
            }
            setLoading(false);
        }, 1000);
    };
    return (
        <div style={styles.authContainer}>
            <img
                src="https://tse1.mm.bing.net/th?id=OIP.Wphp_q9T-JyVZOArhk-uIQHaFN&pid=Api&P=0&h=180"
                alt="Login Illustration"
                style={styles.loginImage}
            />
            <h1 style={styles.authHeading}>Login</h1>
            {error && <p style={styles.errorMessage}>{error}</p>}
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.authInput}
                disabled={loading}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.authInput}
                disabled={loading}
            />
            <button
                onClick={handleLogin}
                style={styles.authButton}
                disabled={loading}
            >
                {loading ? 'Logging In...' : 'Login'}
            </button>
            <p style={{ marginTop: 15 }}>
                <button
                    onClick={() => alert('Forgot password functionality coming soon!')}
                    style={styles.linkButton}
                >
                    Forgot Password?
                </button>
            </p>
            <p style={{ marginTop: 10 }}>
                Don't have an account? {' '}
                <button
                    onClick={onNavigateToRegister}
                    style={styles.linkButton}
                >
                    Register Now
                </button>
            </p>
        </div>
    );
};
const RegisterPage = ({ onRegisterSuccess, onNavigateToLogin, registerUser, users }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const handleRegister = () => {
        setError('');
        if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
            setError('All fields are required.');
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/;
        if (!passwordRegex.test(password)) {
            setError('Password must be at least 6 characters long, contain at least one number, and one special character (e.g., !, @, #, $).');
            return;
        }
        const userExists = users.some(user => user.email === email);
        if (userExists) {
            setError('An account with this email already exists. Please login.');
            return;
        }
        setLoading(true);
        setTimeout(() => {
            registerUser({ email, password });
            alert('Registration successful! Please log in.');
            onRegisterSuccess();
            setLoading(false);
        }, 1500);
    };
    return (
        <div style={styles.authContainer}>
            <h1 style={styles.authHeading}>Register</h1>
            {error && <p style={styles.errorMessage}>{error}</p>}
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.authInput}
                disabled={loading}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.authInput}
                disabled={loading}
            />
            <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={styles.authInput}
                disabled={loading}
            />
            <button
                onClick={handleRegister}
                style={styles.authButton}
                disabled={loading}
            >
                {loading ? 'Registering...' : 'Register'}
            </button>
            <p style={{ marginTop: 10 }}>
                Already have an account? {' '}
                <button
                    onClick={onNavigateToLogin}
                    style={styles.linkButton}
                >
                    Login Here
                </button>
            </p>
        </div>
    );
};
export default function App() {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImage, setProductImage] = useState('');
    const [products, setProducts] = useState([]);
    const [showAddPage, setShowAddPage] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState('login');
    const [users, setUsers] = useState([]);
    useEffect(() => {
        if (currentPage === 'app') {
            const defaultProducts = [
                { id: 'silver-earrings', name: 'Silver Earrings', price: '4000', image: 'https://tse4.mm.bing.net/th?id=OIP.R-e5t9bam2I4KRcx27VDZAHaHa&pid=Api&P=0&h=180' },
                { id: 'gold-earrings', name: 'Gold Earrings', price: '5000', image: 'https://tse3.mm.bing.net/th?id=OIP.bGHG3WmTLKiKc-hdtGJ0sQHaI5&pid=Api&P=0&h=180' },
                { id: 'gold-chains', name: 'Gold Chains', price: '4500', image: 'https://tse2.mm.bing.net/th?id=OIP.EWlfZIME0vS3LeWCAugNwwHaHa&pid=Api&P=0&h=180' },
                { id: 'silver-chain', name: 'Silver Chain', price: '3800', image: 'https://tse2.mm.bing.net/th?id=OIP.PtgJ7yoj1y_fnOYmXHrUMAHaHa&pid=Api&P=0&h=180' },
                { id: 'heart-chain', name: 'Heart Chain', price: '2500', image: 'https://tse2.mm.bing.net/th?id=OIP.snkcxW_XZYQJuQQHDnPO5gHaHa&pid=Api&P=0&h=180' },
                { id: 'gold-plated-chain', name: 'Gold Plated Chain', price: '3800', image: 'https://tse4.mm.bing.net/th?id=OIP.TX5TtzmrMr6u18T9Wt0nXgHaGy&pid=Api&P=0&h=180' },
                { id: 'layered-gold-chain', name: 'Layered Gold Chain', price: '4400', image: 'https://tse3.mm.bing.net/th?id=OIP.9goY58Ctn5cUMN85dLhiKgHaHa&pid=Api&P=0&h=180' },
                { id: 'heart-shaped-earrings', name: 'Heart Shaped Earrings', price: '2800', image: 'https://tse3.mm.bing.net/th?id=OIP.nibEJiHMX0E--p_LcrSWbwHaHa&pid=Api&P=0&h=180' },
                { id: 'pearl-earrings', name: 'Pearl Earrings', price: '4300', image: 'https://tse2.mm.bing.net/th?id=OIP.Bsj69dicjTeRmegF1-4TJwHaHa&pid=Api&P=0&h=180' },
                { id: 'gold-plated-earrings', name: 'Gold Plated Earrings', price: '4500', image: 'https://tse2.mm.bing.net/th?id=OIP._qyKfK272_iLSxSohfJ9fAHaHa&pid=Api&P=0&h=180' },
            ];
            if (!localStorage.getItem('products')) {
                localStorage.setItem('products', JSON.stringify(defaultProducts));
            }
            getProducts();
        }
        const storedUsers = localStorage.getItem('users');
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers));
        }
    }, [currentPage]);
    const registerUser = ({ email, password }) => {
        const updatedUsers = [...users, { email, password }];
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        console.log('User registered:', email);
    };
    const addProduct = () => {
        if (!productName.trim() || !productPrice.trim() || !productImage.trim()) {
            window.alert('Name, Price, and Image are required.');
            return;
        }
        const exists = products.find(p => p.name.toLowerCase() === productName.trim().toLowerCase());
        if (exists) {
            window.alert('Product with this name already exists.');
            return;
        }
        setLoading(true);
        setTimeout(() => {
            const newProduct = { id: Date.now().toString(), name: productName.trim(), price: productPrice.trim(), image: productImage.trim() };
            const updatedProducts = [...products, newProduct];
            setProducts(updatedProducts);
            localStorage.setItem('products', JSON.stringify(updatedProducts));
            setProductName('');
            setProductPrice('');
            setProductImage('');
            setShowAddPage(false);
            setLoading(false);
            window.alert('Product added successfully!');
        }, 500);
    };
    const deleteProduct = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this product?");
        if (!confirmDelete) {
            return;
        }
        setLoading(true);
        setTimeout(() => {
            const updatedProducts = products.filter(p => p.id !== id);
            setProducts(updatedProducts);
            localStorage.setItem('products', JSON.stringify(updatedProducts));
            setLoading(false);
            window.alert('Product deleted successfully!');
        }, 500);
    };
    const getProducts = () => {
        const stored = localStorage.getItem('products');
        if (stored) setProducts(JSON.parse(stored));
    };
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (currentPage === 'login') {
        return (
            <div style={styles.appWrapper}>
                <LoginPage
                    onLoginSuccess={() => setCurrentPage('app')}
                    onNavigateToRegister={() => setCurrentPage('register')}
                    users={users}
                />
            </div>
        );
    }
    if (currentPage === 'register') {
        return (
            <div style={styles.appWrapper}>
                <RegisterPage
                    onRegisterSuccess={() => setCurrentPage('login')}
                    onNavigateToLogin={() => setCurrentPage('login')}
                    registerUser={registerUser}
                    users={users}
                />
            </div>
        );
    }
    if (showAddPage) {
        return (
            <div style={styles.appWrapper}>
                <AddProductForm
                    productName={productName}
                    setProductName={setProductName}
                    productPrice={productPrice}
                    setProductPrice={setProductPrice}
                    productImage={productImage}
                    setProductImage={setProductImage}
                    addProduct={addProduct}
                    cancel={() => setShowAddPage(false)}
                    loading={loading}
                />
            </div>
        );
    }
    return (
        <div style={styles.appWrapper}>
            <div style={styles.topBar}>
                <button onClick={() => setCurrentPage('login')} style={styles.backButton}>&lt;</button>
                <h2 style={styles.title}>SONY SHOP</h2>
                <button onClick={() => setShowSearchBar(!showSearchBar)} style={styles.iconButton}>🔍</button>
                {showSearchBar && (
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{ ...styles.input, position: 'absolute', top: 55, right: 0, width: 'calc(100% - 20px)', zIndex: 10 }}
                    />
                )}
            </div>
            <h3 style={styles.subheading}>Earrings and Chains</h3>
            <p style={styles.productCount}>
                Total Products: {filteredProducts.length}
            </p>
            {loading && <p style={styles.loading}>Loading...</p>}
            <div style={styles.productGrid}>
                {filteredProducts.length === 0 ? (
                    <p style={{ ...styles.emptyText, gridColumn: '1 / -1' }}>No Product Found</p>
                ) : (
                    filteredProducts.map(item => (
                        <div key={item.id} style={styles.card}>
                            <img src={item.image} alt={item.name} style={styles.productImage} />
                            <div style={styles.cardText}>
                                <h4>{item.name}</h4>
                                <p>₹{item.price}</p>
                            </div>
                            <button onClick={() => deleteProduct(item.id)} style={styles.delete} disabled={loading}>🗑️</button>
                        </div>
                    ))
                )}
            </div>
            <button onClick={() => setShowAddPage(true)} style={styles.fab}>＋</button>
            <div style={styles.backgroundShapes}></div>
        </div>
    );
}
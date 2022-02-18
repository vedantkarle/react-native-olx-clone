import jwtDecode from "jwt-decode";
import { useContext } from "react";
import AuthContext from "./authContext";
import storage from "./storage";

export default useAuth = () => {
	const { user, setUser } = useContext(AuthContext);

	const login = token => {
		const user = jwtDecode(token);
		setUser(user);
		storage.storeToken(token);
	};

	const logout = () => {
		setUser(null);
		storage.removeToken();
	};

	return { user, setUser, logout, login };
};

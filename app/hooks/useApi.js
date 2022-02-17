import { useState } from "react";

const useApi = apiFunc => {
	const [data, setData] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);

	const request = async (...args) => {
		setLoading(true);
		const response = await apiFunc(...args);
		if (!response || !response.ok) {
			setLoading(false);
			return setError(true);
		}

		setError(false);
		setData(response.data);
		setLoading(false);
	};

	return {
		request,
		data,
		error,
		loading,
	};
};

export default useApi;

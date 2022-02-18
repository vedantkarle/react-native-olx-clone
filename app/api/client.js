import { create } from "apisauce";
import cache from "../utility/cache";

const apiClient = create({
	baseURL: "http://192.168.56.1:9000/api",
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
	const response = await get(url, params, axiosConfig);

	if (response.ok) {
		console.log("Got normal data");
		cache.store(url, response.data);
		return response;
	}

	const data = await cache.get(url);
	console.log("Got cached data");
	return data ? { ok: true, data } : response;
};

export default apiClient;

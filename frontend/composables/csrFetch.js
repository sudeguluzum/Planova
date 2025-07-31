export default async function csrFetch(url, options = {}) {
    const baseUrl = "http://localhost:3001";

    const fetchOptions = {
        method: options.method || "GET",
        headers: {
            "Content-Type": "application/json",
            ...(options.headers || {}),
        },
    };

    if (fetchOptions.method !== "GET" && fetchOptions.method !== "HEAD" && options.body) {
        fetchOptions.body = JSON.stringify(options.body);
    }

    try {
        const response = await fetch(`${baseUrl}${url}`, fetchOptions);
        const data = await response.json();

        if (!response.ok) {
            return { data, success: false };
        }

        return { data, success: true };
    } catch (error) {
        console.error("[csrFetch Error]:", error);
        return { data: null, success: false, error };
    }
}

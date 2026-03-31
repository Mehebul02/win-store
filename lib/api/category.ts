"use server";

export async function getCategories() {
    try {
        const res = await fetch(
            "https://mm-assesment-server.vercel.app/api/v1/products/categories",
            { cache: "no-store" }
        );
        const data = await res.json();
        return data?.data || [];
    } catch (error) {
        console.log("ERROR:", error);
        return [];
    }
}


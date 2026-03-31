"use server";

export async function getCategories() {
    try {
        const res = await fetch(
            `${process.env.BASE_URL}/products/categories`,
            { cache: "no-store" }
        );
        const data = await res.json();
        return data?.data || [];
    } catch (error) {
        console.log("ERROR:", error);
        return [];
    }
}


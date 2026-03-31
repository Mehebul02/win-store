"use server";

import { Product } from "@/types/product";

export async function getProducts() {
    try {
        const res = await fetch(
            "https://mm-assesment-server.vercel.app/api/v1/products",
            { cache: "no-store" }
        );
        const data = await res.json();
        return data?.data || [];
    } catch (error) {
        console.log("ERROR:", error);
        return [];
    }
}


export const getProductsByCategory = async (category: string) => {
  try {
    const res = await fetch(
      `https://mm-assesment-server.vercel.app/api/v1/products/category/${category}`,
      {
        cache: "no-store", 
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await res.json();
    return data.data as Product[];
  } catch (error) {
    console.error(error);
    return [];
  }
};
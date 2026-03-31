import { getCategories } from "@/lib/api/category";
import Category from "./Category";

const CategoryWrapper = async () => {
  const categories = await getCategories();

  return <Category categories={categories} />;
};

export default CategoryWrapper;
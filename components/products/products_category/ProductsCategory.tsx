import Container from "@/components/shared/Container";
import { getProductsByCategory } from "@/lib/api/product";
import ProductsCategoryWrapper from "./ProductsCategoryWrapper";
import { getCategories } from "@/lib/api/category";
const ProductsCategory = async () => {
    const categories = await getCategories();
    const initialCategory = categories[0]?.name;
    const products = await getProductsByCategory(initialCategory);
    return (
        <Container>
            <ProductsCategoryWrapper
                categories={categories}
                initialProducts={products}
                initialCategory={initialCategory}
            />
        </Container>
    );
};

export default ProductsCategory;
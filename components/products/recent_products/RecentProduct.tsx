
import ProductCard from '../../shared/ProductCard';
import SectionTitle from '@/components/shared/SectionTitle ';
import { getProducts } from '@/lib/api/product';
import { Product } from '@/types/product';

const RecentProduct = async () => {
    const products = await getProducts();

    return (
        <section className="w-full py-12 px-4 md:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <SectionTitle highlightText="New" normalText="Arrivals" />
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                    {products?.slice(0,10).map((product:Product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecentProduct;
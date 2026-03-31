import { products } from '@/lib/product';
import ProductCard from '../../shared/ProductCard';
import SectionTitle from '@/components/shared/SectionTitle ';

const RecentProduct = () => {
    return (
        <section className="w-full py-12 px-4 md:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <SectionTitle highlightText="New" normalText="Arrivals" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecentProduct;
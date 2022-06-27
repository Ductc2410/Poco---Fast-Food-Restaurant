import ProductItem from "../../../components/Product/ProductItem";
import { useGetProductsQuery } from "../../../api/produc.api";

const ShopList = () => {
  const { isLoading, isSuccess, data } = useGetProductsQuery();

  return (
    <div className="shop_products grid">
      {isLoading && "Loading"}

      {isSuccess && data?.map((product, index) => <ProductItem key={index} product={product} />)}
    </div>
  );
};

export default ShopList;

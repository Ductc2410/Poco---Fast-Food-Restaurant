import ProductItem from "../../../components/Product/ProductItem";
import IProduct from "../../../types/Product";

interface IDataProp {
  products: IProduct[];
  total: string | undefined;
}

const ShopList = ({
  isLoading,
  isSuccess,
  data
}: {
  isLoading: boolean;
  isSuccess: boolean;
  data: IDataProp;
}) => {
  return (
    <div className="shop_products grid">
      {isLoading && "Loading"}

      {data && data.products.map((product, index) => <ProductItem key={index} product={product} />)}
    </div>
  );
};

export default ShopList;

import ProductItem from "../../../components/Product/ProductItem";
import IProduct from "../../../types/Product";

interface IDataProp {
  products: IProduct[];
  total: string | undefined;
}

const ShopList = ({
  isLoading,
  isFetching,
  data
}: {
  isLoading: boolean;
  isFetching: boolean;
  data: IDataProp;
}) => {
  return (
    <div className="shop_products grid">
      {isLoading && "Loading"}

      {!isLoading && isFetching && (
        <div className="overlay">
          <i className="bx bx-loader bx-spin" />
        </div>
      )}

      {data &&
        !isFetching &&
        data.products.map((product, index) => <ProductItem key={index} product={product} />)}

      {data && !isFetching && data.products.length === 0 && (
        <div className="notfound product_notfound">There are no reviews yet.</div>
      )}
    </div>
  );
};

export default ShopList;

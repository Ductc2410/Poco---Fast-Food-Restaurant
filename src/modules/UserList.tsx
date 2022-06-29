import { useGetProductsQuery, useDeleteProductMutation } from "../api/produc.api";

const UserList = () => {
  const { isLoading, data } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();

  const handleDelete = (id: number) => {
    deleteProduct({ id });
  };

  return (
    <div>
      {isLoading && "Loading"}

      {!isLoading &&
        data &&
        data.map((user, index) => {
          return (
            <div key={index} style={{ marginBottom: "20px" }}>
              <span>{user.name}</span>
              <button type="button" onClick={() => handleDelete(user.id)}>
                Delete
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default UserList;

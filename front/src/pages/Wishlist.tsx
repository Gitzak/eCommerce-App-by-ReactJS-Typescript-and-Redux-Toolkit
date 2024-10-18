import useWishlist from "@hooks/useWishlist";
import { GridList, Heading } from "@components/common";
import { Product } from "@components/ecommerce";
import { Loading } from "@components/feedback";
import { TProduct } from "@types";

const Wishlist = () => {
  const { loading, error, records } = useWishlist();

  return (
    <>
      <Heading title="Your Wishlist" />
      <Loading status={loading} error={error}>
        <GridList<TProduct>
          records={records}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </>
  );
};

export default Wishlist;
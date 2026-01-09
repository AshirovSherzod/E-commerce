import { useSelector } from "react-redux";
import Products from "../../components/products/Products";
import Empty from "../../components/empty/Empty";
import img from "../../assets/images/wishlist.webp";

const Wishlist = () => {
  const wishlistData = useSelector((state) => state.wishlist.value);

  return (
    <main className="wishlist container">
      {wishlistData.length ? (
        <Products data={wishlistData} />
      ) : (
        <Empty
          img={img}
          title="Your wishlist is empty"
          description="Add products to your wishlist to see them here."
        />
      )}
    </main>
  );
};

export default Wishlist;

import {Heart, ShoppingCart} from "lucide-react";
// import { AspectRatio } from "@/components/ui/aspect-ratio";
// import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";
// import { useNavigate } from "react-router";
// import { removeProductFromWishlist } from "@/app/features/wishlistSlice";
import ProductCard from "@/components/shared/ProductCard";
// import { addProductToCart } from "@/app/features/cartSlice";


interface WishlistItem {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  inStock: boolean;
  priceDrop?: boolean;
}


interface Wishlist1Props {
  items?: WishlistItem[];
  className?: string;
}

const Wishlist = ({ className }: Wishlist1Props) => {

  const wishlistItems= useSelector((state:RootState)=> state.wishlist)
  // const dispatch= useDispatch()

  // const [wishlistItems, setWishlistItems] = useState(items);

  // const removeItem = (id: string) => {
  //   setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  // };

  // const formatPrice = (price: number) => {
  //   return new Intl.NumberFormat("en-US", {
  //     style: "currency",
  //     currency: "USD",
  //   }).format(price);
  // };

  return (
    <section className={cn("py-9! md:py-24 px-5! max-md:px-10!", className)}>
      <div className="container max-w-7xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
              My Wishlist
            </h1>
            <p className="mt-1 text-muted-foreground">
              {wishlistItems.length} items saved
            </p>
          </div>
          {wishlistItems.length > 0 && (
            <Button variant="outline">
              <ShoppingCart className="mr-2 size-4" />
              Add All to Cart
            </Button>
          )}
        </div>

        {/* Grid */}
        {wishlistItems.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {wishlistItems.map((item) => (
              <ProductCard product={item}/>
            ))}
          </div>
        ) : (
          <Card className="p-0">
            <CardContent className="flex flex-col items-center justify-center py-16 text-center">
              <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-muted">
                <Heart className="size-8 text-muted-foreground" />
              </div>
              <h2 className="text-xl font-semibold">Your wishlist is empty</h2>
              <p className="mt-2 max-w-sm text-muted-foreground">
                Save items you love by clicking the heart icon on any product
              </p>
              <Button className="mt-6">Continue Shopping</Button>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default Wishlist 

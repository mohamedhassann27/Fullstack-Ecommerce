import { useId } from "react";

import { Eye, PencilIcon, Trash2Icon } from "lucide-react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import useProducts from "@/hooks/useProducts";
import type { IProduct } from "@/interfaces";

import { useNavigate } from "react-router";
import { useDeleteDashboardProductMutation, useGetDashboardProductsQuery } from "@/app/services/productsApiSlice";
import ProductsTableSkeleton from "./ProductsTableSkeleton";

const ProductsTable = () => {
  const id = useId();
  const navigate = useNavigate();
  // const {data}= useProducts()
  const { isLoading, data, isError } = useGetDashboardProductsQuery({});
  // console.log(data);

  const [deleteProduct, {isLoading: loading, isError:deleteError}] = useDeleteDashboardProductMutation()
  
  // console.log({loading, deleteError});
  
  if (loading) return <ProductsTableSkeleton/>;
  if (isLoading) return <ProductsTableSkeleton/>

  return (
    <div className="w-full flex flex-col  gap-4 py-4 md:gap-6 md:py-6">
      <div className="[&>div]:rounded-xl [&>div]:border px-4 lg:px-6">
        <Table className="h-fit">
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead>
                <Checkbox id={id} aria-label="select-all" />
              </TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Piece</TableHead>
              <TableHead className="w-0">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.slice(3, 23).map((item: IProduct) => (
              <TableRow
                key={item.id}
                className="has-data-[state=checked]:bg-muted/50"
              >
                <TableCell>
                  <Checkbox
                    id={`table-checkbox-${item.id}`}
                    aria-label={`product-checkbox-${item.id}`}
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3 py-2">
                    <Avatar className="rounded-sm h-fit w-fit">
                      <AvatarImage
                        src={item.thumbnail}
                        alt={item.title}
                        className="h-15"
                      />
                    </Avatar>
                    <div></div>
                  </div>
                </TableCell>
                <TableCell>
                  <p>{item.title}</p>
                </TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>${item.price}</TableCell>
                <TableCell>{item.reviews}</TableCell>
                <TableCell className="flex items-center gap-1 h-full">
                  <Button
                    onClick={() => navigate(item.id)}
                    variant="ghost"
                    size="icon"
                    className="rounded-full cursor-pointer "
                    aria-label={`product-${item.id}-remove`}
                  >
                    <Eye />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full cursor-pointer"
                    aria-label={`product-${item.id}-edit`}
                  >
                    <PencilIcon />
                  </Button>
                  <Button
                  onClick={()=>deleteProduct(item.id)}
                    variant="ghost"
                    size="icon"
                    className="rounded-full  cursor-pointer"
                    aria-label={`product-${item.id}-remove`}
                  >
                    <Trash2Icon />
                  </Button>
                  {/* <Button
                    variant='ghost'
                    size='icon'
                    className='rounded-full'
                    aria-label={`product-${item.id}-archive`}
                  >
                    <ArchiveIcon />
                  </Button> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ProductsTable;

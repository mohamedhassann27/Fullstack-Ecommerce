import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ProductsTableSkeleton = () => {
  return (
    <div className="w-full flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <div className="[&>div]:rounded-xl [&>div]:border px-4 lg:px-6">
        <Table>
          {/* Header */}
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead>
                <Skeleton className="h-4 w-4" />
              </TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Piece</TableHead>
              <TableHead className="w-0">Actions</TableHead>
            </TableRow>
          </TableHeader>

          {/* Body */}
          <TableBody>
            {Array.from({ length: 10 }).map((_, i) => (
              <TableRow key={i}>
                {/* Checkbox */}
                <TableCell>
                  <Skeleton className="h-4 w-4 rounded-sm" />
                </TableCell>

                {/* Image */}
                <TableCell>
                  <div className="flex items-center gap-3 py-2">
                    <Skeleton className="h-12 w-12 rounded-sm" />
                  </div>
                </TableCell>

                {/* Title */}
                <TableCell>
                  <Skeleton className="h-4 w-32" />
                </TableCell>

                {/* Category */}
                <TableCell>
                  <Skeleton className="h-4 w-24" />
                </TableCell>

                {/* Price */}
                <TableCell>
                  <Skeleton className="h-4 w-16" />
                </TableCell>

                {/* Reviews */}
                <TableCell>
                  <Skeleton className="h-4 w-12" />
                </TableCell>

                {/* Actions */}
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-8 w-8 rounded-full" />
                    <Skeleton className="h-8 w-8 rounded-full" />
                    <Skeleton className="h-8 w-8 rounded-full" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ProductsTableSkeleton;
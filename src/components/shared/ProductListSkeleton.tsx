import { Skeleton } from "@/components/ui/skeleton";

export const title = "Horizontal Card Layout";

const ProductListSkeleton = () => (
<div className="flex flex-col gap-5 py-10">
    <div className="flex items-center justify-center gap-3 w-fit">
        <Skeleton className="h-10 w-5 rounded-sm"></Skeleton>
        <Skeleton className='font-semibold w-16 h-4'></Skeleton>
    </div>

    <Skeleton className='w-2/4 h-10 mt-5'></Skeleton>

    <div className="flex gap-5 mt-10 justify-between w-full">
        {Array.from({length:4}, (_,i)=>(
            <div key={i} className="flex-col items-center max-md:flex-row max-md:items-center gap-5 justify-center border rounded-md p-3">
                <Skeleton className=" w-68 h-50 rounded-lg" />
                <div className="flex flex-1 flex-col gap-2 mx-2 max-md:px-3">
                    <Skeleton className="h-6 w-5/5 mt-4" />
                    <Skeleton className="h-3 w-2/5 mt-3" />
                    <Skeleton className="mt-2 h-4 w-4/4" />
                        <Skeleton className="h-10 w-full mt-4" />
                </div>
            </div>
        ) )}
    </div>
</div>
);

export default ProductListSkeleton;

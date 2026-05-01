import { Trash2Icon } from "lucide-react"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogMedia,
    AlertDialogTitle,
    // AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useDeleteDashboardProductMutation } from "@/app/services/productsApiSlice"
import { toast } from "sonner";

interface IProp{
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    productId: number|string|null;
}

export default function RemoveDialog({open, setOpen, productId}: IProp) {

    const [deleteProduct, {}]= useDeleteDashboardProductMutation()

    return (
        <AlertDialog open={open}>
        {/* <AlertDialogTrigger asChild>
            <Button onClick={()=>setOpen(prev=> !prev)} variant="destructive">Delete Chat</Button>
        </AlertDialogTrigger> */}
        <AlertDialogContent size="sm">
            <AlertDialogHeader>
            <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
                <Trash2Icon />
            </AlertDialogMedia>
            <AlertDialogTitle>Delete Product?</AlertDialogTitle>
            <AlertDialogDescription>
                This will permanently delete this Product conversation. View{" "}
                <a href="#">Settings</a> delete any memories saved during this chat.
            </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
            <AlertDialogCancel onClick={()=> setOpen(false)} variant="outline" className="cursor-pointer">Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={()=>{
                    setOpen(false)
                    deleteProduct(productId)
                    toast.success("Product deleted successfully", {position: "top-center"})
                }} 
                variant="destructive" className="cursor-pointer">Delete</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>
    )
}

import { Trash2, Minus, Plus, ShoppingBag, Package, Shield, CreditCard, Store, MoveRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { useDispatch, useSelector } from 'react-redux'
import type { IProduct } from '@/interfaces'
import { decreaseQuantity, increaseQuantity, removeProductFromCart } from '@/app/features/cartSlice'
import { Link } from 'react-router'
import type { RootState } from '@/app/store'


export default function ShoppingCart1() {

    const cartProducts= useSelector((state:RootState)=> state.cart)
    console.log(cartProducts);
    const dispatch= useDispatch()


    return (
        <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8'>
        <div className='flex flex-col gap-2 mb-8 text-center'>
            <h1 className='text-3xl font-bold tracking-tight sm:text-4xl'>Your Shopping Cart</h1>
            <p className='text-muted-foreground'>
            {/* {items.length} {items.length === 1 ? 'item' : 'items'} in your cart •{' '} */}
            {/* <span className='text-foreground font-semibold'>${subtotal.toFixed(2)}</span> */}
            </p>
        </div>

        <div className='flex flex-col gap-8 lg:flex-row'>
            <div className='flex-1 flex flex-col gap-6'>
            {/* Cart Items */}
            {cartProducts.length === 0 ? (
                <Card className='border-dashed'>
                <CardContent className='flex flex-col items-center justify-center py-12 text-center'>
                    <ShoppingBag className='text-muted-foreground/50 mb-4 size-12' />
                    <h3 className='text-lg font-medium'>Your cart is empty</h3>
                    <p className='text-muted-foreground mt-1 text-sm'>Add some items to get started</p>
                    <Button disabled={true} className="h-9 px-4 py-2 mt-4 cursor-pointer" variant='outline'>
                    Continue Shopping
                    </Button>
                </CardContent>
                </Card>
            ) : (
                cartProducts.map((product:IProduct)=> (
                <Card
                    key={product.id}
                    className={cn('gap-0 overflow-hidden py-0', {
                    })}
                >
                    <div className='flex flex-col sm:flex-row'>
                    <div className='relative h-auto w-full sm:w-40'>
                        <img src={product.thumbnail} alt={product.title} className='h-30 w-full object-cover object-center' />
                    </div>

                    <div className='flex-1 p-4'>
                        <div className='flex items-start justify-between'>
                        <div>
                            <h3 className='text-foreground text-lg font-medium'>{product.title}</h3>
                            <p className='text-muted-foreground mt-1 text-sm'>
                            {/* {product.color} {product.size && `• ${product.size}`} */}
                            </p>
                        </div>
                        <Button
                            variant='ghost'
                            size='icon'
                            className="size-8 text-muted-foreground hover:bg-destructive/10 hover:text-destructive cursor-pointer"
                            onClick={()=> dispatch(removeProductFromCart(product))}
                        >
                            <Trash2 />
                        </Button>
                        </div>

                        <div className='mt-4 flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <Button onClick={()=> dispatch(decreaseQuantity(product))}
                                variant='outline'
                                size='icon'
                                className="size-8 cursor-pointer"
                                disabled={product.quantity <=1}
                                >
                                <Minus />
                                </Button>
                                <span className='w-8 text-center text-sm font-medium'>{product.quantity}</span>
                                <Button
                                onClick={()=> dispatch(increaseQuantity(product))}
                                variant='outline'
                                size='icon'
                                className="size-8 cursor-pointer"
                                // onClick={() => updateQuantity(product.id, true)}
                                >
                                <Plus />
                                </Button>
                            </div>

                            <div className='text-end'>
                                <p className='text-lg font-semibold'>${(product.price * product.quantity).toFixed(2)}</p>
                                {/* {product.originalPrice > product.price && (
                                <p className='text-muted-foreground text-xs line-through'>${product.originalPrice.toFixed(2)}</p>
                                )} */}
                                {/* <p className='text-lg font-semibold'>${product.price}</p> */}
                            </div>
                        </div>
                    </div>
                    </div>

                    <CardFooter className='bg-muted/20 border-t px-4 py-2!'>
                    <div className='text-muted-foreground flex items-center text-sm'>
                        <Package className='me-2 size-4' />
                        <span>Estimated delivery: 3-5 business days</span>
                    </div>
                    </CardFooter>
                </Card>
                ))
            )}
            </div>

            {/* Order Summary */}
            <div className='flex flex-col gap-4 w-full lg:w-96'>
            <Card className='sticky top-4 gap-0'>
                <CardHeader className='pb-4'>
                <CardTitle className='text-xl'>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className='flex flex-col gap-4'>
                <div className='flex flex-col gap-3'>
                    <div className='flex justify-between text-sm'>
                    <span className='text-muted-foreground'>Subtotal</span>
                    <span>${cartProducts.reduce((total,item)=> total+item.price*item.quantity ,0).toFixed(2)}</span>
                    </div>
                    <div className='flex justify-between text-sm'>
                    <span className='text-muted-foreground'>Shipping</span>
                    <span className='text-success' >Free</span>
                    </div>
                    {/* {savings > 0 && ( */}
                    <div className='flex justify-between text-sm font-medium'>
                        <span>You Save</span>
                        {/* <span>-${savings.toFixed(2)}</span> */}
                    </div>
                    {/* )} */}
                </div>

                <Separator className='my-2' />

                <div className='flex items-center justify-between text-base font-medium'>
                    <span>Total</span>
                    <div className='text-end'>
                    <p className='text-xl font-bold'>${cartProducts.reduce((total,item)=> total+item.price*item.quantity ,0).toFixed(2)}</p>
                    <p className='text-muted-foreground text-xs'>including VAT, if applicable</p>
                    </div>
                </div>

                <Button
                    size='lg'
                    className="h-10 px-8 mt-4 w-full cursor-pointer text-base font-medium"
                    // disabled={items.length === 0}
                >
                    <ShoppingBag />
                    <Link to='/checkout'>Proceed to Checkout</Link>
                </Button>

                <div className='text-muted-foreground flex items-center justify-center gap-2 text-xs'>
                    <CreditCard className='size-3.5' />
                    <span>Secure payment with SSL encryption</span>
                </div>
                </CardContent>
            </Card>

            <Card className='border-dashed py-4'>
                <CardContent className='px-4'>
                <div className='flex items-start gap-3'>
                    <div className='flex size-10 items-center justify-center rounded-full bg-amber-100 text-amber-600'>
                    <Shield className='size-5' />
                    </div>
                    <div>
                    <h4 className='font-medium'>Secure Checkout</h4>
                    <p className='text-muted-foreground mt-1 text-xs'>
                        Your payment information is encrypted and secure.
                    </p>
                    </div>
                </div>
                </CardContent>
            </Card>

            <Button variant='outline' className="h-9 px-4 py-2 w-full cursor-pointer">
                <Store />
                <Link to='/'>Continue Shopping</Link>
                <MoveRight />
            </Button>
            </div>
        </div>
        </div>
    )
    }


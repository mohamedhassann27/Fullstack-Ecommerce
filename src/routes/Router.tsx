// import AdminRoute from '@/auth/AdminRoute'
import AuthRedirectRoute from '@/auth/AuthRedirectRoute'
import ProtectedRoute from '@/auth/ProtectedRoute'
import LoadingSpinner from '@/components/shared/LoadingSpinner'
import DashboardLayout from '@/layout/DashboardLayout'
import RootLayout from '@/layout/RootLayout'
import HomePage from '@/pages/Home'
import LoginPage from '@/pages/Login'
import { NotFoundPage } from '@/pages/NotFoundPage'
import RegisterPage from '@/pages/Register'
// import About from '@/pages/About'
// import CartPage from '@/pages/Cart'
// import Checkout from '@/pages/CheckOut'
// import Contact from '@/pages/Contact'
// import Calendar from '@/pages/dashboard/calender/Calender'
// import Dashboard from '@/pages/dashboard/Dashboard'
// import ProductsTable from '@/pages/dashboard/productsTable/ProductsTable'
// import TeamTable from '@/pages/dashboard/TeamTable'
// import ProductDetails from '@/pages/ProductDetails'
// import  Wishlist from '@/pages/Wishlist'
import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router'

// Lazy Page for code spiliting
const Dashboard= lazy(()=> import('@/pages/dashboard/Dashboard'))
const Calendar= lazy(()=> import('@/pages/dashboard/calender/Calender'))
const ProductsTable= lazy(()=> import('@/pages/dashboard/productsTable/ProductsTable'))
const TeamTable= lazy(()=>import('@/pages/dashboard/TeamTable'))
const About =lazy(()=>import('@/pages/About'))
const CartPage =lazy(()=>import('@/pages/Cart'))
const Checkout =lazy(()=>import('@/pages/CheckOut'))
const Contact =lazy(()=>import('@/pages/Contact'))
const ProductDetails =lazy(()=>import('@/pages/ProductDetails'))
const Wishlist =lazy(()=>import('@/pages/Wishlist'))


function Router() {
    return (

        <Suspense fallback={<LoadingSpinner/>}>

            <Routes>
                <Route element={<ProtectedRoute/>}>
                    <Route path='/' element={<RootLayout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path='/cart' element={<CartPage/>}/>
                        <Route path='/wishlist' element={<Wishlist/>}/>
                        <Route path='/checkout' element={<Checkout/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/contact' element={<Contact/>}/>
                        <Route path={`products/:id`} element={<ProductDetails/>}/>
                    </Route>
                </Route>

                <Route element={<AuthRedirectRoute/>}>
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path='/register' element={<RegisterPage/>}/>
                </Route>

                {/* <Route element={<AdminRoute/>}> */}
                    <Route path='/dashboard' element={<DashboardLayout/>}>
                        <Route index element={<Dashboard/>}/>
                        <Route path='/dashboard/products' element={<ProductsTable/>}/>
                        <Route path='/dashboard/favorites' element={<Wishlist/>}/>
                        <Route path='/dashboard/products/:id' element={<ProductDetails/>}/>
                        <Route path='/dashboard/calender' element={<Calendar/>}/>
                        <Route path='/dashboard/team' element={<TeamTable/>}/>
                    </Route>
                {/* </Route> */}
                        {/* <Route path={`/dashboard`} element={<Dashboard/>}/> */}

                <Route path='*' element={<NotFoundPage/>}/>
            </Routes>

        </Suspense>
    )
}

export default Router

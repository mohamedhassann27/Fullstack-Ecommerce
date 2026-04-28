// import './App.css'
import Router from './routes/Router'
import { ThemeProvider } from './providers/ThemeProvider'
import { Toaster } from './components/ui/sonner'
import { store } from './app/store'
import { Provider } from 'react-redux'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css";
import { useLocation } from 'react-router'

function App() {

// Aos animation
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      offset: 120,
    });
  }, []);
  const location = useLocation();
  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);

  return (
    <>
      <ThemeProvider>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>

              <Router/>
              <div className="fixed top-0 right-0 z-50 pointer-events-none">
                <Toaster position="top-right" />
              </div>

            </TooltipProvider>
          </QueryClientProvider>
        </Provider>
      </ThemeProvider>
    </>
  )
}

export default App

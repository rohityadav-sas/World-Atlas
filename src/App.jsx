import Header from "./pages/Layout/Header"
import Footer from "./pages/Layout/Footer"
import { Outlet } from "react-router-dom"

export default function App() {
  return (
    <div className="h-svh flex flex-col">
      <Header />
      <main className="flex-grow flex bg-surface-10 text-white overflow-hidden">
        <Outlet />
      </main>
      <Footer />
    </div >
  )
}
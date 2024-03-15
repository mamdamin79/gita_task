import DataTable from "./components/DataTable"
import Layout from "./container/Layout"
import Modal from "./components/Modal"
import { FaPlus } from "react-icons/fa"
import Filter from "./components/Filter"
import Location from "./components/Location"

function App() {
 
  return (
    <Layout>
      <div className="container relative mx-auto max-w-6xl bg-gray-100 shaodw-md rounded-md p-4 h-screen">
            <Filter/>
           <DataTable/>
        <div className="flex justify-start mt-1"><Modal icon={<FaPlus/>} work={"افزودن"}/></div>
      </div>
    </Layout>
    
  )
}

export default App

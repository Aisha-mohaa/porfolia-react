import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Data(){
    const [data, setData] = useState([])
   const handlereadData = () => {
    axios.get("http://localhost:9000/read/post").then((res) => {
      setData(res.data)
    })
  }

    useEffect(()=>{
    handlereadData()
  }, [])
  const params = useParams()
  const handleDelete =(id)=>{
    axios.delete(`http://localhost:9000/delete/post/${id}`).then((res)=>{
        alert ("success delete")
        handlereadData()})
  }
    return <div className="flex">
      <div>

        <aside className="w-[100%] h-[100%] bg-yellow-500 p-6 flex flex-col gap-6">
        <div className="flex items-center gap-3 text-2xl font-bold text-gray-800">
        <i ti className="fas fa-tachometer-alt text-xl"></i><span>Data</span>

        </div>
        <div className="flex items-center gap-3 text-lg cursor-pointer hover:text-teal-700 transition">
          <i className="fas fa-envelope text-lg"></i><span>Data</span>
        </div>


        </aside>
        </div>
        <div>

      </div>
        <h1 className="text-3xl font-semibold text-center ml-[10%] font-serif underline">responses</h1>
          <div className="grid grid-cols-3 gap-20 p-8">
        {
            data.length > 0 ? data.map((item, index)=>(
            <div key={index} className="p-4 bg-yellow-200 w-64 h-64 text-xl border border-gray-300">
              <p><b>Name:</b> {item.name}</p>
              <p><b>Email:</b> {item.email}</p>
              <p><b>massage:</b> {item.massage}</p>
             <hr className="border-t-2 border-gray-400 mt-3 w-full"/>
            <div onClick={()=> handleDelete(item._id)} className="text-red-600 text-3xl hover:text-red-800 mt-10">
           <i className="fas fa-trash"></i>
         </div>
            </div>
       
          ))
          :
          <p className="text-gray-500 mt-4">Data majirto</p>
        }
      </div>
        </div>



}

export default Data
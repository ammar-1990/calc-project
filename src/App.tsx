
import { useReducer } from "react"
import { INITIA_STATE,myReducer } from "./reducer/myReducer"
function App() {


const [state,dispatch] = useReducer(myReducer,INITIA_STATE)
console.log(state.myState)

  return (
 <div className="h-screen bg-neutral-200 flex justify-center p-3 flex-col ">
    <div className="p-4 font-bold text-xl text-center">TOTAL {state.myState.reduce((total,el)=>total + ((+el.first  + +el.second - +el.bad - +el.remain)*(el.price)),0)}</div>
  <div className="w-[90%] overflow-scroll mx-auto  myScroll">

  <table className=" sm:w-[800px]  border-separate border-spacing-[1px] mx-auto">
  <thead className="bg-slate-800 text-white sticky top-0">
    <tr className="capitalize">
      <td className="p-3">наименование</td>
      <td className="p-3">принято</td>
      <td className="p-3">приход</td>
      <td className="p-3">брак</td>
      <td className="p-3">остаток</td>
      <td className="p-3">продано</td>
      <td className="p-3">цена</td>
      <td className="p-3">сумма</td>
    </tr>
  </thead>
  <tbody>
    {state.myState.map((el,i)=>(
      <tr key={i} >
        
        <td className={`td ${(+el.first  + +el.second - +el.bad - +el.remain)*(el.price)<0 ?'bg-red-200' : (+el.first  + +el.second - +el.bad - +el.remain)*(el.price)>0 ? "bg-green-200"  : 'bg-white'}`}>{el.name}</td>
        <td className={`td ${(+el.first  + +el.second - +el.bad - +el.remain)*(el.price)<0 ?'bg-red-200' : (+el.first  + +el.second - +el.bad - +el.remain)*(el.price)>0 ? "bg-green-200"  : 'bg-white'}`}><input min={0} className="bg-transparent outline-none focus:bg-slate-200 duration-200 rounded-md" value={el.first} onChange={(e)=>dispatch({type:"CHANGE_INPUT",payload:{index:i,value:e.target.value,name:"first"}})} type="number" /></td>
        <td className={`td ${(+el.first  + +el.second - +el.bad - +el.remain)*(el.price)<0 ?'bg-red-200' : (+el.first  + +el.second - +el.bad - +el.remain)*(el.price)>0 ? "bg-green-200"  : 'bg-white'}`}><input min={0} className="bg-transparent outline-none focus:bg-slate-200 duration-200 rounded-md" value={el.second} onChange={(e)=>dispatch({type:"CHANGE_INPUT",payload:{index:i,value:e.target.value,name:"second"}})} type="number" /></td>
        <td className={`td ${(+el.first  + +el.second - +el.bad - +el.remain)*(el.price)<0 ?'bg-red-200' : (+el.first  + +el.second - +el.bad - +el.remain)*(el.price)>0 ? "bg-green-200"  : 'bg-white'}`}><input min={0} className="bg-transparent outline-none focus:bg-slate-200 duration-200 rounded-md" value={el.bad} onChange={(e)=>dispatch({type:"CHANGE_INPUT",payload:{index:i,value:e.target.value,name:"bad"}})} type="number" /></td>
        <td className={`td ${(+el.first  + +el.second - +el.bad - +el.remain)*(el.price)<0 ?'bg-red-200' : (+el.first  + +el.second - +el.bad - +el.remain)*(el.price)>0 ? "bg-green-200"  : 'bg-white'}`}><input min={0} className="bg-transparent outline-none focus:bg-slate-200 duration-200 rounded-md" value={el.remain} onChange={(e)=>dispatch({type:"CHANGE_INPUT",payload:{index:i,value:e.target.value,name:"remain"}})} type="number" /></td>
        <td className={`td ${(+el.first  + +el.second - +el.bad - +el.remain)*(el.price)<0 ?'bg-red-200' : (+el.first  + +el.second - +el.bad - +el.remain)*(el.price)>0 ? "bg-green-200"  : 'bg-white'}`}>{+el.first  + +el.second - +el.bad - +el.remain}</td>
        <td className={`td ${(+el.first  + +el.second - +el.bad - +el.remain)*(el.price)<0 ?'bg-red-200' : (+el.first  + +el.second - +el.bad - +el.remain)*(el.price)>0 ? "bg-green-200"  : 'bg-white'}`}>{el.price}</td>
        <td className={`td ${(+el.first  + +el.second - +el.bad - +el.remain)*(el.price)<0 ?'bg-red-200' : (+el.first  + +el.second - +el.bad - +el.remain)*(el.price)>0 ? "bg-green-200"  : 'bg-white'}`}>{(+el.first  + +el.second - +el.bad - +el.remain)*(el.price)}</td>
      </tr>
    ))}
  </tbody>
</table>

  </div>

 </div>
  )
}

export default App

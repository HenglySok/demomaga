import { useState } from "react"


function Admin() {
  const [menu, setMenu] = useState("manga");
  console.log(menu);

  function isActive(option) {
    if (option === menu) {
      return "bg-primary-100";
    } else {
      return "bg-[#00000050]";
    }
  }



  return (
    <div className="text-text-100">
      <h2>Mangager Manager</h2>

      <div className="flex items-start justify-between gap-2 
      w-[270px] h-[50px] bg-[#00000070] p-2 rounded-[5px] text-md">
        <button
          onClick={() => { setMenu("manga") }}
          className={`${isActive("manga")} 
        px-3 py-1 rounded-[5px] w-full h-full `}
        >
          Manga
        </button>
        <button
          onClick={() => { setMenu("episode") }}
          className={`${isActive("episode")} 
          px-3 py-1 rounded-[5px] w-full h-full`}
        >
          Episode
        </button>
        <button
          onClick={() => { setMenu("content") }}
          className={`${isActive("content")} 
          px-3 py-1 rounded-[5px] w-full h-full`}
        >
          Content
        </button>
      </div>
    </div>
  )
}

export default Admin
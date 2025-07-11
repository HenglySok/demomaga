import TableManga from '../../components/adminComponent/MangaList/TableManga'
import TableEpisode from '../../components/adminComponent/EpisodeList/TableEpisode'
import { useState } from 'react'


const Admin = () => {
  const [selectedManga, setSelectedManga] = useState(null);
  console.log(selectedManga)

  return (
    <div className='mx-auto grid grid-cols-1 md:grid-cols-12 w-full max-w-screen-xxl p-5'>
      <div className='w-full md:col-span-6 lg:col-span-3'>
        <TableManga
          onMangaSelect={setSelectedManga}
          selectedMangaId={selectedManga?._id}
        />
      </div>

      <div className='h-[100%] w-full md:col-span-6 mx-auto lg:col-span-9'>
        <TableEpisode
          selectedManga={selectedManga}
        />
      </div>
    </div>
  )
}


export default Admin

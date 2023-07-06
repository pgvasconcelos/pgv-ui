'use client';

import Image from 'next/image'
import getWorks from '../../../libs/getWorks'
import { DropDown } from '../../../components/DropDown';
// import { usePathname, useRouter, useSearchParams } from "next/navigation";


export const dynamic = "force-dynamic";

// const load = async () =>{


//         return  search 
// }


const WorksPage = async ({searchParams} = {}  ) =>{
    
    console.log(searchParams)
    const selectedSearch = searchParams?.selected ?? "";
    const selected = Array.isArray(selectedSearch)
    ? selectedSearch[0] : selectedSearch;
 
    //  function handleSelection(e) {
    //     // e.preventDefault();
    //     const value = e.target.value.trim();
    //     router.push(`?query=${value}`);
    //     console.log(value)
    //   }
    if(!searchParams) {
         searchParams = { selected: "all" };
    }
   let query = searchParams.selected

   let works = await getWorks(query);
//    console.log(works[0].attributes)

//    const {
//     query = 'all',
//   } = router.query;
//    const current = new URLSearchParams(searchParams);
//    const search = current.toString();
//    const query = search ? `?${search}` : "";
    // router.push(`/query=${value}`)
    //  console.log(query)
   
   return (
            <main className="p-12 flex items-center justify-between flex-col ">
                <h1 className='text-4xl text-center pb-12 font-light'>Works</h1>

                <section className="">
                <div className="text-xl font-semibold">Would you like to know more about the work I have done?</div>
                 
                <div className="text-sm flex mt-4 align-middle	">
                  <div className='pt-2.5 mr-1'> Filter by type:</div>
                  <DropDown selected={selected || ""}></DropDown>
                  
                </div> 
                <div className='grid lg:grid-cols-2 mt-10 gap-5'>
                
                {  
                    works.map((i) => { 
                        return(
                            <a className=" p-8 border-spacing-3  border border-light-gray rounded-lg block max-w-lg  " href={`works/${i.id}`} id={i.id} key={i.id}>

                              
    
    
                            { i.attributes.password_requeried ?  
                                <div className='pointer-events-none relative lg:-right-96 lg:-top- z-10 flex items-center justify-center rounded-full bg-darkgray bg-opacity-30 p-1 text-black w-8 '>
                                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" class="h-6 w-6"><path d="M5.75 11.75a1 1 0 011-1h10.5a1 1 0 011 1v5.5a2 2 0 01-2 2h-8.5a2 2 0 01-2-2v-5.5zM7.75 10.5v-.157c0-1.562-.094-3.302.996-4.42C9.368 5.288 10.374 4.75 12 4.75c1.626 0 2.632.537 3.254 1.174 1.09 1.117.996 2.857.996 4.419v.157" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> 
    
                               </div> : ''
                              }  
                               
                                 <Image className=''
                                        src={i.attributes.image.data.attributes.url}
                                        width={500}
                                        height={500}
                                        alt=""
                                    />
                                
                                <h1 className="text-xl pt-8 font-bold pb-4">{i.attributes.title}</h1>
                                
                                <p className='pt-4 pb-4 text-darkgray'>{i.attributes.description}</p>
    
                                <div className='flex justify-between pt-8'>
                                   
                                    <h3 className=" text-sm  font-bold ">Ano: {new Date(i.attributes.createdAt).getFullYear()}</h3>
                                    
                                    <div className=' order-last whitespace-nowrap rounded-lg text-darkgray px-2 py-0.5 text-xs font-semibold leading-6 bg-light-gray block w-fit align-end'>
                                    {i.attributes.type}
                                    </div>
                                    
                                </div>
                               
     
                            </a>
                    )})
                }
                </div>
                </section>
            </main>
            
        )

    } 



export default WorksPage;
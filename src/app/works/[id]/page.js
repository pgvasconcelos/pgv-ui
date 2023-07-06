import getWork from "../../../../libs/getWork";
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


const WorksPage = async ( {params: {id}}) => {
    const works = await getWork(id) 
   
    return(
       
        <main className="flex  flex-col items-center justify-between">

            <article className="prose lg lg:prose-xl p-4 pt-12">
            <a href="/works?selected=all" className="flex w-full no-underline">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mt-1.5 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                        <div>Back</div>
                        
                    </a>
                <div className="flex flex-col items-center justify-between">
             
                  
               <Image className='p-2'
                        src={works.image.data.attributes.url}
                        width={500}
                        height={500}
                        alt=""
                    />
                    </div>
            <h1 className="">{works.title}</h1>
            <p className="italic text-gray">{works.description}</p>
           
            <ReactMarkdown linkTarget="_blank" remarkPlugins={[remarkGfm]} className="pt-8">{works.content}</ReactMarkdown>
        
            </article>
        </main>
    )
}
export default WorksPage;
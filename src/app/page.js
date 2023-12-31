import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen">
      
      <section className='flex  flex-col items-center justify-between'> 

      <div className='max-h-fit text-center max-w-lg  pt-24 '>
            <h1 className='text-7xl text-bold h-auto'>
              Let`s create products together?
              </h1>
          
            <h4 className='text-lg mt-24 mb-24 font-semibold'>
            I love creating products and businesses that solve real and valuable problems.
            </h4>   
          
              <Image className='mt-24 -mb-1'
            src="/profile2.png"
            width={500}
            height={500}
            alt="Picture of Pedro Gouveia"
          />
      </div> 
      </section>
   
      <section className='bg-light-green h-fit text-darkgray 	w-full'>
        
        <div className='flex w-full flex-col text-black  text-center'>
            <div className='font-bold flex m-auto mt-14'>
              Pedro Gouveia | 36 years<a target='_blank' href='https://www.linkedin.com/in/pedro-gouveia-4843a628/'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="22"><path d="M29.63.001H2.362C1.06.001 0 1.034 0 2.306V29.69C0 30.965 1.06 32 2.362 32h27.27C30.937 32 32 30.965 32 29.69V2.306C32 1.034 30.937.001 29.63.001z" fill="#0177b5"/><path d="M4.745 11.997H9.5v15.27H4.745zm2.374-7.6c1.517 0 2.75 1.233 2.75 2.75S8.636 9.9 7.12 9.9a2.76 2.76 0 0 1-2.754-2.753 2.75 2.75 0 0 1 2.753-2.75m5.35 7.6h4.552v2.087h.063c.634-1.2 2.182-2.466 4.5-2.466 4.806 0 5.693 3.163 5.693 7.274v8.376h-4.743V19.84c0-1.77-.032-4.05-2.466-4.05-2.47 0-2.85 1.93-2.85 3.92v7.554h-4.742v-15.27z" fill="#fff"/></svg>
              </a>
            </div>
          
            <div className='text-sm '>
              16 years as a designer | Portugal Based  
            </div>
        </div>
        <div className='flex flex-col max-w-5xl justify-between  m-auto'>
            <div className='text-8xl font-serif -mb-10 -ml-20'>
              &quot;
            </div>

            <p className='items-center text-center align-middle text-lg font-serif font-medium  leading-9		p-8'>
            My differential is my versatility. I have comprehensive experience in all stages of product development, from research to post-sales. I have held the position of CEO, approved projects for investment acquisition, led teams, created processes, designed websites and applications, conducted UX research, and developed interfaces. Additionally, I have conducted requirement assessments for compliance rules, independently developed an IoT product, and worked with games and gamification. I have also gained some experience in digital marketing, ranging from SEO to online sales ads.
           <br></br>           <br></br>

            While I may not be an expert in all these areas, my commitment lies in delivering quality work, where achieving results is always the primary objective of a project. I recognize my limitations, and my estimates are based on my ability to deliver within the given timeframe, taking into account the time required to learn things that I am not yet proficient in. Furthermore, I value the ability to contribute, co-create, and share tasks within a team.
            </p>
            <div className='text-8xl items-end text-right font-serif -mr-20'>
              &quot;
            </div>
        </div>
        
      </section>
      
      {/* services section  */}
      <section id='services' className='flex w-full flex-col text-center'>
        <h1 className='text-5xl mt-16 mb-4 text-semibold'>Services</h1>
          <h2 className='text-lg mb-8  '> How can I help your business?</h2>
        
        
        <div className='flex text-left max-w-5xl m-auto flex-col'>
          <h2 className='text-2xl font-semibold pl-8 mt-8 flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
          </svg><span className='pl-4'>Product and service design </span>
          </h2>
           <div className='flex max-w-5xl m-auto'> 
              <p className='text-left p-8 pr-32 text-sm lg:text-base'> 
              I can work throughout the user-centered design cycle to develop products that are more engaging and solve real problems. I enjoy conducting research with clients to identify their real needs, <stroke className="font-bold">map their journeys</stroke>, and uncover valuable business opportunities. After we have made relevant discoveries, I can help<stroke className="font-bold"> prototype</stroke> our solution at a low cost, saving time and development resources. I can also organize and conduct <stroke className="font-bold">tests with real users</stroke> to <stroke className="font-bold">validate the hypotheses</stroke> and insights we discovered in the earlier research or solution phase.
              </p> 
                <div className='p-8 -m-8 hidden lg:block'>
                    <Image className='mt-8 -mb-1 max-w-lg'
                      src="/dt_ process.jpg"
                      width={400}
                      height={400}
                      alt="Picture of Pedro Gouveia"
                    />
                </div>
              </div>
          </div>

          <div className='flex max-w-5xl m-auto flex-col pt-20 '>
          <h2 className='text-2xl font-semibold pl-8 text-left flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
</svg> <span className='pl-4'>Online business consulting</span>
</h2>
          <div className='flex max-w-5xl m-auto '> 
              <div className='p-8 -m-8 hidden lg:ml-8 lg:block'>
                  <Image className='mt-8 -mb-1 max-w-lg'
                    src="/business_process.jpg"
                    width={300}
                    height={300}
                    alt="Picture of Pedro Gouveia"
                  />
              </div>
            <p className='text-left lg:pl-52 p-8 text-sm lg:text-base '> 
            I can help you <strong> structure an online business</strong> from scratch, assist in<strong> defining the value of your product or service</strong>, guide you through the process of<strong> business validation</strong>, help and teach you how to<strong> capture and convert leads</strong> into customers in an organized and metric-driven way. Together, we can create or enhance your<strong> website and digital presence</strong>, refine your sales pitch, and<strong> define strategies</strong> to boost sales. In more mature companies, I can also assist in implementing an agile workflow to increase team productivity.  
              </p> 
              </div>

          </div>
      
          <div className='flex max-w-5xl m-auto flex-col pt-20'>
          <h2 className='text-2xl font-semibold flex pl-8 text-left'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
</svg> <span className='pl-4'>
 Software development</span></h2>
          <div className='flex max-w-5xl m-auto'> 

              <p className='text-left pr-32 p-8 text-sm lg:text-base'> 
            I can help you develop <strong>landing pages</strong>, <strong>CMS websites</strong>, build simple systems for <strong>Minimum Viable Products (MVPs)</strong> to validate business ideas, or even perform small <strong>API integrations</strong>. I&apos;m also capable of creating <strong>API documentation</strong>, understanding and testing all existing documentation. Additionally, I can conduct <strong>compliance requirements</strong> assessments on software to ensure that the system meets all standards and regulations. As a designer who understands code, and has worked on both back-end and front-end projects, I can think of solutions that are easy to implement and consider the impact on the development team. These skills help me communicate effectively with the team.
                </p> 
                <div className='p-8 -m-8 hidden lg:block'>
                    <Image className='mt-8 -mb-1 max-w-lg'
                      src="/dev_tech.jpg"
                      width={400}
                      height={400}
                      alt="Picture of Pedro Gouveia"
                    />
                </div>
              </div>

          </div>

          <div className='flex max-w-5xl m-auto flex-col pt-20 '>
          <h2 className='text-2xl font-semibold pl-8 text-left flex'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
</svg> <span className='pl-4'>
 Workshops and training </span></h2>
          <div className='flex max-w-5xl m-auto'> 
          <div className='p-8 -m-8 lg:ml-8'>
                    <Image className='mt-8 -mb-1 max-w-lg hidden lg:block'
                      src="/dt_sprint.jpg"
                      width={400}
                      height={400}
                      alt="Picture of Pedro Gouveia"
                    />
                </div>
              <p className='text-left lg:pl-52 p-8 text-sm lg:text-base '> 
              <stroke className="font-bold"> 1.Facilitation of a Design Sprint:</stroke>
              &quot;The sprint is a five-day process for answering critical business questions through design, prototyping, and testing ideas with customers.&quot; Created by Google Ventures and used in many companies and startups around the world.
  <br></br> <br></br><br></br>
    <stroke className="font-bold">2.Facilitation of Workshops</stroke> for the application of Design Thinking to encourage co-creation. Workshops aimed at exercising creativity and co-creation are important tools for design.
                </p> 
               
              </div>
          </div>

      </section>
    <section className='flex flex-col max-w-5xl justify-between  m-auto mb-16'>
    <h1 className='lg:text-xl text-lg mb-8 text-center mt-24'>Would you like to see some projects that I have worked on?</h1>
    <a className='bg-black border-r-2 border-none rounded text-white hover:text-gray w-52 font-semibold m-auto p-4' href='/works'> See some of my works</a>
    </section>
    </main>
  )
}

import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'pgv.services',
  description: 'Designing amazing projects too the wolrd',
}

 
export default function RootLayout({ children }) {
  return (
    
    <html lang="en">

      <body className={inter.className}>
      <nav className='m-5' >
                  <ul className='container mx-auto px-4 flex items-center justify-center w-screen text-dark-gray flex-wrap '>
                      <li 
                      className="px-4 hover:text-green italic">
                        <a 
                        href='/'
                        >
                          pgv
                        </a>
                      </li> 
                      <li 
                         className="px-4 hover:text-green">
                          <a href='/#services' >
                          Services
                          </a>
                      </li>
                      <li 
                         className="px-4 hover:text-green">
                          <a href='/works?selected=all' >
                          Works
                          </a>
                      </li>
                      <li className="px-4">
                      <a target='_blank' href='https://www.linkedin.com/in/pedro-gouveia-4843a628/' >LinkedIn</a>
                      </li>
                      <li 
                         className="px-4 bg-gray border-r-2 border-none rounded hover:text-green hover:bg-trasparentgray hidden lg:block">
                          <a href="mailto:hi@pgv.service">
                          hi@pgv.service
                          </a>
                      </li>

                  </ul>   
                </nav>
             
              <section>
              
       
              {children}
            </section>
            <footer className='bg-light-green h-fit text-darkgray w-full flex p-10 '>
            <div className='flex max-w-5xl justify-between  m-auto'>
            <span className='italic text-sm'> {new Date().getFullYear()} © All Rights Reserved-</span> <a className='ml-2 mr-2 font-semibold text-sm' href="mailto:hi@pgv.service">hi@pgv.service</a>-<a  href='https://www.linkedin.com/in/pedro-gouveia-4843a628/' target='_blank'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="22"><path d="M29.63.001H2.362C1.06.001 0 1.034 0 2.306V29.69C0 30.965 1.06 32 2.362 32h27.27C30.937 32 32 30.965 32 29.69V2.306C32 1.034 30.937.001 29.63.001z" fill="#0177b5"/><path d="M4.745 11.997H9.5v15.27H4.745zm2.374-7.6c1.517 0 2.75 1.233 2.75 2.75S8.636 9.9 7.12 9.9a2.76 2.76 0 0 1-2.754-2.753 2.75 2.75 0 0 1 2.753-2.75m5.35 7.6h4.552v2.087h.063c.634-1.2 2.182-2.466 4.5-2.466 4.806 0 5.693 3.163 5.693 7.274v8.376h-4.743V19.84c0-1.77-.032-4.05-2.466-4.05-2.47 0-2.85 1.93-2.85 3.92v7.554h-4.742v-15.27z" fill="#fff"/></svg>
              </a>

              <a href='https://github.com/pgvasconcelos' target='_blank'>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
            </footer> 
        
        </body>
    </html>
  )
}

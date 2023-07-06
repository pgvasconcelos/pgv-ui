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
                      <a target='_blank' href='https://www.linkedin.com/in/pedro-gouveia-4843a628/'>LinkedIn</a>
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
            <span className='italic text-sm'> {new Date().getFullYear()} © All Rights Reserved-</span> <a className='ml-2 mr-2 font-semibold text-sm' href="mailto:hi@pgv.service">hi@pgv.service</a>-<a  href='https://www.linkedin.com/in/pedro-gouveia-4843a628/'>
            <Image className='ml-2'
                   src="/icon-linkedin.png"
                   width={20}
                    height={20}
                    alt="Picture of Pedro Gouveia"
                  />
              </a>
            </div>
            </footer> 
        
        </body>
    </html>
  )
}

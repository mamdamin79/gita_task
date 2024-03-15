import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
        <header className='w-full bg-gray-50 p-6 text-center mb-4'>header</header>
        <main className=''>
            {
                children
            }
        </main>
        <footer className='w-full bg-gray-50 p-6 text-center mt-4'>footer</footer>
    </div>
  )
}

export default Layout
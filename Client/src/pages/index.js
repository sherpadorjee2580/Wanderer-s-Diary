import React from 'react'
import Header from './component/Header'
import Link from 'next/link'
import Footer from './component/Footer'
export default function index(){
  return (
    <>
      <Header/>
        <section className='hero'>
          <div className='container'>
            <div className='request--box'>
              <h2>Request a ride now</h2>
              <form>
                    <input type='text' placeholder='Pick up address'/>
                    <input type='text' placeholder='Drop off address'/>
                  </form>
                <div className='btn'>
                  <Link href='/Login' >Request now</Link>
                </div>
            </div>
          </div>
        </section>
      <Footer/>
     </>
  )
}
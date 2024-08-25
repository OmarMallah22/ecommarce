import React from 'react'
import { Helmet } from 'react-helmet'

export default function Contact() {
  return (
    <>
    <Helmet>
        <title>Contact</title>
      </Helmet>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 dark:bg-gray-950 py-6 sm:py-12">
      <div className="container mx-auto px-6 md:px-12 xl:px-6 ">
      <div>
      <p className="text-sm leading-4 text-gray-600 dark:text-white">Home</p>
    </div>
    <div className="mt-3">
      <h1 className="text-3xl lg:text-4xl tracking-tight font-semibold leading-8 lg:leading-9 text-gray-800 dark:text-white mb-10">Contact</h1>
    </div>
      </div>
        <div className="bg-white max-w-4xl mx-auto w-full">
      
          <div className="grid grid-cols-6 h-full">
            <div className="dark:bg-gray-800 bg-gray-100 p-10 col-span-2">
              <h2 className="mb-10 font-bold text-2xl text-gray-100 before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">Infos Contact</h2>
              <p className="font-bold text-gray-100 py-8 border-b border-gray-700">
                Location Address
                <span className="font-normal text-xs text-gray-300 block">Romada, 16/A, YoYo City, USA</span>
              </p>
              <p className="font-bold text-gray-100 py-8 border-b border-gray-700">
                Phone Number
                <span className="font-normal text-xs text-gray-300 block">+889 (909) 567 87 9</span>
              </p>
              <p className="font-bold text-gray-100 py-8 border-b border-gray-700">
                Email Address
                <span className="font-normal text-xs text-gray-300 block">example@example.com</span>
              </p>
              <p className="font-bold text-gray-100 py-8 border-b border-gray-700">
                Web Address
                <span className="font-normal text-xs text-gray-300 block">zigzagexampl.com</span>
              </p>

            </div>
            <div className="bg-gray-50 p-14 col-span-4">
              <h2 className="mb-14 font-bold text-4xl text-gray-900 before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">Entrer en contact</h2>
              <div className="grid gap-6 mb-6 grid-cols-2">
                <div className="flex flex-col">
                  <input className="py-4 bg-white rounded-full px-6 placeholder:text-xs" aria-placeholder="Votre nom" placeholder="Votre nom" ></input>
                </div>
                <div className="flex flex-col">
                  <input className="py-4 bg-white rounded-full px-6 placeholder:text-xs" aria-placeholder="Votre nom" placeholder="Votre prénom" ></input>
                </div>
              </div>
              <div className="grid gap-6 mb-6 grid-cols-2">
                <div className="flex flex-col">
                  <input className="py-4 bg-white rounded-full px-6 placeholder:text-xs" aria-placeholder="Votre nom" placeholder="Email Adresse" ></input>
                </div>
                <div className="flex flex-col">
                  <input className="py-4 bg-white rounded-full px-6 placeholder:text-xs" aria-placeholder="Votre nom" placeholder="Sujet" ></input>
                </div>
              </div>
              <div className="mb-6">
                <textarea className="w-full rounded-2xl placeholder:text-xs px-6 py-4" placeholder="Votre message ici" name="" id="" rows="8"></textarea>
              </div>
              <div className="flex justify-center">
                <button className="rounded-full bg-gray-900 text-white font-bold py-4 px-6 min-w-40 hover:bg-gray-800 transition-all">Valider</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

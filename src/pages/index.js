import Image from 'next/image'
import { Inter } from 'next/font/google'
// import './index.css'
import { TextField,Button } from '@mui/material'
import Head from 'next/head'

export default function Home() {
  return (
    <main className='maindiv flex justify-center h-[100vh] items-center bg-[#14688E]'>
        <div className='bg-white flex flex-col items-center gap-y-6 p-2 py-10 md:p-10 w-[80vw] md:w-[50vw] 2xl:w-[30vw] rounded-md border border-gray-200 shadow-md shadow-gray-50/50'>
          <h2 className='text-center my-4 text-4xl text-black font-poppins'>
            PANEL
          </h2>
          <TextField
            id="outlined-password-input"
            label="Kullanıcı Adı"
            type="text"
            autoComplete="current-password"
            className='w-4/5 bg-[#E9F0FD]'
          />
          <TextField
            id="outlined-password-input"
            label="Şifre"
            type="password"
            autoComplete="current-password"
            className='w-4/5 bg-[#E9F0FD]'
          />
          <div className='flex flex-row justify-end w-4/5'>
            <Button variant="outlined" className='normal-case'>Giriş</Button>
          </div>
        </div>
    </main>
  )
}

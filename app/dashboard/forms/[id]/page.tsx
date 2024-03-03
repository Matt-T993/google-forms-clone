import MainForm from '@/components/MainForm'
import { fetchFormById } from '@/lib/data'
import { notFound } from 'next/navigation'
import React from 'react'

const FormIdpage = async({params: {id}}: {params: {id:string}}) => {
  const form = await fetchFormById(id)

  if(!form?.id) {
    notFound()
  }
  return <MainForm form={form}/>
}

export default FormIdpage
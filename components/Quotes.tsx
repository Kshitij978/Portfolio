import { PortableText } from '@portabletext/react'

export default function Quotes({ data }) {
  const serializer = {
    types: {
      text: ({ children }) => (
        <q className=" w-1/2 text-center text-3xl italic leading-normal tracking-wide before:content-none after:content-none">
          {children}
        </q>
      ),
    },
  }

  return (
    <div className="split-lines relative mt-20 flex w-full justify-center pb-20 pt-4">
      <i className="ri-double-quotes-l left-50 absolute -top-20 -z-50  p-6 text-6xl text-white opacity-80"></i>
      <PortableText value={data} />
    </div>
  )
}

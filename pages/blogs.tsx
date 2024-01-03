import { useRouter } from 'next/router'

export default function Blog() {
  const router = useRouter()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-6 text-white bg-black">
      <h1 className="text-6xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
        Coming Soon!
      </h1>
      <img
        alt="Coming Soon Illustration"
        className="mt-4"
        height="300"
        src="/img/coming-soon.svg"
        style={{
          aspectRatio: '300/300',
          objectFit: 'cover',
        }}
        width="300"
      />
      <p className="my-4 text-xl text-gray-300">
        I'm working on something exciting for you. Stay tuned!
      </p>

      <button className="border-b border-dashed" onClick={() => router.back()}>
        &larr;&nbsp; &nbsp;Go Back
      </button>
    </div>
  )
}

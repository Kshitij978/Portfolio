import PageTransitionLayout from 'components/PageTransitionLayout'

export default function experiments() {
  return (
    <PageTransitionLayout>
      <div className="mx-auto flex h-max w-4/5 flex-col gap-10 py-20">
        <h1 className="text-5xl">Experiments</h1>
        <h2 className="text-2xl text-gray-300">
          These are some of my experimental projects
        </h2>
        <iframe
          src="https://codesandbox.io/embed/prod-sea-53ql5f?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
          className="w-full"
          style={{
            height: '500px',
            border: 0,
            borderRadius: '4px',
            overflow: 'hidden',
          }}
          title="prod-sea-53ql5f"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>

        <iframe
          src="https://glitch.com/embed/#!/embed/morphing?path=index.html&previewSize=100"
          title="morphing on Glitch"
          allow="geolocation; microphone; camera; midi; encrypted-media; xr-spatial-tracking; fullscreen"
          allowFullScreen
          className="h-[500px] w-full border-0"
        ></iframe>

        <iframe
          src="https://glitch.com/embed/#!/embed/shader-fun?path=index.html&previewSize=100"
          title="shader-fun on Glitch"
          allow="geolocation; microphone; camera; midi; encrypted-media; xr-spatial-tracking; fullscreen"
          allowFullScreen
          className="h-[500px] w-full border-0"
        ></iframe>
      </div>
    </PageTransitionLayout>
  )
}

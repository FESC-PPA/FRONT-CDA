export const Fondo = () => {
  return (
    <div
      className="absolute h-screen w-screen -z-10 pb-14 bg-right bg-cover transform-gpu overflow-hidden blur-3xl sm:-top-80"
      aria-hidden="true" style={{ backgroundImage: "url('bg.svg')", backgroundAttachment: "fixed" }}
    > </div>
  )
}
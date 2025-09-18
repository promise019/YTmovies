export default function ToastContainer() {
  return (
    <section className={`fixed w-screen p-2 flex rounded-lg border border-blue-700`}>
      <p></p>
      <button>x</button>
    </section>
  );
}



export const toast= {
  info: (detail:string)=> detail,
  success: (detail:string)=> detail,
  error: (detail:string)=> detail
}
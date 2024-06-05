const Footer = () => {
  const curentYear = new Date().getFullYear()
  return (
    <>
      <footer className="fixed bottom-0 left-0 right-0 bg-primary-deep text-center text-white sm:fixed sm:bottom-0 sm:right-0 z-20">
        <div className="mx-3 my-2">&copy; {curentYear} <a href="https://ferlando.me/" className="font-semibold">Ferlando.me</a>. All Rights Reserved.</div>
      </footer>
    </>
  )
}

export default Footer

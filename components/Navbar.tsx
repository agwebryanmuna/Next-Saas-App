import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";


const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link href='/'>
        <div className='flex items-center gap-x-2.5 cursor-pointer'>
          <Image
            src='/images/logo.svg'
            width={46} height={46} alt='logo'
          />
        </div>
      </Link>
      
      <div className='flex items-center gap8'>
        <NavItems/>
        <p>Sign In</p>
      </div>
    </nav>
  )
}
export default Navbar

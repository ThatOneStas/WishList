import { useMemo } from 'react'
import { useRouter } from 'next/router'
import s from "@/components/breadcrumbs/index.module.scss"
// link
import Link from 'next/link'
// imgs
import Image from 'next/image'
import Arrow from "@/assets/img/breadcrumbs-arrow.svg.svg"
import Home from "@/assets/img/Home.svg"

const breadcrumbs = () => {
  const router = useRouter()
  const path = useMemo(()=>{
    return router.asPath
  },[])
  console.log(path)
  return (
    <>
    <div className={s.breadcrumbs}>
      <Link className={s.breadcrumbs__home}  href={"/"}><Image src={Home} alt='home-icon'></Image></Link>
      <Image className={s.breadcrumbs__arrow} src={Arrow} alt='arrow-icon'></Image>
      <Link className={s.breadcrumbs__link} href={"/"}>Wishlist</Link>
    </div>
    </>
  )
}

export default breadcrumbs
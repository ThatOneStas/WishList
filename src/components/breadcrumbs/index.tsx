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
  // getting path, as list
  const path = useMemo(()=>{
    return (
      router.pathname.split('/').slice(1)
      // deleting fist elemnt as it's empty
    )
  },[])
  // path.push('Other link')
  // console.log(path)
  return (
    <>
    <div className={s.breadcrumbs}>
      <Link className={s.breadcrumbs__home}  href={"/"}><Image src={Home} alt='home-icon'></Image></Link>
      {
        // if they exist, display them
        path && path.map((item:string)=>{
          return (
            <li className={s.breadcrumbs}>
              <Image className={s.breadcrumbs__arrow} src={Arrow} alt='arrow-icon'></Image>
              <Link className={s.breadcrumbs__link} href={`/${item}`}>{item}</Link>
            </li>
          )
        })
      }
    </div>
    </>
  )
}

export default breadcrumbs
import React from 'react'
import s from "@/components/card/index.module.scss"
// img
import Image from 'next/image'
import Heart from "@/assets/img/Frame.svg"
import Remove from "@/assets/img/Vector 4.svg"

interface Props {
  img: any,
  code: number,
  name: string,
  stock: string,
  quantity: number,
  price: number,
}

const card = ({img,code,name,stock,quantity,price}:Props) => {
  return (
    <>
    <div className={s.card}>
      <Image className={s.card__img} src={img} alt='card-img'></Image>
      <h2 className={s.card__code}>{code}</h2>
      <h2 className={s.card__name}>{name}</h2>
      <h2 className={s.card__stock}>{stock}</h2>
      <h2 className={s.card__quantity}>{quantity} qty.</h2>
      <h2 className={s.card__price}>{price} €</h2>
      <button className={s.card__btn}>
        <h2></h2>
      </button>
      <div className={s.card__favourite}><Image src={Heart} alt='favourite'></Image></div>
      <Image className={s.card__remove} src={Remove} alt='remove'></Image>
    </div>
    </>
  )
}

export default card
import React, { useState, useEffect, useRef } from "react"
import '../assets/css/style.css';

const CardImage = ({
  category = "magic",
  description = "blank card",
  imagelink = "https://thiscatdoesnotexist.com/",
  title = "Title",
}) => {
  
  const [image, setImage] = useState(null)
  const [backImage, setBackimage] = useState(null)
  const canvas = useRef(null)

  useEffect(() => {
    const cardImage = new Image();
    cardImage.src = imagelink
    cardImage.onload = () => setImage(cardImage)
  }, [imagelink])

  useEffect(() => {
    const backImage = new Image();
    if (category === "magic"){
      backImage.src = "https://i.pinimg.com/originals/1a/bb/7d/1abb7d76f31479e6db9f4174ad201d3f.jpg"
    } else if (category === "trap"){
      backImage.src = "https://i.pinimg.com/564x/83/d2/1e/83d21e59fc317b0f59adbdbd0a4b9dbb.jpg"
    }
    backImage.onload = () => setBackimage(backImage)
  }, [category])

  useEffect(() => {
    if(image && canvas && backImage) {
      const ctx = canvas.current.getContext("2d") 
      // Gambar, posisi kiri, posisi dari atas, lebar, tinggi
      ctx.drawImage(backImage, 0, 0, 450, 650 )
      // Gambar dibawah menimpa yang atas
      ctx.drawImage(image, 58, 135, 335, 335)
      // Ketentuan font tulisan
      ctx.font = "30px Times New Roman"
      // warna font
      ctx.fillStyle = "white"
      // alingment
      ctx.textAlign = "left"
      // Tulisan atas
      ctx.fillText(title, 45, 67)

      // bisa ganti detail font
      ctx.font = "22px Times New Roman"
      ctx.fillStyle = "black"
      ctx.fillText(description, 47, 525, 360, 400)
    }
  },)

  return (
    <div>
        <canvas className="canvas"
            ref={canvas}
            // ini ukuran gambar yang ditampilkan
            width={450}
            height={650}
            />
    </div>
  )
}

export default CardImage
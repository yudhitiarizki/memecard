import React, { useState, useEffect, useRef } from "react"

const useCard = (title,imagelink,category,description,scale) => {
  const [hasil,setHasil] = useState(null)
  const [image, setImage] = useState(null)
  const [backImage, setBackimage] = useState(null)
  const canvas = useRef(null)
  console.log(canvas)

  const imagelinkcard = imagelink
  
  useEffect(() => {
    const cardImage = new Image();
    cardImage.src = imagelinkcard
    cardImage.onload = () => setImage(cardImage)
  }, [imagelinkcard])

  useEffect(() => {
    const backImage = new Image();
    if (category === "magic"){
      backImage.src = "https://i.pinimg.com/originals/1a/bb/7d/1abb7d76f31479e6db9f4174ad201d3f.jpg"
    } else if (category === "trap"){
      backImage.src = "https://i.pinimg.com/564x/83/d2/1e/83d21e59fc317b0f59adbdbd0a4b9dbb.jpg"
    }
    backImage.onload = () => setBackimage(backImage)
  }, [category])
  
  console.log(canvas)
  useEffect(() => {
    if(image && canvas) {
      console.log(image)
      console.log(canvas)
      const ctx = canvas.current.getContext("2d") 
      ctx.scale(scale,scale)
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
      setHasil(canvas)
    }
  }, [ image, canvas, title, description, backImage, scale])


  return [hasil];
};

export default useCard;
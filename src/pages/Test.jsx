// import useCard from "../hooks/useCard";

// const Test = () => {
//   const title = "lllllllllllllllllllllllllllllllllllll"
//   const imagelink = "https://thiscatdoesnotexist.com/"
//   let category = "trap"
//   const description = "Saat kartu ini aktif, lawan harus memberi makan kucing"
//   const scale = 0.5

//   const [canvas] = useCard(title,imagelink,category,description,scale);
//   return (
//     <div>
//       <canvas ref={canvas} width={225} height={325} />
//       <h1>test</h1>
//       {/* <img src={trap_card}  height={50} width={50}/> */}
//     </div>
//   );
// }

// export default Test;








import CardImage from "../hooks/cadangan";


const Test = () => {
  return (
    <div>
      <CardImage/>
      <h1>test</h1>
      {/* <img src={trap_card}  height={50} width={50}/> */}
    </div>
  );
}

export default Test;
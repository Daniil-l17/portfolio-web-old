

export const Button = ({title,func}:{title:string,func?:() => void}) => {
  return (
    <button onClick={func} className=" cursor-pointer text-current scaleHover border-none hover:bg-[#3d3d3d] px-6 bg-[#333] rounded-md py-2">
      <span className=" text-current font-bold">{title}</span>
    </button>
  )
}

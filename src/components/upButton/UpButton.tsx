export const UpButton = ({prods}: {prods: () => void}) => {
  return (
    <span
      onClick={prods}
      className=" fixed cursor-pointer bottom-[26px] right-[48px]"
    >
      👆
    </span>
  )
}

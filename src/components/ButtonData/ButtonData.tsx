import type { ButtonDataProps } from "./ButtonData.types"

export default function ButtonData<T>({
    classNameButton,
    setData,
    text,
    operator
}: ButtonDataProps<T>) {
  const handleClick = () => {
    setData(operator as T)
  }

  return (
    <button className={classNameButton} onClick={handleClick}>{text}</button>
  )
}

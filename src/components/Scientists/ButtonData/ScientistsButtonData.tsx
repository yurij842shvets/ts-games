import type { ButtonDataProps } from "./ScientistsButtonData.types"

export default function ButtonData<T>({
    classNameButton,
    setData,
    text,
    action
}: ButtonDataProps<T>) {
  const handleClick = () => {
    setData(action())
  }

  return (
    <button className={classNameButton} onClick={handleClick}>{text}</button>
  )
}

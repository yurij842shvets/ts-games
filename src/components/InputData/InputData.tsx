import type {InputDataProps} from './InputData.types'

export default function InputData<T>({
    classNameInput,
    type,
    setData
}: InputDataProps<T>) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = type === 'number' ? Number(e.target.value) : e.target.value
        setData(value as T)
    }
    return (
        <label htmlFor="">
            <input className={classNameInput} type={type} onChange={handleChange}/>
        </label>
    )
}
export interface InputDataProps<T> {
    classNameInput: string;
    type: string;
    setData: React.Dispatch<React.SetStateAction<T>>
}
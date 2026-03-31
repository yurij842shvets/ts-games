export interface ButtonDataProps<T> {
    classNameButton: string;
    setData: React.Dispatch<React.SetStateAction<T>>;
    text: string,
    operator: string
}
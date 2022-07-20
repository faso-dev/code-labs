export interface SearchFieldProps {
    iconColor: string
    iconWidth: string
    iconHeight: string
    radius: string
    buttonVariant?: string,
    buttonOutlined?: boolean,
    buttonRadius?: string,
    onType: (...args: any) => void
    onSearch: () => void
}
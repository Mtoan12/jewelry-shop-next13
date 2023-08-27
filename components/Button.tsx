type Props = {
    children: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
    className?: string;
    size?: 'small' | 'large';
    type?: 'submit' | 'reset' | 'button' | undefined;
};
export default function Button({
    type = 'button',
    size = 'small',
    children,
    disabled,
    onClick,
    className = '',
}: Props) {
    const sizeClassMap = {
        small: 'py-2 px-3',
        large: 'py-3 px-4',
    };
    const sizeClass = sizeClassMap[size];
    return (
        <button
            type={type}
            className={`bg-primaryColor font-semibold text-white ${sizeClass} ${className} hover:bg-primaryColor-hover transition-colors duration-300 shadow-md hover:shadow-none`}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

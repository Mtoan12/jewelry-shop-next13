type Props = {
    children: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
    className?: string;
    size?: 'small' | 'large';
    type?: 'button';
};
export default function Button({
    type,
    size = 'small',
    children,
    disabled,
    onClick,
    className,
}: Props) {
    const sizeClass = size === 'small' ? 'py-2 px-3' : 'py-3 px-4';
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

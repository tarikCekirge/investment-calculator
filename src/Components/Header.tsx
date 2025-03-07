
type HeaderProps = {
    title: string;
}
const Header = ({ title }: HeaderProps) => {
    return (
        <header>
            <div className="container p-4">
                <h1 className="text-center text-4xl font-bold text-[#003A72]">{title}</h1>
            </div>
        </header>
    )
}

export default Header
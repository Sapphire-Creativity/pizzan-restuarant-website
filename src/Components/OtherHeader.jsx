
const OtherHeader = ({ backgroundImage, title, subTitle }) => {
    return (
        <header
            className="w-full h-[70vh] relative bg-cover bg-center bg-no-repeat flex items-center justify-center text-white overflow-hidden "
            style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="absolute inset-0 bg-secondary bg-opacity-30 flex flex-col gap-3 items-center justify-center text-center p-6">
                <h2 className="font-workSans text-white font-medium text-2xl md:text-3xl">{title}</h2>
                <span className="bg-white w-[5rem] h-[.1rem]"></span>
                <p className="text-[0.8rem] sm:text-base md:text-lg text-gray-100">{subTitle}</p>
            </div>

        </header>
    );
};

export default OtherHeader;
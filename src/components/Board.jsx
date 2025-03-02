export default ({ children, title }) => {
    return (
        <>
            <div>
                <div>
                    <div className="flex justify-between bg-primary p-2" >
                        <img className="bg-white w-[30px] h-[30px] m-1" src="https://e7.pngegg.com/pngimages/559/974/png-clipart-file-folders-computer-file-directory-computer-icons-filing-cabinet-angle-rectangle.png" alt="no" />
                        <span>{title}</span>
                    </div>
                    <div>
                        {children}
                    </div>

                </div>
            </div>
        </>
    )
}
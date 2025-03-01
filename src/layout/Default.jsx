import Topbar from "../components/Topbar";

const LayoutDefault = ({children}) => {

    return (
        <>
            <div>
                <Topbar/>
            </div>
            <div>
                {children}
            </div> 
        </>
    );
}

export default LayoutDefault;
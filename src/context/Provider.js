import React , {useState} from "react";
import PackageContext  from './Context'

const Provider = (props)=>{
    const [mission , setMission] = useState({
        mname:'Go To Russia',
        Agent:'007',
        accept:false
    })
    return(
        <PackageContext.Provider value={{
            data:mission
            // isAccepted:()=>{
            //     setMission(...mission , accept = true)
            // }
        }}>
            {props.children}
        </PackageContext.Provider>
    );
}

export default Provider;
import Image from "next/image";
import angleRight from "../assets/angle-right-black.svg";
import LocalIcons from "./icons";

const SidebarMenuListItem=({leftIcon, title, withChevron})=>{
    return(
       <li className='sidebarMenuItem'>
       <div className="flex gap-2 items-center">
         <div className="listIcon">
            {leftIcon && <LocalIcons iconName={leftIcon} />}
         </div>
        {title} 
       </div>
       {withChevron && 
       <div className="w-2.5">
                <LocalIcons iconName={'chevronRight'} />
       </div>
       }
        
        </li> 
    )
}

export {SidebarMenuListItem};
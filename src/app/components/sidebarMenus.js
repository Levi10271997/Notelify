import Image from "next/image";
import angleRight from "../assets/angle-right-black.svg";


const SidebarMenuListItem=({leftIcon, title})=>{
    return(
       <li className='sidebarMenuItem'>
       <div className="flex gap-2 items-center">
         {leftIcon && <Image src={leftIcon} alt="icon" width={16} height={16}/>}
        {title} 
       </div>
        <Image src={angleRight} alt="chevron-right" width={16} height={16}/>
        </li> 
    )
}

export {SidebarMenuListItem};
import Image from "next/image";
import { SidebarMenuListItem } from "./components/sidebarMenus";
import homeIcon from "./assets/home-black.svg";


export default function Home() {
  return (
    <div>
      <main>
       <div className="flex flex-row">
        <div className="Dashboard-left">
          <div className="col-headings">
            <div className="appLogo">Notelify</div>
          </div>
          <SidebarMenuListItem leftIcon={homeIcon} title={"All Notes"}/>
           <SidebarMenuListItem leftIcon={homeIcon} title={"Archived Notes"}/>
        </div>
        <div className="Dashboard-right">
         <div className="col-headings">
            
          </div>
        </div>

       </div>
      </main>
    </div>
  );
}

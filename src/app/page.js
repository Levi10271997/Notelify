import Image from "next/image";
import { SidebarMenuListItem } from "./components/sidebarMenus";
import homeIcon from "./assets/home-black.svg";
import LocalIcons from "./components/icons";


export default function Home() {
  return (
    <div>
      <main>
       <div className="flex flex-row">
        <div className="Dashboard-left">
          <div className="col-headings">
            <div className="appLogo">Notelify</div>
          </div>
          <SidebarMenuListItem leftIcon={"home"} title={"All Notes"} withChevron={true}/>
           <SidebarMenuListItem leftIcon={"archive"} title={"Archived Notes"} withChevron={true}/>
           <div className="horizontalBar"></div>
           <p className="text-black font-bold">Tags</p>
           <div className="tagsList">
             <SidebarMenuListItem leftIcon={"tag"} title={"Cooking"} withChevron={false}/>
             <SidebarMenuListItem leftIcon={"tag"} title={"Dev"} withChevron={false}/>
             <SidebarMenuListItem leftIcon={"tag"} title={"Fitness"} withChevron={false}/>
              <SidebarMenuListItem leftIcon={"tag"} title={"Health"} withChevron={false}/>
               <SidebarMenuListItem leftIcon={"tag"} title={"Personal"} withChevron={false}/>
                <SidebarMenuListItem leftIcon={"tag"} title={"React"} withChevron={false}/>
                 <SidebarMenuListItem leftIcon={"tag"} title={"Recipes"} withChevron={false}/>
                  <SidebarMenuListItem leftIcon={"tag"} title={"Shopping"} withChevron={false}/>
                   <SidebarMenuListItem leftIcon={"tag"} title={"Travel"} withChevron={false}/>
                    <SidebarMenuListItem leftIcon={"tag"} title={"Typescript"} withChevron={false}/>
           </div>
        </div>
        <div className="Dashboard-right">
         <div className="col-headings">
           <div className="flex flex-row justify-between">
             <p>All Notes</p>
            <div className="flex gap-2">
              <div className="searchInput">
                <div  className="w-4">
                     <LocalIcons iconName={'search'}/>
                </div>
             
                <input type="text" placeholder="Search notes..." />
              </div>
              
            </div>
           </div>
          </div>
          <div className="horizontalBar"></div>
        </div>

       </div>
      </main>
    </div>
  );
}

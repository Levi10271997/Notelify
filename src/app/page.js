import Image from "next/image";
import { SidebarMenuListItem } from "./components/sidebarMenus";
import homeIcon from "./assets/home-black.svg";
import LocalIcons from "./components/icons";
import NotesItem from "./components/noteslistItem";


export default function Home() {
  return (
    <div>
      <main>
       <div className="flex flex-row h-screen">
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
         <div className="col-headings border-b border-solid border-outlineGray">
           <div className="flex flex-row items-center justify-between w-full px-3.5">
             <p>All Notes</p>
            <div className="flex gap-2">
              <div className="searchInput">
                <div  className="w-4">
                     <LocalIcons iconName={'search'}/>
                </div>
             
                <input type="text" className="min-w-[250px]" placeholder="Search by title, content or tags..."/>
              </div>
              <button className="w-3.5">
                <LocalIcons iconName={'gear'}/>
              </button>
              
            </div>
           </div>
          </div>
         
          <div className="notesDashboardContent">
              <div className="notesSelect">
                  <button className="createNoteBtn mb-2.5">
                    <div className="w-2.5">
                        <LocalIcons iconName={'plus'}/>
                    </div>
                    Create Note
                  </button>
                  <div className="notesList">
                   <NotesItem />
                    <NotesItem />
                  </div>
              </div>
              <div className="flex-1 notesContent">
                 <div className="notesTitleBlock">
                    <h2 className="selectednotesTitle">
                      Title Note
                    </h2>
                    <div className="selectednotesTags">
                      <div className="flex items-center gap-2 w-[150px]">
                        <div className="w-2.5">
                          <LocalIcons iconName={'tag'}/>
                        </div>
                        Tags
                        </div>
                    <div className="tags flex items-center gap-2">
                      <span>Dev</span>, 
                      <span>React</span>
                    </div> 
                    </div>

                    <div className="selectedNotesLastEdited">
                      <div className="flex items-center gap-2 w-[150px]">
                        <div className="w-2.5">
                          <LocalIcons iconName={'clock'}/>
                        </div>
                        Last Edited
                        </div>
                      <div className="lastEditedDate">29 Oct 2024</div>
                    </div>

                 </div>
              </div>
              <div className="notesActions">
                <div className="actionButtons">
                 <div className="w-2.5">
                   <LocalIcons iconName={"archive"}/>
                 </div>
                  Archive Notes
                </div>
                 <div className="actionButtons">
                 <div className="w-2.5">
                   <LocalIcons iconName={"trash"}/>
                 </div>
                  Delete Notes
                </div>
              </div>
          </div>
        </div>

       </div>
      </main>
    </div>
  );
}

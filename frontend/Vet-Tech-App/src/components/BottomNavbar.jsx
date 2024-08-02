
import { NavLink } from "react-router-dom";
import { ConfigImg } from "./ConfigImg";
import { AgendaImg } from "./AgendaImg";
import { HomeImg } from "./HomeImg";
import { UrgenciesImg } from "./UrgenciesImg";
import { UserImg } from "./UserImg";



export const BottomNavbar = () => {


  return (
    <nav className="h-[60px] w-[384px] bg-menuColor-1 rounded-t-sm -z-20">
      <ul className="flex justify-around font-manrope text-[12px] items-center h-full">
        <li className="relative">
          <NavLink
            to='config'
            className={({ isActive }) => `${ isActive ? 'active' : 'non-active' } relative flex  flex-col items-center`}
          >
            {({ isActive }) => (
            <div className={`flex flex-col z-10 items-center relative mt-3 ${isActive ? 'text-primaryColor' : 'non-active'}`}>
            <ConfigImg className={`block relative z-10 w-[25px] ${isActive ? 'fill-primaryColor' : 'fill-blackText hover:fill-whiteText'}`}/>
            {isActive && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[18px] w-2 h-2 bg-primaryColor rounded-full z-10"></div>
            )}
            <span className="z-10">Config</span>
            {isActive && (
              <div className="absolute -z-10 bg-baseColor rounded-full -translate-y-[27px]  w-[25px] h-[25px] transition-all"></div>
            )}
          </div>
          
          
        )}
          </NavLink>
          
        </li>
        <li className="relative">
          <NavLink
            to='schedules'
            className={({ isActive }) => `${ isActive ? 'active' : 'non-active' } relative flex  flex-col items-center`}
          >
            {({ isActive }) => (
            <div className={`flex flex-col z-10 items-center relative mt-3 ${isActive ? 'text-primaryColor' : 'non-active'}`}>
            <AgendaImg className={`block relative z-10 w-[25px] ${isActive ? 'fill-primaryColor' : 'fill-blackText hover:fill-whiteText'}`}/>
            {isActive && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[18px] w-2 h-2 bg-primaryColor rounded-full z-10"></div>
            )}
            <span className="z-10">Agenda</span>
            {isActive && (
              <div className="absolute -z-10 bg-baseColor rounded-full -translate-y-[27px]   w-[25px] h-[25px]  transition-all"></div>
            )}
          </div>
          
          
        )}
          </NavLink>
          
        </li>
        <li className="relative">
          <NavLink
            to='home'
            className={({ isActive }) => `${ isActive ? 'active' : 'non-active' } relative flex  flex-col items-center`}
          >
            {({ isActive }) => (
            <div className={`flex flex-col z-10 items-center relative mt-3 ${isActive ? 'text-primaryColor' : 'non-active'}`}>
            <HomeImg className={`block relative z-10 w-[25px] ${isActive ? 'fill-primaryColor' : 'fill-blackText hover:fill-whiteText'}`}/>
            {isActive && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[18px] w-2 h-2 bg-primaryColor rounded-full z-10"></div>
            )}
            <span className="z-10">Inicio</span>
            {isActive && (
              <div className="absolute -z-10 bg-baseColor rounded-full -translate-y-[27px]  w-[25px] h-[25px]  transition-all"></div>
            )}
          </div>
          
          
        )}
          </NavLink>
          
        </li>
        <li className="relative">
          <NavLink
            to='Urgencias'
            className={({ isActive }) => `${ isActive ? 'active' : 'non-active' } relative flex  flex-col items-center`}
          >
            {({ isActive }) => (
            <div className={`flex flex-col z-10 items-center relative mt-3 ${isActive ? 'text-primaryColor' : 'non-active'}`}>
            <UrgenciesImg className={`block relative z-10 w-[25px] ${isActive ? 'fill-primaryColor' : 'fill-blackText hover:fill-whiteText'}`}/>
            {isActive && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[18px] w-2 h-2 bg-primaryColor rounded-full z-10"></div>
            )}
            <span className="z-10">Urgencias</span>
            {isActive && (
              <div className="absolute -z-10 bg-baseColor rounded-full -translate-y-[27px]   w-[25px] h-[25px]  transition-all"></div>
            )}
          </div>
          
          
        )}
          </NavLink>
          
        </li>
        <li className="relative">
          <NavLink
            to='profile'
            className={({ isActive }) => `${ isActive ? 'active' : 'non-active' } relative flex  flex-col items-center`}
          >
            {({ isActive }) => (
            <div className={`flex flex-col z-10 items-center relative mt-3 ${isActive ? 'text-primaryColor' : 'non-active'}`}>
            <UserImg className={`block relative z-10 w-[25px] ${isActive ? 'fill-primaryColor' : 'fill-blackText hover:fill-whiteText'}`}/>
            {isActive && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[18px] w-2 h-2 bg-primaryColor rounded-full z-10"></div>
            )}
            <span className="z-10">Perfil</span>
            {isActive && (
              <div className="absolute -z-10 bg-baseColor rounded-full -translate-y-[27px]  w-[25px] h-[25px]  transition-all"></div>
            )}
          </div>
          
          
        )}
          </NavLink>
          
        </li>
      </ul>
    </nav>
  )
}

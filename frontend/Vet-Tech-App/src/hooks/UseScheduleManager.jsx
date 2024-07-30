import { useEffect } from "react";

const UseScheduleManager=(scheduleContent,scheduleTabs)=>{
    // Oculta el contenido de la agenda empezando desde el índice a proporcionado.
    const hideScheduleContent=(a)=>{
        for(let i=a;i<scheduleContent.length;i++){
            scheduleContent[i].classList.remove("show");
            scheduleContent[i].classList.add("hidden");
            scheduleTabs[i].classList.remove("active");
            scheduleTabs[i].classList.remove("border-b-3","border-menuColor-3");
        }
    }
    
    // Muestra el contenido de la agenda correspondiente al índice b.
    const showScheduleContent=(b)=>{
        if(scheduleContent[b].classList.contains("hidden")){
            hideScheduleContent(0);
            scheduleTabs[b].classList.add("active");
            scheduleTabs[b].classList.add("border-b-3","border-menuColor-3");
            scheduleContent[b].classList.remove("hidden");
            scheduleContent[b].classList.add("show");
        }
    }

    const handleClick=(event)=>{
        const target = event.target;
        if(target.classList.contains("shedule")){
            for(let i=0;i<scheduleTabs.length;i++){
                if(target === scheduleTabs[i]){
                    showScheduleContent(i);
                    break;
                }
            }
        }
    }
    
    const handleClickShowData =(mainContainer,container)=>{
        if(mainContainer && container){
            if(mainContainer.classList.contains("hidden") && container.classList.contains("hidden") ){
                mainContainer.classList.remove("hidden");
                container.classList.remove("hidden");
                mainContainer.classList.add("show");
                container.classList.add("show"); 
            }
        }
    }
    useEffect(()=>{  
        hideScheduleContent(1);
    },[scheduleContent,scheduleTabs]);
    
    return {
        handleClick,
        handleClickShowData,
    };
}
export default UseScheduleManager;
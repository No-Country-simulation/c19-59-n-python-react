import { useEffect } from "react";

const UseScheduleManager=(scheduleContent,scheduleTabs)=>{
    // Oculta el contenido de la agenda empezando desde el índice a proporcionado.
    const hideScheduleContent=(a)=>{
        for(let i=a;i<scheduleContent.length;i++){
            scheduleContent[i].classList.remove("show");
            scheduleContent[i].classList.add("hide");
            scheduleTabs[i].classList.remove("active");
        }
    }
    
    // Muestra el contenido de la agenda correspondiente al índice b.
    const showScheduleContent=(b)=>{
        if(scheduleContent[b].classList.contains("hide")){
            hideScheduleContent(0);
            scheduleTabs[b].classList.add("active");
            scheduleContent[b].classList.remove("hide");
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
        console.log("haces click");
        if(mainContainer && container){
            console.log("Primer if");
            if(mainContainer.classList.contains("hide") && container.classList.contains("hide") ){
                console.log("segundo if");
                mainContainer.classList.remove("hide");
                container.classList.remove("hide");
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
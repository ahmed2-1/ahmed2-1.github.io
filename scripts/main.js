function setupResumeScrolling(){
    document.querySelector("#coursesJump").onclick = (event) => {
        document.querySelector("#courses").scrollIntoView({behavior: 'smooth'});
    }
    
    document.querySelector("#skillsJump").onclick = (event) => {
        document.querySelector("#skills").scrollIntoView({behavior: 'smooth'});
    }
    
    document.querySelector("#projectsJump").onclick = (event) => {
        document.querySelector("#projects").scrollIntoView({behavior: 'smooth'});
    }
}

setupResumeScrolling();
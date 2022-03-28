let getProjectData = [];

// function
function inputProject(event){
    event.preventDefault()
    let projectName = document.getElementById('project-name').value;
    let description = document.getElementById('description').value;
    let uploadImage = document.getElementById('i-img').files;
    // date
    let startDate = document.getElementById('start').value;
    let endDate = document.getElementById('end').value;


    if (projectName == ''){
        alert("Please enter project name!")
    } else if (description == ''){
        alert("Please fill the description!")
    } else if (uploadImage == ''){
        alert("Please attach project!")
    } else{
        console.log("clear")
    }



    uploadImage = URL.createObjectURL(uploadImage[0]);

    let projectsData = {
        projectName: projectName,
        description: description,
        uploadImage: uploadImage,
    };


    getProjectData.push(projectsData);
    console.log(getProjectData);
    renderProjects();
}


// function-render

function renderProjects(){
    document.getElementById('add-p').innerHTML = `
        <div class="add">
            <img src="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="">
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum hic, fugit laboriosam voluptatibus sequi nihil tempora eaque ipsa dolore aliquid debitis repudiandae eum autem ex quis dignissimos laborum unde ut.</p>
            <div class="font-awesome">

            </div>
            <p>
                <img src="https://pic.onlinewebfonts.com/svg/img_216917.png" alt="" style="width: 30px; margin-left: 80%;">
            </p>
        </div>`;


        for (let i = 0; i < getProjectData.length; i++){
            document.getElementById('add-p').innerHTML += `
        <div class="add">               
            <img src="${getProjectData[i].uploadImage}" alt="">
            <h3>${getProjectData[i].projectName}</h3>
            <p>Duration : ${duration(getProjectData[i].startDate, getProjectData[i].endDate)}</p>
            <p>${getProjectData[i].description}</p>
            <div class="font-awesome">

            </div>
            <p>
                <img src="https://pic.onlinewebfonts.com/svg/img_216917.png" alt="" style="width: 30px; margin-left: 80%;">
            </p>
        </div>`
        }

        
// function-duration-project

function duration(startDate,endDate){
    let start = new Date(startDate);
    let end = new Date(endDate);
    let duration = end - start;
    
    // add the duration
    let day = Math.floor(duration / (1000*3600*24));
    let month = Math.floor(day / 30);

    // if else
    if (day <= 6) {
        return `${day} days(s) ago`;
    } else if(day > 30){
        return `${month} month(s) ago`
    }
}

}










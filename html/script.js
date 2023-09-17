document.querySelectorAll(".drop-zone__input").forEach(inputElement => {
    const dropZoneElement = inputElement.closest(".drop-zone")

    dropZoneElement.addEventListener("click", function(){
       inputElement.click();
    });
    inputElement.addEventListener("change", function(event){
        displayThumbnailImage(dropZoneElement, event.target.files[0]);  
    });
});

function displayThumbnailImage(_dropZoneElement, file) {

    if (file.type.includes("/image")){
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onLoad = function() {
            console.log(reader.result)
        }
    }
    
}
class TagAdder {
    constructor() {        
        this.addTag = document.getElementById("add-tag");
        this.events();
    }

    events() {
        this.addTag.addEventListener("click", e => {
            this.tagInput = document.getElementById("tag-input").value;
            this.addTheTag();
            e.preventDefault();
        });

        document.querySelector(".tag-list").addEventListener("click", e => {
            if (e.target.classList.contains('tag-list__item__close')) {
                console.log("Removing the tag");
                e.target.parentNode.remove();                
                e.preventDefault();
            }            
        });
    }
    
    addTheTag() {   
        let tagArray = this.tagInput.split(', ');
        let i;      
        for (i = 0; i < tagArray.length; i++) {
            let tag = tagArray[i];
            console.log("Added " + tag);
            let newTag = document.createElement('span');
            newTag.classList.add('tag-list__item');
            newTag.id = tag;
            newTag.innerHTML = `            
                <span class="tag-list__item__text">${tag}</span>
                <span class="tag-list__item__close id="remove-tag">x</span>
            `;   
            console.log(newTag); 
            document.getElementById("tag-list").prepend(newTag);
        };
        
        document.getElementById("submit-box").reset();        
    }    
}

export default TagAdder;




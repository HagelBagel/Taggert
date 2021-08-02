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
            if (e.target.tagName.toLowerCase() === 'span') {
                console.log("Removing the tag");                
                this.removeTheTag();
                e.preventDefault();
            }            
        });
    }

    
    addTheTag() {               
        console.log("Added " + this.tagInput);  
        document.getElementById("tag-list").innerHTML = `
            <span class="tag-list__item" id="${this.tagInput}"> 
                <span class="tag-list__item__text">${this.tagInput}</span>
                <span class="tag-list__item__close id="remove-tag">x</span>
            </span>`;  
        document.getElementById("submit-box").reset();        
    }

    removeTheTag() {
        this.tagItem = document.getElementById(this.tagInput);        
        this.tagItem.remove();
        console.log("Removed tag: " + this.tagInput);
    }
}

export default TagAdder;




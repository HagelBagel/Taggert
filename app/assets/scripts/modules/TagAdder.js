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
    }

    addTheTag() {               
        console.log(this.tagInput);  
        document.getElementById("tag-list").innerHTML = `
            <span class="tag-list__item"> 
                <span class="tag-list__item__text">${this.tagInput}</span>
                <span class="tag-list__item__close">x</span>
            </span>`;  
        document.getElementById("submit-box").reset();     
    }
}

export default TagAdder;




class TagAdder {
    constructor() {
        this.tagInput = document.getElementById("tag-input").value;
        this.addTag = document.getElementById("add-tag");
        this.events();
    }

    events() {
        this.addTag.addEventListener("click", () => this.addTheTag());
    }

    addTheTag() {
        console.log(this.tagInput);        
        document.getElementById("tag-input").value = "";
    }
}

export default TagAdder;
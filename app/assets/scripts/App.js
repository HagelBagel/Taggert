import '../styles/styles.css';
import 'lazysizes';
import MobileMenu from './modules/MobileMenu';
import StickyHeader from './modules/StickyHeader';
import TagAdder from './modules/TagAdder';


new StickyHeader();
new MobileMenu();
new TagAdder();


let modal;

document.querySelectorAll(".open-modal").forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault();
        if (typeof modal == "undefined") {
            import(/* webpackChunkName: "modal" */'./modules/Modal').then(x => {
                modal = new x.default();
                setTimeout(() => modal.openTheModal(), 20);
            }).catch(() => console.log("There was a problem"));
        } else {
            modal.openTheModal()
        }
    })
})

if (module.hot)  {
    module.hot.accept();
}


import "../app/scss/Universal.scss";
export const startApp = () => {
    // conection to bootstrap
    let lnk = document.createElement("link");
    lnk.setAttribute("rel", "stylesheet");
    lnk.setAttribute("type", "text/css");
    lnk.href = "https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
    lnk.setAttribute("integrity","sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm")
    lnk.setAttribute("crossorigin", "anonymous");
    document.head.appendChild(lnk);
};
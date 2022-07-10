if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', work);
} else {
    work();
}
function work() {
    if ((localStorage.getItem('ep') == null) || (localStorage.getItem('title') == null) || (localStorage.getItem('epanc') == null) || (localStorage.getItem('url') == null)) {
        alert("歡迎來到本站，本頁將顯示日後的觀看進度")
    } else {
        document.getElementById("episode").innerHTML = (localStorage.getItem('ep'));
        document.getElementById("title").innerHTML = (localStorage.getItem('title'));
        document.getElementById("link").href = (localStorage.getItem('url') + "#" + localStorage.getItem('epanc'));
    }
}
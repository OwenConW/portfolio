export const setPagerLocalStorage = (page) => {
    localStorage.setItem('page', JSON.stringify(page));
}

export const getLocalStorage = () => {
    if (localStorage.getItem('page')) {
        let pageActive = JSON.parse(localStorage.getItem('page'));

        return pageActive;
    }
}
function main() {
    localStorage.setItem("local", "test");
    sessionStorage.setItem("session", "test");
    console.log(history.pushState('#dfdf', 'asdfasfd'));
    console.log(history.state);
}

window.addEventListener('load', () => {
    main();
});
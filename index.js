var myLazyLoad = new LazyLoad({
    elements_selector: ".lazy"
});

if (myLazyLoad) {
    myLazyLoad.update();
}

// Initialize lazy loading
lazyload(".lazyload").observe();

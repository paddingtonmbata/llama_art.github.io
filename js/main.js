var  docWidth = document.documentElement.offsetWidth;

[].forEach.call(
    document.querySelectorAll('*'),
    function(el) {
        if (docWidth < el.offsetWidth) {
            console.log(el);
        }
    }
)
console.log('done');
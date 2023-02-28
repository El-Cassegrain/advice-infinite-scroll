/* Main script */

/* API Gesture */

const getData = async () => {
    await fetch('https://api.adviceslip.com/advice?t=' + Math.random())
        .then(r => r.json())
        .then(data => {
            const { id, advice } = data['slip'];
            document.getElementById('my-text').innerText = advice;
            document.getElementById('id').innerText = `Advice #${id}`
            //console.info('data fetched');
        })
        .catch(() => console.warn('Unable to fetch data'))
}
getData()

const overlay = document.querySelector('#overlay')
const generated = document.querySelector('.generated')
const watcher = document.querySelector('.intersection-watcher')


const handleIntersect = entries => {
    if (entries[0].isIntersecting) {
        console.log('isIntersecting')
        
        /* If in another browser */
        overlay.classList.add('translate')
        watcher.classList.add('translate')

        setTimeout(() => {
            getData()

        }, 800)

        setTimeout(() => {
            /* If in another browser */
            overlay.classList.remove('translate')
            watcher.classList.remove('translate')
            watcher.classList.add('margin-top')
            
        }, 2800)
    }
}

new IntersectionObserver(handleIntersect).observe(watcher)


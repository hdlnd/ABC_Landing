const logo = document.querySelector('.main-logo')
const image3 = document.querySelector('.third-image')
const observer = new window.IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
        logo.classList.add('remove')
      console.log('ENTER')
      return
    }
    logo.classList.remove('remove')

    console.log('LEAVE')
  }, {
    root: null,
    threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
  })
  
  observer.observe(image3);
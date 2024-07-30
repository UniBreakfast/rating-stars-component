const starBox = document.querySelector(':has(>.star)');

enableRateControl(starBox);

function enableRateControl(box) {
  const stars = box.querySelectorAll('.star');

  box.onclick = e => {
    const targetStar = e.target.closest('.star');

    if (!targetStar) return;

    if (targetStar === stars[0] 
      && stars[0].matches('.active')
      && !stars[1].matches('.active')
    ) {
      return stars[0].classList.remove('active');
    }

    let over = false;

    for (const star of stars) {
      star.classList.toggle('active', !over);

      if (star === targetStar) over = true;
    }
  }
}

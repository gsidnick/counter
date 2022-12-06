class Spinner {

  constructor(selector) {
    this.container = document.querySelector(selector);
    this.slides = [];
    this.number = 0;
    this.render(0);
    this.render(1);
  }

  render(index) {
    const element = document.createElement('div');
    element.classList.add('logo__number');
    element.innerText = this.number;
    element.style.top = `${index * 142}px`;
    this.container.append(element);

    if (this.number === 9) {
      this.number = 0;
    } else {
      this.number++;
    }

    this.slides.push(element);
  }

  shift() {
    this.slides[0].style.top = '-142px';
    this.slides[1].style.top = '0';
    this.render(1);

    setTimeout(() => {
      this.slides[0].remove();
      this.slides.shift();
    }, 2000);
  }

}
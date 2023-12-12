document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = document.getElementById('myCarousel');
    var carousel = new Carousel(myCarousel);
});

function Carousel(element) {
    this.element = element;
    this.init();
}

Carousel.prototype.init = function () {
    var self = this;
    this.currentIndex = 0;
    this.items = this.element.querySelectorAll('.carousel-item');
    this.totalItems = this.items.length;

    this.element.querySelector('.carousel-control-prev').addEventListener('click', function () {
        self.prev();
    });

    this.element.querySelector('.carousel-control-next').addEventListener('click', function () {
        self.next();
    });


    setInterval(function () {
        self.next();
    }, 5000);
};

Carousel.prototype.prev = function () {
    this.currentIndex = (this.currentIndex > 0) ? (this.currentIndex - 1) : (this.totalItems - 1);
    this.showItem();
};

Carousel.prototype.next = function () {
    this.currentIndex = (this.currentIndex < this.totalItems - 1) ? (this.currentIndex + 1) : 0;
    this.showItem();
};

Carousel.prototype.showItem = function () {
    for (var i = 0; i < this.totalItems; i++) {
        this.items[i].classList.remove('active');
    }
    this.items[this.currentIndex].classList.add('active');
};


$(document).ready(function() {
    // Obtén la URL de la página actual
    var currentPage = window.location.pathname;

    // Encuentra el enlace correspondiente y añade la clase active
    $('.navbar-nav a[href="' + currentPage + '"]').addClass('active');
  });
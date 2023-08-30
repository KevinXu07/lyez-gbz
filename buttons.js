document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");
    const controls = document.querySelector(".controls");
  
    function showSlide(slideIndex) {
      slides.forEach((slide, index) => {
        if (index === slideIndex) {
          slide.classList.add("active");
        } else {
          slide.classList.remove("active");
        }
      });
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    function showButtons() {
      controls.classList.remove("hidden");
    }
  
    function hideButtons() {
      controls.classList.add("hidden");
    }
  
    // 设置事件监听器来处理按钮的点击和鼠标事件
    document.querySelector(".prev-button").addEventListener("click", prevSlide);
    document.querySelector(".next-button").addEventListener("click", nextSlide);
    document.querySelector(".slider").addEventListener("mouseover", showButtons);
    document.querySelector(".slider").addEventListener("mouseout", hideButtons);
  });
  
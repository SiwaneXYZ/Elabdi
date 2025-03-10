let currentSlide = 0;
        const slides = document.querySelectorAll(".slides");

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove("active");
                if (i === index) {
                    slide.classList.add("active");
                }
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        // التبديل التلقائي كل 5 ثوانٍ
        setInterval(nextSlide, 5000);

        // عرض الشريحة الأولى عند التحميل
        showSlide(currentSlide);

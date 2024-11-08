// إظهار الزر عند التمرير للأسفل
window.onscroll = function () {
  let scrollButton = document.getElementById("scrollToTop");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollButton.style.display = "block"; // إظهار الزر
  } else {
    scrollButton.style.display = "none"; // إخفاء الزر
  }
};

// التمرير إلى أعلى الصفحة عند الضغط
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // التمرير بسلاسة
  });
}

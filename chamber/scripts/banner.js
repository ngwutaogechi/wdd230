const banner = document.getElementById('banner');
const day = new Date().getDay(); // 1=Mon, 2=Tue, 3=Wed

if (day >= 1 && day <= 3) {
  banner.style.display = 'block';
}

document.getElementById('closeBanner').addEventListener('click', () => {
  banner.style.display = 'none';
});
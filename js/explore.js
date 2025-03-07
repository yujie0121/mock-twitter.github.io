// 探索页面轮播功能
document.addEventListener('DOMContentLoaded', function() {
    // 轮播功能
    const slides = document.querySelectorAll('.explore-slide');
    const dots = document.querySelectorAll('.slide-dot');
    let currentSlide = 0;
    
    function showSlide(n) {
        // 隐藏所有幻灯片
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // 移除所有点的激活状态
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // 显示当前幻灯片和激活对应的点
        slides[n].classList.add('active');
        dots[n].classList.add('active');
        currentSlide = n;
    }
    
    // 点击控制点切换幻灯片
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    // 自动轮播
    function autoSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    // 每4秒自动切换一次
    let slideInterval = setInterval(autoSlide, 4000);
    
    // 鼠标悬停在轮播图上时暂停自动轮播
    const slider = document.querySelector('.explore-slider');
    slider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    // 鼠标离开轮播图时恢复自动轮播
    slider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(autoSlide, 4000);
    });
    
    // 话题分类标签点击效果
    const categoryTabs = document.querySelectorAll('.category-tabs .tab');
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            categoryTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // 话题卡片悬停效果
    const trendCards = document.querySelectorAll('.trend-card');
    trendCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderLeft = '4px solid #1da1f2';
            this.style.paddingLeft = '12px';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.borderLeft = '';
            this.style.paddingLeft = '16px';
        });
    });
    
    // 网格项动画效果
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const img = this.querySelector('img');
            img.style.transform = 'scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            const img = this.querySelector('img');
            img.style.transform = '';
        });
    });
}); 
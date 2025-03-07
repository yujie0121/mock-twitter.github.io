// 夜间模式专用JavaScript文件
document.addEventListener('DOMContentLoaded', function() {
    console.log('初始化夜间模式');
    
    // 获取所有夜间模式切换按钮
    const darkModeToggles = document.querySelectorAll('.night-mode-toggle');
    console.log('找到的夜间模式按钮数量:', darkModeToggles.length);
    
    // 检查localStorage中的夜间模式设置并应用
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        
        // 更新所有图标
        darkModeToggles.forEach(toggle => {
            const icon = toggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            }
        });
    }
    
    // 夜间模式切换函数
    function toggleDarkMode() {
        console.log('切换夜间模式');
        document.body.classList.toggle('dark-mode');
        
        // 切换图标并保存设置
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
        
        darkModeToggles.forEach(toggle => {
            const icon = toggle.querySelector('i');
            if (icon) {
                if (isDarkMode) {
                    icon.classList.remove('fa-moon');
                    icon.classList.add('fa-sun');
                } else {
                    icon.classList.remove('fa-sun');
                    icon.classList.add('fa-moon');
                }
            }
        });
    }
    
    // 添加点击事件监听器
    darkModeToggles.forEach(toggle => {
        console.log('添加事件监听器到按钮');
        toggle.addEventListener('click', toggleDarkMode);
    });
    
    // 将函数暴露为全局，以支持历史代码
    window.toggleDarkMode = toggleDarkMode;
}); 
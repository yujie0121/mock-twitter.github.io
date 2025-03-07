/**
 * 主题管理器 - 完全重构版本
 * 处理夜间模式的切换和持久化
 */

// 立即执行函数避免全局命名空间污染
(function() {
    // 记录初始化
    console.log('主题管理器初始化');
    
    // DOM加载完成后执行
    document.addEventListener('DOMContentLoaded', function() {
        // 获取所有主题切换按钮
        const themeToggles = document.querySelectorAll('.night-mode-toggle');
        console.log('找到主题切换按钮:', themeToggles.length, '个');
        
        // 从localStorage读取主题设置
        function loadThemePreference() {
            const savedTheme = localStorage.getItem('theme');
            console.log('读取保存的主题设置:', savedTheme);
            
            if (savedTheme === 'dark') {
                enableDarkMode();
            } else {
                enableLightMode();
            }
        }
        
        // 启用黑暗模式
        function enableDarkMode() {
            console.log('启用夜间模式');
            document.body.classList.add('dark-mode');
            updateAllIcons(true);
            localStorage.setItem('theme', 'dark');
        }
        
        // 启用亮色模式
        function enableLightMode() {
            console.log('启用日间模式');
            document.body.classList.remove('dark-mode');
            updateAllIcons(false);
            localStorage.setItem('theme', 'light');
        }
        
        // 更新所有图标
        function updateAllIcons(isDark) {
            themeToggles.forEach(toggle => {
                const icon = toggle.querySelector('i');
                if (!icon) return;
                
                if (isDark) {
                    icon.classList.remove('fa-moon');
                    icon.classList.add('fa-sun');
                } else {
                    icon.classList.remove('fa-sun');
                    icon.classList.add('fa-moon');
                }
            });
        }
        
        // 切换主题
        function toggleTheme() {
            console.log('切换主题');
            if (document.body.classList.contains('dark-mode')) {
                enableLightMode();
            } else {
                enableDarkMode();
            }
        }
        
        // 为每个切换按钮添加点击事件
        themeToggles.forEach(toggle => {
            // 移除旧的事件监听器以避免冲突
            const newToggle = toggle.cloneNode(true);
            toggle.parentNode.replaceChild(newToggle, toggle);
            
            // 添加新的事件监听器
            newToggle.addEventListener('click', function(e) {
                console.log('主题切换按钮被点击');
                e.preventDefault();
                e.stopPropagation();
                toggleTheme();
            });
        });
        
        // 暴露到全局，以便内联调用（如有需要）
        window.toggleTheme = toggleTheme;
        
        // 确保所有控制按钮正确分组
        function organizeControlButtons() {
            // 查找所有控制按钮容器
            const containers = document.querySelectorAll('.main-header, .list-actions, .notification-settings, .message-actions, .bookmarks-actions');
            
            containers.forEach(container => {
                // 查找夜间模式和语言切换按钮
                const nightModeBtn = container.querySelector('.night-mode-toggle:not(.in-group)');
                const langBtn = container.querySelector('.language-toggle:not(.in-group)');
                
                if (nightModeBtn || langBtn) {
                    // 创建或查找按钮组
                    let btnGroup = container.querySelector('.control-btn-group');
                    if (!btnGroup) {
                        btnGroup = document.createElement('div');
                        btnGroup.className = 'control-btn-group';
                        container.appendChild(btnGroup);
                    }
                    
                    // 将按钮移到组中
                    if (nightModeBtn) {
                        nightModeBtn.classList.add('in-group');
                        nightModeBtn.parentNode.removeChild(nightModeBtn);
                        btnGroup.appendChild(nightModeBtn);
                    }
                    
                    if (langBtn) {
                        langBtn.classList.add('in-group');
                        langBtn.parentNode.removeChild(langBtn);
                        btnGroup.appendChild(langBtn);
                    }
                }
            });
        }
        
        // 在DOM加载后组织按钮
        organizeControlButtons();
        
        // 在窗口大小变化时重新组织按钮
        window.addEventListener('resize', organizeControlButtons);
        
        // 初始化主题
        loadThemePreference();
    });
})(); 
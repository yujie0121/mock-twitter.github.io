/**
 * 国际化工具
 * 支持中英文切换功能
 */

// 立即执行函数以避免污染全局作用域
(function() {
    // 翻译字典
    const translations = {
        'zh': {
            // 导航
            'home': '首页',
            'explore': '探索',
            'notifications': '通知',
            'messages': '消息',
            'bookmarks': '书签',
            'lists': '列表',
            'profile': '个人资料',
            'more': '更多',
            'login': '登录',
            
            // 操作按钮
            'tweet': '发微博',
            'follow': '关注',
            'search': '搜索',
            'logout': '退出登录',
            'deactivate': '停用账户',
            
            // 页面标题
            'home_title': '首页',
            'explore_title': '探索',
            'notifications_title': '通知',
            'messages_title': '消息',
            'bookmarks_title': '书签',
            'lists_title': '列表',
            'profile_title': '个人资料',
            'more_title': '更多选项',
            'login_title': '登录',
            
            // 其他通用文本
            'show_more': '显示更多',
            'created_at': '账户创建于',
            'security_status': '安全状态',
            'good': '良好',
            'switch_language': '切换到英文',
            
            // 确认弹窗
            'confirm_logout': '确定要退出登录吗？',
            'logout_success': '您已成功退出登录',
            'deactivate_title': '停用账户确认',
            'deactivate_confirm_text': '您确定要停用您的账户吗？这将会：',
            'deactivate_effect1': '暂时隐藏您的个人资料和所有微博',
            'deactivate_effect2': '取消您的所有关注关系',
            'deactivate_warning': '您可以在30天内重新激活账户，超过30天后您的数据将被永久删除。',
            'cancel': '取消',
            'confirm': '确认停用',
            'deactivate_success': '您的账户已停用。您可以在30天内随时重新激活您的账户。',
            
            // 首页元素
            'recommended': '推荐',
            'following': '关注',
            'whats_new': '有什么新鲜事？',
            'post_tweet': '发布',
            'trending': '热门话题',
            'trending_in': '热门',
            'tweets_count': '条微博',
            'who_to_follow': '推荐关注',
            'latest_notifications': '最新通知',
            'liked_your_tweet': '喜欢了你的微博',
            'followed_you': '关注了你',
            'view_all_notifications': '查看所有通知',
            
            // 更多页面元素
            'settings_privacy': '设置与隐私',
            'manage_account': '管理账号设置、隐私和安全选项',
            'display_themes': '显示和主题',
            'customize_interface': '自定义界面外观和颜色主题',
            'notification_settings': '通知设置',
            'manage_notifications': '管理接收哪些通知及其接收方式',
            'security_access': '安全与账号访问',
            'manage_security': '管理安全设置和已连接的应用',
            'follows_blocks': '关注和屏蔽',
            'manage_follows': '管理已关注、屏蔽和静音的账号',
            'data_analytics': '数据与分析',
            'view_account_data': '查看账号数据和互动分析',
            
            // 账户管理区域
            'account_management': '账户管理',
            'app_status': '应用状态',
            'system_normal': '系统运行正常',
            'all_services_working': '所有服务工作正常',
            'updated_at': '更新于',
            'minutes_ago': '分钟前',
            'data_usage': '数据使用情况',
            'storage_space': '存储空间',
            'upload_quota': '上传限额',
            'upgrade_storage': '升级存储空间',
            'recent_activities': '最近活动',
            'last_login': '上次登录时间',
            'profile_update': '资料更新',
            'device_login': '设备登录',
            'view_full_activity': '查看完整活动',
            
            // 页脚
            'terms': '服务条款',
            'privacy': '隐私政策',
            'cookies': 'Cookie政策',
            'accessibility': '无障碍',
            'ads': '广告信息',
            'more_footer': '更多...',
            'copyright': '© 2023 YUJIE'
        },
        'en': {
            // Navigation
            'home': 'Home',
            'explore': 'Explore',
            'notifications': 'Notifications',
            'messages': 'Messages',
            'bookmarks': 'Bookmarks',
            'lists': 'Lists',
            'profile': 'Profile',
            'more': 'More',
            'login': 'Login',
            
            // Action buttons
            'tweet': 'Post',
            'follow': 'Follow',
            'search': 'Search',
            'logout': 'Log Out',
            'deactivate': 'Deactivate Account',
            
            // Page titles
            'home_title': 'Home',
            'explore_title': 'Explore',
            'notifications_title': 'Notifications',
            'messages_title': 'Messages',
            'bookmarks_title': 'Bookmarks',
            'lists_title': 'Lists',
            'profile_title': 'Profile',
            'more_title': 'More Options',
            'login_title': 'Login',
            
            // Other common text
            'show_more': 'Show More',
            'created_at': 'Account created on',
            'security_status': 'Security Status',
            'good': 'Good',
            'switch_language': 'Switch to Chinese',
            
            // Confirmation dialogs
            'confirm_logout': 'Are you sure you want to log out?',
            'logout_success': 'You have been successfully logged out',
            'deactivate_title': 'Deactivate Account Confirmation',
            'deactivate_confirm_text': 'Are you sure you want to deactivate your account? This will:',
            'deactivate_effect1': 'Temporarily hide your profile and all posts',
            'deactivate_effect2': 'Cancel all your following relationships',
            'deactivate_warning': 'You can reactivate your account within 30 days. After 30 days, your data will be permanently deleted.',
            'cancel': 'Cancel',
            'confirm': 'Confirm Deactivation',
            'deactivate_success': 'Your account has been deactivated. You can reactivate your account within 30 days.',
            
            // 首页元素
            'recommended': 'Recommended',
            'following': 'Following',
            'whats_new': "What's happening?",
            'post_tweet': 'Post',
            'trending': 'Trending Topics',
            'trending_in': 'Trending',
            'tweets_count': 'posts',
            'who_to_follow': 'Who to Follow',
            'latest_notifications': 'Latest Notifications',
            'liked_your_tweet': 'liked your post',
            'followed_you': 'followed you',
            'view_all_notifications': 'View All Notifications',
            
            // 更多页面元素
            'settings_privacy': 'Settings & Privacy',
            'manage_account': 'Manage account settings, privacy and security options',
            'display_themes': 'Display & Themes',
            'customize_interface': 'Customize interface appearance and color themes',
            'notification_settings': 'Notification Settings',
            'manage_notifications': 'Manage which notifications you receive and how',
            'security_access': 'Security & Account Access',
            'manage_security': 'Manage security settings and connected apps',
            'follows_blocks': 'Follows & Blocks',
            'manage_follows': 'Manage followed, blocked and muted accounts',
            'data_analytics': 'Data & Analytics',
            'view_account_data': 'View account data and interaction analytics',
            
            // 账户管理区域
            'account_management': 'Account Management',
            'app_status': 'App Status',
            'system_normal': 'System is running normally',
            'all_services_working': 'All services are working properly',
            'updated_at': 'Updated at',
            'minutes_ago': 'minutes ago',
            'data_usage': 'Data Usage',
            'storage_space': 'Storage Space',
            'upload_quota': 'Upload Quota',
            'upgrade_storage': 'Upgrade Storage',
            'recent_activities': 'Recent Activities',
            'last_login': 'Last Login Time',
            'profile_update': 'Profile Update',
            'device_login': 'Device Login',
            'view_full_activity': 'View Full Activity',
            
            // 页脚
            'terms': 'Terms of Service',
            'privacy': 'Privacy Policy',
            'cookies': 'Cookie Policy',
            'accessibility': 'Accessibility',
            'ads': 'Ads Info',
            'more_footer': 'More...',
            'copyright': '© 2023 YUJIE'
        }
    };
    
    // 当前语言，默认中文
    let currentLang = localStorage.getItem('language') || 'zh';
    
    // 翻译函数
    function t(key) {
        if (!translations[currentLang][key]) {
            console.warn(`Translation missing for key: ${key} in language: ${currentLang}`);
            return key;
        }
        return translations[currentLang][key];
    }
    
    // 切换语言
    function switchLanguage() {
        currentLang = currentLang === 'zh' ? 'en' : 'zh';
        localStorage.setItem('language', currentLang);
        updatePageContent();
        return currentLang;
    }
    
    // 更新页面内容
    function updatePageContent() {
        // 更新导航项
        updateNavItems();
        
        // 更新页面标题
        updatePageTitle();
        
        // 更新按钮文本
        updateButtons();
        
        // 更新各类表单元素
        updateFormElements();
        
        // 更新首页特定元素
        updateHomePageElements();
        
        // 更新更多页面元素
        updateMorePageElements();
        
        // 更新账户管理区域
        updateAccountManagement();
        
        // 更新页脚
        updateFooter();
        
        // 移除可能存在的旧按钮
        const oldToggles = document.querySelectorAll('.language-toggle');
        oldToggles.forEach(toggle => {
            if (!toggle.querySelector('.fa-globe')) {
                toggle.remove();
            }
        });
        
        // 确保新按钮位置正确
        initLanguageToggle();
    }
    
    // 更新导航项
    function updateNavItems() {
        const navItems = {
            'index.html': 'home',
            'explore.html': 'explore',
            'notifications.html': 'notifications',
            'messages.html': 'messages',
            'bookmarks.html': 'bookmarks',
            'lists.html': 'lists',
            'profile.html': 'profile',
            'more.html': 'more',
            'login.html': 'login'
        };
        
        document.querySelectorAll('.sidebar nav ul li a').forEach(link => {
            const href = link.getAttribute('href');
            Object.keys(navItems).forEach(page => {
                if (href === page) {
                    // 找到图标元素
                    const icon = link.querySelector('i');
                    // 保留图标并更新文本
                    if (icon) {
                        link.innerHTML = '';
                        link.appendChild(icon);
                        link.appendChild(document.createTextNode(' ' + t(navItems[page])));
                    }
                }
            });
        });
    }
    
    // 更新页面标题
    function updatePageTitle() {
        const mainHeader = document.querySelector('.main-header h2');
        if (mainHeader) {
            const currentPage = window.location.pathname.split('/').pop();
            if (currentPage === 'index.html' || currentPage === '') {
                mainHeader.textContent = t('home_title');
            } else if (currentPage === 'explore.html') {
                mainHeader.textContent = t('explore_title');
            } else if (currentPage === 'lists.html') {
                mainHeader.textContent = t('lists_title');
            } else if (currentPage === 'more.html') {
                mainHeader.textContent = t('more_title');
            }
        }
    }
    
    // 更新按钮文本
    function updateButtons() {
        // 发微博按钮
        document.querySelectorAll('.tweet-btn').forEach(btn => {
            btn.textContent = t('tweet');
        });
        
        // 关注按钮
        document.querySelectorAll('.follow-btn').forEach(btn => {
            btn.textContent = t('follow');
        });
        
        // 登出按钮
        const logoutBtn = document.querySelector('.logout-btn');
        if (logoutBtn) {
            const icon = logoutBtn.querySelector('i');
            const span = logoutBtn.querySelector('span');
            if (span) span.textContent = t('logout');
        }
        
        // 停用账户按钮
        const deactivateBtn = document.querySelector('.deactivate-btn');
        if (deactivateBtn) {
            const icon = deactivateBtn.querySelector('i');
            const span = deactivateBtn.querySelector('span');
            if (span) span.textContent = t('deactivate');
        }
        
        // 搜索框
        document.querySelectorAll('.search-box input').forEach(input => {
            input.placeholder = t('search');
        });
        
        // 查看更多链接
        document.querySelectorAll('.show-more').forEach(link => {
            link.textContent = t('show_more');
        });
    }
    
    // 更新各类表单元素
    function updateFormElements() {
        // 实现表单元素的更新逻辑
    }
    
    // 更新首页特定元素
    function updateHomePageElements() {
        // 更新标签页
        const tabs = document.querySelectorAll('.main-header .tabs .tab');
        if (tabs.length >= 2) {
            tabs[0].textContent = t('recommended');
            tabs[1].textContent = t('following');
        }
        
        // 更新发微博区域
        const tweetTextarea = document.querySelector('.compose-tweet textarea');
        if (tweetTextarea) {
            tweetTextarea.placeholder = t('whats_new');
        }
        
        const tweetButton = document.querySelector('.tweet-submit-btn');
        if (tweetButton) {
            tweetButton.textContent = t('post_tweet');
        }
        
        // 更新热门话题区域
        const trendsTitle = document.querySelector('.trends-box h3');
        if (trendsTitle) {
            trendsTitle.textContent = t('trending');
        }
        
        // 更新推荐关注区域
        const followTitle = document.querySelector('.who-to-follow h3');
        if (followTitle) {
            followTitle.textContent = t('who_to_follow');
        }
        
        // 更新通知区域
        const notificationsTitle = document.querySelector('.notifications-box h3');
        if (notificationsTitle) {
            notificationsTitle.textContent = t('latest_notifications');
        }
        
        // 所有"显示更多"链接
        document.querySelectorAll('.show-more').forEach(link => {
            link.textContent = t('show_more');
        });
    }
    
    // 更新更多页面元素
    function updateMorePageElements() {
        // 查找功能卡片
        const featureCards = document.querySelectorAll('.feature-card');
        if (featureCards.length >= 6) {
            // 设置与隐私
            const settingsTitle = featureCards[0].querySelector('.feature-info h3');
            const settingsDesc = featureCards[0].querySelector('.feature-info p');
            if (settingsTitle) settingsTitle.textContent = t('settings_privacy');
            if (settingsDesc) settingsDesc.textContent = t('manage_account');
            
            // 显示和主题
            const displayTitle = featureCards[1].querySelector('.feature-info h3');
            const displayDesc = featureCards[1].querySelector('.feature-info p');
            if (displayTitle) displayTitle.textContent = t('display_themes');
            if (displayDesc) displayDesc.textContent = t('customize_interface');
            
            // 通知设置
            const notifTitle = featureCards[2].querySelector('.feature-info h3');
            const notifDesc = featureCards[2].querySelector('.feature-info p');
            if (notifTitle) notifTitle.textContent = t('notification_settings');
            if (notifDesc) notifDesc.textContent = t('manage_notifications');
            
            // 安全与账号访问
            const securityTitle = featureCards[3].querySelector('.feature-info h3');
            const securityDesc = featureCards[3].querySelector('.feature-info p');
            if (securityTitle) securityTitle.textContent = t('security_access');
            if (securityDesc) securityDesc.textContent = t('manage_security');
            
            // 关注和屏蔽
            const followsTitle = featureCards[4].querySelector('.feature-info h3');
            const followsDesc = featureCards[4].querySelector('.feature-info p');
            if (followsTitle) followsTitle.textContent = t('follows_blocks');
            if (followsDesc) followsDesc.textContent = t('manage_follows');
            
            // 数据与分析
            const dataTitle = featureCards[5].querySelector('.feature-info h3');
            const dataDesc = featureCards[5].querySelector('.feature-info p');
            if (dataTitle) dataTitle.textContent = t('data_analytics');
            if (dataDesc) dataDesc.textContent = t('view_account_data');
        }
        
        // 账户管理部分的标题
        const accountTitle = document.querySelector('.account-management .section-title');
        if (accountTitle) {
            const titleText = accountTitle.lastChild;
            if (titleText) titleText.textContent = ` ${t('account_management')}`;
        }
    }
    
    // 更新账户管理区域
    function updateAccountManagement() {
        // 退出和停用按钮文本
        const logoutBtn = document.querySelector('.logout-btn span');
        if (logoutBtn) logoutBtn.textContent = t('logout');
        
        const deactivateBtn = document.querySelector('.deactivate-btn span');
        if (deactivateBtn) deactivateBtn.textContent = t('deactivate');
        
        // 应用状态区域
        const appStatusTitle = document.querySelector('.app-status-card h3');
        if (appStatusTitle) appStatusTitle.textContent = t('app_status');
        
        const statusNormal = document.querySelector('.status-info h4');
        if (statusNormal) statusNormal.textContent = t('system_normal');
        
        const servicesWorking = document.querySelector('.status-info p');
        if (servicesWorking) servicesWorking.textContent = t('all_services_working');
        
        const updatedLabel = document.querySelector('.status-time');
        if (updatedLabel) {
            const minutes = updatedLabel.textContent.match(/\d+/)[0];
            updatedLabel.textContent = `${t('updated_at')}: ${minutes}${t('minutes_ago')}`;
        }
        
        // 数据使用情况
        const dataUsageTitle = document.querySelector('.data-usage-card h3');
        if (dataUsageTitle) dataUsageTitle.textContent = t('data_usage');
        
        const usageLabels = document.querySelectorAll('.usage-label');
        if (usageLabels.length >= 2) {
            usageLabels[0].textContent = t('storage_space');
            usageLabels[1].textContent = t('upload_quota');
        }
        
        const upgradeBtn = document.querySelector('.upgrade-btn');
        if (upgradeBtn) upgradeBtn.textContent = t('upgrade_storage');
        
        // 最近活动
        const activitiesTitle = document.querySelector('.recent-activities h3');
        if (activitiesTitle) activitiesTitle.textContent = t('recent_activities');
        
        const activityLabels = document.querySelectorAll('.activity-info p');
        if (activityLabels.length >= 3) {
            activityLabels[0].textContent = t('last_login');
            activityLabels[1].textContent = t('profile_update');
            activityLabels[2].textContent = t('device_login');
        }
        
        const viewActivity = document.querySelector('.recent-activities .show-more');
        if (viewActivity) viewActivity.textContent = t('view_full_activity');
    }
    
    // 更新页脚
    function updateFooter() {
        const footerLinks = document.querySelectorAll('.footer a');
        if (footerLinks.length >= 6) {
            footerLinks[0].textContent = t('terms');
            footerLinks[1].textContent = t('privacy');
            footerLinks[2].textContent = t('cookies');
            footerLinks[3].textContent = t('accessibility');
            footerLinks[4].textContent = t('ads');
            footerLinks[5].textContent = t('more_footer');
        }
        
        const copyright = document.querySelector('.footer p');
        if (copyright) copyright.textContent = t('copyright');
    }
    
    // 优化的语言切换按钮初始化
    function initLanguageToggle() {
        // 检查是否已存在
        if (document.querySelector('.lang-switch')) {
            return;
        }
        
        // 创建语言切换按钮
        const langSwitch = document.createElement('button');
        langSwitch.className = 'lang-switch';
        updateLangSwitchText(langSwitch);
        
        // 添加点击事件
        langSwitch.addEventListener('click', function() {
            // 添加切换动画
            this.classList.add('lang-switch-animation');
            setTimeout(() => {
                this.classList.remove('lang-switch-animation');
            }, 300);
            
            // 切换语言
            const newLang = currentLang === 'zh' ? 'en' : 'zh';
            setLanguage(newLang);
            updateLangSwitchText(this);
        });
        
        // 查找控制按钮组
        let controlGroup;
        const header = document.querySelector('.main-header');
        
        if (header) {
            controlGroup = header.querySelector('.control-btn-group');
            if (!controlGroup) {
                controlGroup = document.createElement('div');
                controlGroup.className = 'control-btn-group';
                
                // 移动夜间模式切换按钮到组
                const nightModeToggle = header.querySelector('.night-mode-toggle');
                if (nightModeToggle) {
                    header.removeChild(nightModeToggle);
                    controlGroup.appendChild(nightModeToggle);
                }
                
                header.appendChild(controlGroup);
            }
            
            controlGroup.appendChild(langSwitch);
            return;
        }
        
        // 登录页面特殊处理
        const loginContainer = document.querySelector('.login-container');
        if (loginContainer) {
            // 在登录页添加样式
            langSwitch.style.position = 'absolute';
            langSwitch.style.top = '20px';
            langSwitch.style.right = '20px';
            loginContainer.appendChild(langSwitch);
            
            // 调整夜间模式按钮位置
            const nightModeToggle = loginContainer.querySelector('.night-mode-toggle');
            if (nightModeToggle) {
                nightModeToggle.style.right = '85px';
            }
            return;
        }
        
        // 最后的备用方案
        document.body.appendChild(langSwitch);
    }
    
    // 更新语言切换按钮文本
    function updateLangSwitchText(button) {
        if (currentLang === 'zh') {
            button.innerHTML = '<span class="lang-switch-text-short"></span><span class="lang-switch-text-full">English</span>';
        } else {
            button.innerHTML = '<span class="lang-switch-text-short"></span><span class="lang-switch-text-full">中文</span>';
        }
    }
    
    // 设置语言
    function setLanguage(lang) {
        if (lang !== currentLang) {
            currentLang = lang;
            localStorage.setItem('language', currentLang);
            updatePageContent();
            
            // 更新所有语言切换按钮
            const buttons = document.querySelectorAll('.lang-switch');
            buttons.forEach(updateLangSwitchText);
        }
    }
    
    // 确保在DOM加载完成后初始化
    document.addEventListener('DOMContentLoaded', function() {
        // 初始化语言设置
        initLanguageToggle();
        
        // 更新页面内容
        updatePageContent();
    });
    
    // 暴露公共API
    window.i18n = {
        t: t,
        switchLanguage: switchLanguage
    };
})(); 
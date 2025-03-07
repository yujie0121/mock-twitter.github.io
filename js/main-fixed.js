// 等待DOM完全加载后执行
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM 加载完成，初始化功能...');
    
    // 点赞功能
    document.querySelectorAll('.action .fa-heart').forEach(heart => {
        heart.addEventListener('click', function() {
            console.log('点赞按钮被点击');
            const countSpan = this.nextElementSibling;
            let count = parseInt(countSpan.textContent);
            
            if (this.classList.contains('far')) {
                this.classList.remove('far');
                this.classList.add('fas');
                this.style.color = '#e0245e';
                countSpan.textContent = count + 1;
                countSpan.style.color = '#e0245e';
            } else {
                this.classList.remove('fas');
                this.classList.add('far');
                this.style.color = '';
                countSpan.textContent = count - 1;
                countSpan.style.color = '';
            }
        });
    });
    
    // 发布微博功能
    const tweetForm = document.querySelector('.compose-form');
    const tweetTextarea = tweetForm.querySelector('textarea');
    const tweetSubmitBtn = tweetForm.querySelector('.tweet-submit-btn');
    const timeline = document.querySelector('.timeline');
    
    tweetSubmitBtn.addEventListener('click', function() {
        console.log('发布按钮被点击');
        const tweetText = tweetTextarea.value.trim();
        if (!tweetText) return;
        
        // 创建新微博元素
        const newTweet = document.createElement('div');
        newTweet.className = 'tweet';
        newTweet.innerHTML = `
            <div class="user-avatar">
                <img src="https://via.placeholder.com/50" alt="用户头像">
            </div>
            <div class="tweet-content">
                <div class="tweet-header">
                    <h4>用户名</h4>
                    <span class="username">@username</span>
                    <span class="tweet-time">· 刚刚</span>
                    <i class="fas fa-ellipsis-h"></i>
                </div>
                <p class="tweet-text">${tweetText}</p>
                <div class="tweet-actions">
                    <div class="action">
                        <i class="far fa-comment"></i>
                        <span>0</span>
                    </div>
                    <div class="action">
                        <i class="fas fa-retweet"></i>
                        <span>0</span>
                    </div>
                    <div class="action">
                        <i class="far fa-heart"></i>
                        <span>0</span>
                    </div>
                    <div class="action">
                        <i class="fas fa-share-alt"></i>
                    </div>
                </div>
            </div>
        `;
        
        // 将新微博插入到时间线的顶部
        timeline.insertBefore(newTweet, timeline.firstChild);
        
        // 清空输入框
        tweetTextarea.value = '';
        
        // 添加点赞事件监听器
        const heart = newTweet.querySelector('.fa-heart');
        heart.addEventListener('click', function() {
            const countSpan = this.nextElementSibling;
            let count = parseInt(countSpan.textContent);
            
            if (this.classList.contains('far')) {
                this.classList.remove('far');
                this.classList.add('fas');
                this.style.color = '#e0245e';
                countSpan.textContent = count + 1;
                countSpan.style.color = '#e0245e';
            } else {
                this.classList.remove('fas');
                this.classList.add('far');
                this.style.color = '';
                countSpan.textContent = count - 1;
                countSpan.style.color = '';
            }
        });
    });
    
    // 标签页切换功能
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            console.log('标签页被点击', this.textContent);
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // 如果i18n对象已加载
    if (window.i18n) {
        setTimeout(function() {
            const langToggle = document.querySelector('.language-toggle');
            if (!langToggle) {
                // 如果按钮不存在，手动初始化
                window.i18n.initLanguageToggle();
            }
        }, 500); // 稍微延迟确保其他DOM元素已加载
    }
});

// 监听滚动事件，实现下拉刷新效果
let isLoading = false;
window.addEventListener('scroll', function() {
    if (isLoading) return;
    
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    if (scrollTop + windowHeight >= documentHeight - 200) {
        isLoading = true;
        console.log('到达页面底部，加载更多内容');
        
        // 添加加载指示器
        const loadingIndicator = document.createElement('div');
        loadingIndicator.className = 'loading-indicator';
        loadingIndicator.textContent = '加载更多微博...';
        loadingIndicator.style.textAlign = 'center';
        loadingIndicator.style.padding = '20px';
        loadingIndicator.style.color = '#536471';
        timeline.appendChild(loadingIndicator);
        
        // 模拟加载更多微博
        setTimeout(() => {
            // 移除加载指示器
            timeline.removeChild(loadingIndicator);
            
            for (let i = 0; i < 3; i++) {
                const clone = document.querySelector('.tweet').cloneNode(true);
                const tweetText = clone.querySelector('.tweet-text');
                tweetText.textContent = `这是一条自动加载的微博 #${Math.floor(Math.random() * 1000)}`;
                
                const heart = clone.querySelector('.fa-heart');
                heart.addEventListener('click', function() {
                    const countSpan = this.nextElementSibling;
                    let count = parseInt(countSpan.textContent);
                    
                    if (this.classList.contains('far')) {
                        this.classList.remove('far');
                        this.classList.add('fas');
                        this.style.color = '#e0245e';
                        countSpan.textContent = count + 1;
                        countSpan.style.color = '#e0245e';
                    } else {
                        this.classList.remove('fas');
                        this.classList.add('far');
                        this.style.color = '';
                        countSpan.textContent = count - 1;
                        countSpan.style.color = '';
                    }
                });
                
                timeline.appendChild(clone);
            }
            isLoading = false;
        }, 1000);
    }
});

// 增强头像表情符号随机性
function enhanceEmojiAvatars() {
    // 丰富的emoji表情数组，包含更多类别
    const emojis = {
        people: ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘'],
        animals: ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸'],
        food: ['🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥'],
        activities: ['⚽️', '🏀', '🏈', '⚾️', '🥎', '🎾', '🏐', '🏉', '🎱', '🏓', '🏸', '🏒', '🥅', '⛳️'],
        travel: ['✈️', '🚀', '🚁', '🛸', '🚂', '🚆', '🚊', '🚉', '🚇', '🛺', '🚖', '🚘', '🚍', '🚔'],
        objects: ['💻', '⌚️', '📱', '📲', '💾', '📷', '🔍', '🔭', '📕', '📚', '📝', '📅', '🔑', '🧸'],
        symbols: ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '❣️', '💕', '💞', '💓', '💗', '💖', '💘'],
        flags: ['🇨🇳', '🇺🇸', '🇬🇧', '🇯🇵', '🇰🇷', '🇫🇷', '🇩🇪', '🇮🇹', '🇪🇸', '🇷🇺', '🇦🇺', '🇧🇷', '🇨🇦', '🇮🇳']
    };
    
    // 将所有分类的emoji放入一个数组
    const allEmojis = [].concat(...Object.values(emojis));
    
    // 获取所有用户头像元素
    const avatars = document.querySelectorAll('.user-avatar');
    
    // 颜色数组
    const colors = [
        '#ffcccb', '#c1f0c1', '#c1e1ff', 
        '#f0e68c', '#e6e6fa', '#ffdab9',
        '#d8bfd8', '#ffe4e1', '#f0fff0',
        '#e0ffff', '#fff0f5', '#f5f5dc'
    ];
    
    // 循环替换为表情符号
    avatars.forEach(avatar => {
        // 检查是否已经是emoji头像
        if (!avatar.classList.contains('emoji-avatar')) {
            // 决定使用哪个分类的emoji
            const categoryKeys = Object.keys(emojis);
            const randomCategory = categoryKeys[Math.floor(Math.random() * categoryKeys.length)];
            const categoryEmojis = emojis[randomCategory];
            
            // 从选定分类中选择随机表情符号
            const randomEmoji = categoryEmojis[Math.floor(Math.random() * categoryEmojis.length)];
            
            // 获取随机背景色
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            
            // 替换现有头像为表情符号
            avatar.innerHTML = `<span class="emoji">${randomEmoji}</span>`;
            
            // 添加emoji-avatar类
            avatar.classList.add('emoji-avatar');
            
            // 设置随机背景色
            avatar.style.backgroundColor = randomColor;
        } else if (avatar.querySelector('.emoji')) {
            // 已经是emoji头像，但想更新表情
            // 检查元素是否存在再操作
            const emojiSpan = avatar.querySelector('.emoji');
            if (emojiSpan && emojiSpan.textContent === '😀') {
                // 决定使用哪个分类的emoji
                const categoryKeys = Object.keys(emojis);
                const randomCategory = categoryKeys[Math.floor(Math.random() * categoryKeys.length)];
                const categoryEmojis = emojis[randomCategory];
                
                // 从选定分类中选择随机表情符号
                const randomEmoji = categoryEmojis[Math.floor(Math.random() * categoryEmojis.length)];
                
                // 获取随机背景色
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                
                // 更新文本和背景色
                emojiSpan.textContent = randomEmoji;
                avatar.style.backgroundColor = randomColor;
            }
        }
    });
}

// 添加点赞和转发的动画效果
function addInteractionAnimations() {
    try {
        // 所有点赞按钮添加动画
        document.querySelectorAll('.action .fa-heart').forEach(heart => {
            heart.addEventListener('click', function() {
                if (this.classList.contains('far')) {
                    // 播放点赞动画
                    this.classList.add('heart-animation');
                    setTimeout(() => {
                        this.classList.remove('heart-animation');
                    }, 1000);
                }
            });
        });
        
        // 转发按钮添加动画
        document.querySelectorAll('.action .fa-retweet').forEach(retweet => {
            retweet.addEventListener('click', function() {
                const countSpan = this.nextElementSibling;
                if (!countSpan) return; // 避免空引用
                
                let count = parseInt(countSpan.textContent);
                
                // 切换颜色并更新计数
                if (this.style.color === 'rgb(23, 191, 99)' || this.style.color === '#17bf63') {
                    this.style.color = '';
                    countSpan.style.color = '';
                    countSpan.textContent = count - 1;
                } else {
                    this.style.color = '#17bf63';
                    countSpan.style.color = '#17bf63';
                    countSpan.textContent = count + 1;
                    
                    // 播放转发动画
                    this.classList.add('retweet-animation');
                    setTimeout(() => {
                        this.classList.remove('retweet-animation');
                    }, 1000);
                }
            });
        });
    } catch (error) {
        console.log('交互动画初始化错误:', error);
    }
}

// 添加新微博时的淡入效果
function addNewTweetEffect() {
    try {
        // 检查window.addTweet是否存在
        if (typeof window.addTweet === 'function') {
            const originalAddTweet = window.addTweet; // 保存原始函数引用
            
            // 重写addTweet函数
            window.addTweet = function(text) {
                const newTweet = originalAddTweet(text);
                
                if (newTweet) {
                    // 添加淡入效果
                    newTweet.style.opacity = '0';
                    newTweet.style.transform = 'translateY(-20px)';
                    newTweet.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                    
                    setTimeout(() => {
                        newTweet.style.opacity = '1';
                        newTweet.style.transform = 'translateY(0)';
                    }, 10);
                }
                
                return newTweet;
            };
        }
    } catch (error) {
        console.log('新微博效果初始化错误:', error);
    }
}

// 添加修复导航问题的函数
function fixNavigation() {
    try {
        // 获取所有导航链接
        const navLinks = document.querySelectorAll('.sidebar nav ul li a');
        
        // 处理每个导航链接
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // 清除存储的任何可能阻止导航的数据
                sessionStorage.removeItem('preventNavigation');
                
                // 获取目标页面URL
                const targetUrl = this.getAttribute('href');
                
                // 允许正常导航行为
                // 不需要调用e.preventDefault()
            });
        });
        
        // 确保当前页面的导航项高亮显示
        const currentPage = window.location.pathname.split('/').pop();
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href');
            const parentLi = link.parentElement;
            
            // 移除所有active类
            parentLi.classList.remove('active');
            
            // 为当前页添加active类
            if (linkPage === currentPage) {
                parentLi.classList.add('active');
            }
        });
    } catch (error) {
        console.log('导航修复初始化错误:', error);
    }
}

// 移除现有的检查代码，避免冲突
// (function() {
//    console.log('初始化应用程序');
//    // ...
// })(); 
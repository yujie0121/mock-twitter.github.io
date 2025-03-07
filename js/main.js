// 点赞功能
document.querySelectorAll('.action .fa-heart').forEach(heart => {
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

// 发布微博功能
const tweetForm = document.querySelector('.compose-form');
const tweetTextarea = tweetForm.querySelector('textarea');
const tweetSubmitBtn = tweetForm.querySelector('.tweet-submit-btn');
const timeline = document.querySelector('.timeline');

tweetSubmitBtn.addEventListener('click', function() {
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
        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
    });
});

// 夜间模式切换功能
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// 检查用户之前的设置
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// 监听滚动事件，实现下拉刷新效果
let isLoading = false;
window.addEventListener('scroll', function() {
    if (isLoading) return;
    
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    if (scrollTop + windowHeight >= documentHeight - 200) {
        isLoading = true;
        
        // 模拟加载更多微博
        setTimeout(() => {
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
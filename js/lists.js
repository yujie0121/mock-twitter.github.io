// 列表页面交互效果
document.addEventListener('DOMContentLoaded', function() {
    // 标签切换效果
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // 列表卡片切换动画效果
            const listCards = document.querySelectorAll('.list-card');
            listCards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 50);
            });
        });
    });
    
    // 为创建列表卡片添加点击效果
    const createCard = document.querySelector('.create-card');
    if (createCard) {
        createCard.addEventListener('click', function() {
            // 显示创建列表对话框
            showCreateListDialog();
        });
    }
    
    // 为每个列表卡片添加悬停效果
    const listCards = document.querySelectorAll('.list-card:not(.create-card)');
    listCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.list-info h3').style.color = '#1da1f2';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.list-info h3').style.color = '';
        });
    });
    
    // 初始化列表卡片动画
    animateListCards();
});

// 列表卡片初始化动画
function animateListCards() {
    const listCards = document.querySelectorAll('.list-card');
    listCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 + index * 50);
    });
}

// 创建列表对话框
function showCreateListDialog() {
    // 创建模态框
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-container">
            <div class="modal-header">
                <h3>创建新列表</h3>
                <button class="close-btn"><i class="fas fa-times"></i></button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label>列表名称</label>
                    <input type="text" placeholder="输入列表名称" maxlength="25">
                    <span class="char-count">0/25</span>
                </div>
                <div class="form-group">
                    <label>描述</label>
                    <textarea placeholder="添加列表描述（可选）" maxlength="100"></textarea>
                    <span class="char-count">0/100</span>
                </div>
                <div class="form-group">
                    <label>隐私设置</label>
                    <div class="privacy-options">
                        <div class="radio-option">
                            <input type="radio" id="public" name="privacy" checked>
                            <label for="public">公开</label>
                            <p>任何人都可以看到此列表并关注</p>
                        </div>
                        <div class="radio-option">
                            <input type="radio" id="private" name="privacy">
                            <label for="private">私密</label>
                            <p>只有你可以看到此列表</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="cancel-btn">取消</button>
                <button class="create-btn" disabled>创建</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // 添加模态框动画
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    
    // 绑定事件
    const closeBtn = modal.querySelector('.close-btn');
    const cancelBtn = modal.querySelector('.cancel-btn');
    const createBtn = modal.querySelector('.create-btn');
    const nameInput = modal.querySelector('input[type="text"]');
    
    closeBtn.addEventListener('click', () => closeModal(modal));
    cancelBtn.addEventListener('click', () => closeModal(modal));
    
    // 输入验证
    nameInput.addEventListener('input', function() {
        const count = this.value.length;
        this.parentNode.querySelector('.char-count').textContent = `${count}/25`;
        createBtn.disabled = count === 0;
    });
    
    // 阻止冒泡关闭
    modal.querySelector('.modal-container').addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    // 点击背景关闭
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal(modal);
        }
    });
    
    // 添加模态框样式
    addModalStyles();
}

// 关闭模态框
function closeModal(modal) {
    modal.classList.remove('active');
    setTimeout(() => {
        document.body.removeChild(modal);
    }, 300);
}

// 添加模态框样式
function addModalStyles() {
    if (document.getElementById('modal-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'modal-styles';
    style.textContent = `
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.3s;
        }
        
        .modal-overlay.active {
            opacity: 1;
        }
        
        .modal-container {
            background-color: #fff;
            border-radius: 16px;
            width: 90%;
            max-width: 500px;
            max-height: 90vh;
            overflow-y: auto;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            transform: translateY(20px);
            transition: transform 0.3s;
        }
        
        .modal-overlay.active .modal-container {
            transform: translateY(0);
        }
        
        body.dark-mode .modal-container {
            background-color: #15202b;
            color: #fff;
        }
        
        .modal-header {
            padding: 15px 20px;
            border-bottom: 1px solid #eee;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        body.dark-mode .modal-header {
            border-color: #38444d;
        }
        
        .close-btn {
            background: none;
            border: none;
            font-size: 18px;
            cursor: pointer;
            color: #536471;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .close-btn:hover {
            background-color: rgba(0, 0, 0, 0.05);
        }
        
        body.dark-mode .close-btn {
            color: #8899a6;
        }
        
        body.dark-mode .close-btn:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }
        
        .modal-body {
            padding: 20px;
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        .form-group label {
            display: block;
            font-weight: 600;
            margin-bottom: 8px;
        }
        
        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 12px;
            border: 1px solid #cfd9de;
            border-radius: 4px;
            font-size: 15px;
            resize: none;
        }
        
        body.dark-mode .form-group input,
        body.dark-mode .form-group textarea {
            background-color: #192734;
            border-color: #38444d;
            color: #fff;
        }
        
        .form-group textarea {
            height: 100px;
        }
        
        .char-count {
            display: block;
            text-align: right;
            font-size: 13px;
            color: #536471;
            margin-top: 5px;
        }
        
        body.dark-mode .char-count {
            color: #8899a6;
        }
        
        .privacy-options {
            margin-top: 10px;
        }
        
        .radio-option {
            margin-bottom: 15px;
            padding: 10px;
            border-radius: 8px;
            border: 1px solid #cfd9de;
        }
        
        body.dark-mode .radio-option {
            border-color: #38444d;
        }
        
        .radio-option label {
            font-weight: 600;
            margin-left: 5px;
        }
        
        .radio-option p {
            margin: 5px 0 0 25px;
            font-size: 13px;
            color: #536471;
        }
        
        body.dark-mode .radio-option p {
            color: #8899a6;
        }
        
        .modal-footer {
            padding: 15px 20px;
            border-top: 1px solid #eee;
            display: flex;
            justify-content: flex-end;
            gap: 15px;
        }
        
        body.dark-mode .modal-footer {
            border-color: #38444d;
        }
        
        .cancel-btn,
        .create-btn {
            padding: 10px 20px;
            border-radius: 30px;
            font-weight: 600;
            cursor: pointer;
        }
        
        .cancel-btn {
            background: none;
            border: 1px solid #cfd9de;
            color: #0f1419;
        }
        
        body.dark-mode .cancel-btn {
            border-color: #38444d;
            color: #fff;
        }
        
        .create-btn {
            background-color: #1da1f2;
            color: #fff;
            border: none;
        }
        
        .create-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        
        .cancel-btn:hover {
            background-color: rgba(0, 0, 0, 0.05);
        }
        
        body.dark-mode .cancel-btn:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }
        
        .create-btn:not(:disabled):hover {
            background-color: #1a91da;
        }
    `;
    
    document.head.appendChild(style);
} 
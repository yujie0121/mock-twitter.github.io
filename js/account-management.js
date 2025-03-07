/**
 * 账户管理功能
 * 处理退出登录和停用账户操作
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('初始化账户管理功能');
    
    // 退出登录按钮
    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            console.log('用户点击退出登录');
            
            // 简单确认
            if (confirm('确定要退出登录吗？')) {
                console.log('用户确认退出');
                // 假设退出操作
                alert('您已成功退出登录');
                window.location.href = 'login.html';
            }
        });
    }
    
    // 停用账户按钮
    const deactivateBtn = document.querySelector('.deactivate-btn');
    if (deactivateBtn) {
        deactivateBtn.addEventListener('click', showDeactivateModal);
    }
    
    // 创建并添加模态窗口
    createDeactivateModal();
    
    // 点击模态窗口外部关闭
    document.addEventListener('click', function(e) {
        const modal = document.querySelector('.confirmation-modal');
        if (modal && modal.classList.contains('active') && !e.target.closest('.modal-content') && !e.target.closest('.deactivate-btn')) {
            modal.classList.remove('active');
        }
    });
});

// 创建停用账户的确认模态窗口
function createDeactivateModal() {
    const modal = document.createElement('div');
    modal.className = 'confirmation-modal';
    
    modal.innerHTML = `
    <div class="modal-content">
        <div class="modal-header">
            <i class="fas fa-exclamation-triangle"></i>
            <h3>停用账户确认</h3>
        </div>
        <div class="modal-body">
            <p>您确定要停用您的账户吗？这将会：</p>
            <ul>
                <li>暂时隐藏您的个人资料和所有微博</li>
                <li>取消您的所有关注关系</li>
            </ul>
            <p>您可以在30天内重新激活账户，超过30天后您的数据将被<strong>永久删除</strong>。</p>
        </div>
        <div class="modal-actions">
            <button class="modal-btn cancel-btn">取消</button>
            <button class="modal-btn confirm-btn">确认停用</button>
        </div>
    </div>
    `;
    
    document.body.appendChild(modal);
    
    // 添加按钮事件
    const cancelBtn = modal.querySelector('.cancel-btn');
    cancelBtn.addEventListener('click', function() {
        modal.classList.remove('active');
    });
    
    const confirmBtn = modal.querySelector('.confirm-btn');
    confirmBtn.addEventListener('click', function() {
        console.log('用户确认停用账户');
        alert('您的账户已停用。您可以在30天内随时重新激活您的账户。');
        modal.classList.remove('active');
        window.location.href = 'login.html';
    });
}

// 显示停用账户模态窗口
function showDeactivateModal() {
    const modal = document.querySelector('.confirmation-modal');
    if (modal) {
        modal.classList.add('active');
    }
} 
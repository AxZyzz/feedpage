/**
 * ZTrike Sports Achievement System
 * Gamification features to increase user engagement with sports content
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize achievement system after main UI loads
    setTimeout(initializeAchievementSystem, 1000);
});

/**
 * Initialize the achievement system
 */
function initializeAchievementSystem() {
    addAchievementBadges();
    setupProgressTracking();
    initializeRewardSystem();
}

/**
 * Add achievement badges section to the profile
 */
function addAchievementBadges() {
    const leftSidebar = document.querySelector('.left-sidebar');
    if (!leftSidebar) return;
    
    const achievementsWidget = document.createElement('div');
    achievementsWidget.className = 'card sports-card achievements-widget';
    achievementsWidget.style.marginBottom = '20px';
    
    achievementsWidget.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
            <h3 style="font-size: 16px; margin: 0;">Your Achievements</h3>
            <span class="sports-badge">Level 8</span>
        </div>
        
        <div class="achievement-progress" style="margin-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                <span style="font-size: 14px;">Sports Fan Level</span>
                <span style="font-size: 14px;">800/1000 XP</span>
            </div>
            <div style="height: 8px; background-color: #f1f1f1; border-radius: 4px; overflow: hidden;">
                <div style="height: 100%; width: 80%; background-color: #e63946; transition: width 0.3s ease;"></div>
            </div>
        </div>
        
        <div class="achievements-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 15px;">
            <div class="achievement-badge" style="text-align: center;">
                <div class="badge-icon" style="width: 50px; height: 50px; margin: 0 auto 5px; background-color: #1d3557; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                    <i class="fas fa-trophy" style="color: gold;"></i>
                </div>
                <div style="font-size: 12px;">Prediction Pro</div>
                <div style="font-size: 10px; color: #666;">Level 3</div>
            </div>
            
            <div class="achievement-badge" style="text-align: center;">
                <div class="badge-icon" style="width: 50px; height: 50px; margin: 0 auto 5px; background-color: #457b9d; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                    <i class="fas fa-basketball-ball" style="color: #f1faee;"></i>
                </div>
                <div style="font-size: 12px;">Basketball Guru</div>
                <div style="font-size: 10px; color: #666;">Level 5</div>
            </div>
            
            <div class="achievement-badge" style="text-align: center;">
                <div class="badge-icon" style="width: 50px; height: 50px; margin: 0 auto 5px; background-color: #a8dadc; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                    <i class="fas fa-chart-line" style="color: #1d3557;"></i>
                </div>
                <div style="font-size: 12px;">Stats Master</div>
                <div style="font-size: 10px; color: #666;">Level 2</div>
            </div>
        </div>
        
        <div class="recent-achievements" style="margin-bottom: 15px;">
            <h4 style="font-size: 14px; margin-bottom: 10px;">Recent Achievements</h4>
            
            <div class="achievement-item" style="display: flex; align-items: center; margin-bottom: 8px;">
                <i class="fas fa-medal" style="color: #e63946; margin-right: 10px;"></i>
                <div>
                    <div style="font-size: 14px;">Perfect Prediction</div>
                    <div style="font-size: 12px; color: #666;">Correctly predicted 5 games in a row</div>
                </div>
                <span style="margin-left: auto; font-size: 12px; color: #666;">2h ago</span>
            </div>
            
            <div class="achievement-item" style="display: flex; align-items: center;">
                <i class="fas fa-star" style="color: #ffd700; margin-right: 10px;"></i>
                <div>
                    <div style="font-size: 14px;">Engagement Star</div>
                    <div style="font-size: 12px; color: #666;">Interacted with 50 sports posts</div>
                </div>
                <span style="margin-left: auto; font-size: 12px; color: #666;">1d ago</span>
            </div>
        </div>
        
        <a href="#" class="show-more" style="display: block; text-align: center; color: #666; font-size: 14px;">View all achievements <i class="fas fa-chevron-right"></i></a>
    `;
    
    // Add hover effects to achievement badges
    const badges = achievementsWidget.querySelectorAll('.achievement-badge');
    badges.forEach(badge => {
        badge.style.cursor = 'pointer';
        badge.style.transition = 'transform 0.3s ease';
        
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Insert after the personalized stats widget
    const statsWidget = leftSidebar.querySelector('.sports-card');
    if (statsWidget) {
        statsWidget.parentNode.insertBefore(achievementsWidget, statsWidget.nextSibling);
    } else {
        leftSidebar.prepend(achievementsWidget);
    }
}

/**
 * Setup progress tracking for achievements
 */
function setupProgressTracking() {
    // Track user interactions with sports content
    document.addEventListener('click', function(e) {
        if (e.target.closest('.post-btn')) {
            updateAchievementProgress('engagement', 1);
        }
        
        if (e.target.closest('.prediction-btn')) {
            updateAchievementProgress('predictions', 1);
        }
    });
}

/**
 * Update achievement progress and trigger notifications
 */
function updateAchievementProgress(type, value) {
    // Simulate progress update
    const progressBar = document.querySelector('.achievement-progress div div');
    if (progressBar) {
        const currentWidth = parseInt(progressBar.style.width);
        const newWidth = Math.min(currentWidth + (value * 2), 100);
        progressBar.style.width = newWidth + '%';
        
        if (newWidth >= 100) {
            showLevelUpNotification();
        }
    }
}

/**
 * Show level up notification
 */
function showLevelUpNotification() {
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = '#1d3557';
    notification.style.color = 'white';
    notification.style.padding = '15px 20px';
    notification.style.borderRadius = '8px';
    notification.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    notification.style.zIndex = '1000';
    notification.style.animation = 'slideIn 0.3s ease';
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center;">
            <i class="fas fa-level-up-alt" style="font-size: 24px; margin-right: 15px; color: #e63946;"></i>
            <div>
                <div style="font-weight: bold; margin-bottom: 5px;">Level Up!</div>
                <div style="font-size: 14px;">You've reached Level 9</div>
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

/**
 * Initialize reward system for achievements
 */
function initializeRewardSystem() {
    // Add custom CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        
        .achievement-badge .badge-icon {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .achievement-badge:hover .badge-icon {
            transform: scale(1.1);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
    `;
    
    document.head.appendChild(style);
}
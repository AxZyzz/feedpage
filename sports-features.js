/**
 * ZTrike Sports Features
 * Enhanced interactive features to make the platform more engaging for sports enthusiasts
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize enhanced sports features after the main UI is loaded
    setTimeout(initializeEnhancedSportsFeatures, 800);
});

/**
 * Initialize all enhanced sports features
 */
function initializeEnhancedSportsFeatures() {
    addLiveScoreTracker();
    addPersonalizedStatsWidget();
    addGamePredictionWidget();
    addAchievementBadges();
    addSportsNewsCarousel();
    enhanceTeamColors();
    addFantasyLeagueWidget();
}

/**
 * Add a live score tracker with real-time updates and animations
 */
function addLiveScoreTracker() {
    const rightSidebar = document.querySelector('.right-sidebar');
    if (!rightSidebar) return;
    
    const liveScoreTracker = document.createElement('div');
    liveScoreTracker.className = 'card sports-card';
    liveScoreTracker.style.marginBottom = '20px';
    liveScoreTracker.style.position = 'relative';
    liveScoreTracker.style.overflow = 'hidden';
    
    // Add a subtle basketball court background
    liveScoreTracker.style.backgroundImage = 'linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url(https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)';
    liveScoreTracker.style.backgroundSize = 'cover';
    liveScoreTracker.style.backgroundPosition = 'center';
    
    liveScoreTracker.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
            <h3 style="font-size: 16px; margin: 0; display: flex; align-items: center;">
                <span class="live-indicator" style="margin-right: 8px;"></span>
                Live Score Tracker
            </h3>
            <span class="sports-badge">LIVE</span>
        </div>
        
        <div class="live-game" style="position: relative; padding: 15px; border-radius: 8px; background-color: rgba(29, 53, 87, 0.05); margin-bottom: 15px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="display: flex; flex-direction: column; align-items: center; width: 40%;">
                    <img src="https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg" style="width: 60px; height: 60px; margin-bottom: 10px;">
                    <h4 style="margin: 0; font-size: 18px;">Lakers</h4>
                    <div class="score" style="font-size: 32px; font-weight: bold; color: #552583;">108</div>
                </div>
                
                <div style="display: flex; flex-direction: column; align-items: center; width: 20%;">
                    <div style="font-size: 14px; font-weight: bold; margin-bottom: 10px;">Q4</div>
                    <div style="font-size: 18px; font-weight: bold; color: #e63946;">2:45</div>
                    <div style="margin-top: 10px; font-size: 14px;">LIVE</div>
                </div>
                
                <div style="display: flex; flex-direction: column; align-items: center; width: 40%;">
                    <img src="https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg" style="width: 60px; height: 60px; margin-bottom: 10px;">
                    <h4 style="margin: 0; font-size: 18px;">Warriors</h4>
                    <div class="score" style="font-size: 32px; font-weight: bold; color: #1D428A;">104</div>
                </div>
            </div>
            
            <div class="game-stats" style="display: flex; justify-content: space-between; margin-top: 15px; padding-top: 15px; border-top: 1px solid rgba(0,0,0,0.1);">
                <div style="text-align: center; width: 33%;">
                    <div style="font-size: 12px; color: #666;">FG%</div>
                    <div style="font-weight: bold;">48.2</div>
                </div>
                <div style="text-align: center; width: 33%;">
                    <div style="font-size: 12px; color: #666;">3PT</div>
                    <div style="font-weight: bold;">12/28</div>
                </div>
                <div style="text-align: center; width: 33%;">
                    <div style="font-size: 12px; color: #666;">REB</div>
                    <div style="font-weight: bold;">42</div>
                </div>
            </div>
            
            <div class="recent-play" style="margin-top: 15px; padding: 10px; background-color: rgba(230, 57, 70, 0.1); border-radius: 5px; animation: scoreFlash 2s infinite;">
                <div style="font-weight: bold;">RECENT PLAY</div>
                <div>LeBron James with the slam dunk! +2 pts</div>
            </div>
        </div>
        
        <div class="other-games" style="margin-top: 15px;">
            <h4 style="font-size: 14px; margin-bottom: 10px;">Other Games</h4>
            
            <div class="match-card" style="margin-bottom: 10px;">
                <div style="display: flex; align-items: center;">
                    <img src="https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg" class="team-logo" alt="Heat">
                    <span style="margin-left: 10px; font-weight: bold;">MIA</span>
                    <span style="margin-left: 5px; font-weight: bold;">92</span>
                </div>
                
                <div style="display: flex; align-items: center;">
                    <span style="margin-right: 5px; font-weight: bold;">89</span>
                    <span style="margin-right: 10px; font-weight: bold;">BOS</span>
                    <img src="https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg" class="team-logo" alt="Celtics">
                </div>
                
                <div style="margin-left: 15px; font-size: 12px; color: #666;">
                    <div>Q3 - 5:12</div>
                </div>
            </div>
            
            <a href="#" class="show-more" style="display: block; text-align: center; margin-top: 15px; color: #666; font-size: 14px;">See all games <i class="fas fa-chevron-right"></i></a>
        </div>
    `;
    
    // Add score update animation
    setTimeout(() => {
        const lakers = liveScoreTracker.querySelector('.score:first-of-type');
        if (lakers) {
            lakers.style.transition = 'all 0.5s ease';
            lakers.textContent = '110';
            lakers.style.animation = 'scoreFlash 1s';
            
            // Add notification
            const recentPlay = liveScoreTracker.querySelector('.recent-play');
            if (recentPlay) {
                recentPlay.innerHTML = `
                    <div style="font-weight: bold;">RECENT PLAY</div>
                    <div>Anthony Davis with the jump shot! +2 pts</div>
                `;
                recentPlay.style.animation = 'none';
                setTimeout(() => {
                    recentPlay.style.animation = 'scoreFlash 2s infinite';
                }, 100);
            }
        }
    }, 5000);
    
    // Insert at the top of the sidebar
    rightSidebar.prepend(liveScoreTracker);
}

/**
 * Add personalized stats widget that tracks user's favorite teams and players
 */
function addPersonalizedStatsWidget() {
    const leftSidebar = document.querySelector('.left-sidebar');
    if (!leftSidebar) return;
    
    const statsWidget = document.createElement('div');
    statsWidget.className = 'card sports-card';
    statsWidget.style.marginBottom = '20px';
    
    statsWidget.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
            <h3 style="font-size: 16px; margin: 0;">Your Stats Tracker</h3>
            <span class="sports-badge">PERSONAL</span>
        </div>
        
        <div style="margin-bottom: 15px;">
            <h4 style="font-size: 14px; margin-bottom: 10px;">Favorite Teams Performance</h4>
            
            <div class="team-performance" style="margin-bottom: 10px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                    <div style="display: flex; align-items: center;">
                        <img src="https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg" style="width: 24px; height: 24px; margin-right: 10px;">
                        <span>Lakers</span>
                    </div>
                    <span style="font-weight: bold;">W-L: 42-28</span>
                </div>
                <div style="height: 6px; background-color: #f1f1f1; border-radius: 3px; overflow: hidden;">
                    <div style="height: 100%; width: 60%; background-color: #552583;"></div>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 12px; color: #666; margin-top: 5px;">
                    <span>Last 5: WWLWL</span>
                    <span>Playoff Chance: 92%</span>
                </div>
            </div>
            
            <div class="team-performance" style="margin-bottom: 10px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                    <div style="display: flex; align-items: center;">
                        <img src="https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg" style="width: 24px; height: 24px; margin-right: 10px;">
                        <span>Celtics</span>
                    </div>
                    <span style="font-weight: bold;">W-L: 45-25</span>
                </div>
                <div style="height: 6px; background-color: #f1f1f1; border-radius: 3px; overflow: hidden;">
                    <div style="height: 100%; width: 64%; background-color: #007A33;"></div>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 12px; color: #666; margin-top: 5px;">
                    <span>Last 5: WWWLL</span>
                    <span>Playoff Chance: 97%</span>
                </div>
            </div>
        </div>
        
        <div>
            <h4 style="font-size: 14px; margin-bottom: 10px;">Fantasy Players</h4>
            
            <div class="fantasy-player" style="display: flex; align-items: center; margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px solid #eee;">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" style="width: 40px; height: 40px; border-radius: 50%; margin-right: 10px;">
                <div style="flex-grow: 1;">
                    <div style="display: flex; justify-content: space-between;">
                        <span style="font-weight: bold;">LeBron James</span>
                        <span style="color: #e63946;">+2.5 pts</span>
                    </div>
                    <div style="display: flex; font-size: 12px; color: #666;">
                        <span style="margin-right: 10px;">28.4 PPG</span>
                        <span style="margin-right: 10px;">8.3 RPG</span>
                        <span>6.8 APG</span>
                    </div>
                </div>
            </div>
            
            <div class="fantasy-player" style="display: flex; align-items: center;">
                <img src="https://randomuser.me/api/portraits/men/22.jpg" style="width: 40px; height: 40px; border-radius: 50%; margin-right: 10px;">
                <div style="flex-grow: 1;">
                    <div style="display: flex; justify-content: space-between;">
                        <span style="font-weight: bold;">Stephen Curry</span>
                        <span style="color: #e63946;">+1.8 pts</span>
                    </div>
                    <div style="display: flex; font-size: 12px; color: #666;">
                        <span style="margin-right: 10px;">32.1 PPG</span>
                        <span style="margin-right: 10px;">5.5 RPG</span>
                        <span>5.8 APG</span>
                    </div>
                </div>
            </div>
        </div>
        
        <a href="#" class="show-more" style="display: block; text-align: center; margin-top: 15px; color: #666; font-size: 14px;">Manage your stats <i class="fas fa-chevron-right"></i></a>
    `;
    
    // Insert after the profile card
    const profileCard = leftSidebar.querySelector('.profile-card');
    if (profileCard) {
        profileCard.parentNode.insertBefore(statsWidget, profileCard.nextSibling);
    } else {
        leftSidebar.prepend(statsWidget);
    }
}

/**
 * Add game prediction widget with interactive elements
 */
function addGamePredictionWidget() {
    const feedPosts = document.querySelector('.feed-posts');
    if (!feedPosts) return;
    
    const predictionWidget = document.createElement('div');
    predictionWidget.className = 'post card';
    
    predictionWidget.innerHTML = `
        <div class="post-header">
            <div class="post-user">
                <div class="user-pic">
                    <img src="https://randomuser.me/api/portraits/men/88.jpg" alt="User Picture">
                </div>
                <div class="user-info">
                    <h3>ZTrike Predictions</h3>
                    <p>Powered by ZTrike Analytics</p>
                    <span class="post-time">4h • <i class="fas fa-globe-americas"></i></span>
                </div>
            </div>
            <div class="post-actions">
                <button class="more-btn"><i class="fas fa-ellipsis-h"></i></button>
            </div>
        </div>
        <div class="post-content">
            <p>Make your predictions for tonight's big game! 🏀 The more accurate your predictions, the more points you earn!</p>
            
            <div style="margin-top: 15px; padding: 15px; background-color: rgba(29, 53, 87, 0.05); border-radius: 8px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                    <div style="display: flex; flex-direction: column; align-items: center; width: 40%;">
                        <img src="https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg" style="width: 50px; height: 50px; margin-bottom: 10px;">
                        <h4 style="margin: 0; font-size: 16px;">Lakers</h4>
                    </div>
                    
                    <div style="display: flex; flex-direction: column; align-items: center; width: 20%;">
                        <div style="font-size: 14px; font-weight: bold; margin-bottom: 5px;">VS</div>
                        <div style="font-size: 12px;">Tonight 8:30 PM</div>
                    </div>
                    
                    <div style="display: flex; flex-direction: column; align-items: center; width: 40%;">
                        <img src="https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg" style="width: 50px; height: 50px; margin-bottom: 10px;">
                        <h4 style="margin: 0; font-size: 16px;">Celtics</h4>
                    </div>
                </div>
                
                <div style="margin-bottom: 15px;">
                    <div style="font-weight: bold; margin-bottom: 5px;">Who will win?</div>
                    <div style="display: flex; gap: 10px;">
                        <button class="prediction-btn" data-team="lakers" style="flex: 1; padding: 8px; border: 2px solid #ddd; background-color: transparent; border-radius: 5px; cursor: pointer; font-weight: bold; transition: all 0.3s ease;">Lakers</button>
                        <button class="prediction-btn" data-team="celtics" style="flex: 1; padding: 8px; border: 2px solid #ddd; background-color: transparent; border-radius: 5px; cursor: pointer; font-weight: bold; transition: all 0.3s ease;">Celtics</button>
                    </div>
                </div>
                
                <div style="margin-bottom: 15px;">
                    <div style="font-weight: bold; margin-bottom: 5px;">Predict the score difference:</div>
                    <div style="display: flex; gap: 10px;">
                        <button class="margin-btn" data-margin="1-5" style="flex: 1; padding: 8px; border: 2px solid #ddd; background-color: transparent; border-radius: 5px; cursor: pointer; transition: all 0.3s ease;">1-5 pts</button>
                        <button class="margin-btn" data-margin="6-10" style="flex: 1; padding: 8px; border: 2px solid #ddd; background-color: transparent; border-radius: 5px; cursor: pointer; transition: all 0.3s ease;">6-10 pts</button>
                        <button class="margin-btn" data-margin="11+" style="flex: 1; padding: 8px; border: 2px solid #ddd; background-color: transparent; border-radius: 5px; cursor: pointer; transition: all 0.3s ease;">11+ pts</button>
                    </div>
                </div>
                
                <div style="margin-bottom: 15px;">
                    <div style="font-weight: bold; margin-bottom: 5px;">Top scorer will have:</div>
                    <div style="display: flex; gap: 10px;">
                        <button class="points-btn" data-points="<25" style="flex: 1; padding: 8px; border: 2px solid #ddd; background-color: transparent; border-radius: 5px; cursor: pointer; transition: all 0.3s ease;">&lt;25 pts</button>
                        <button class="points-btn" data-points="25-35" style="flex: 1; padding: 8px; border: 2px solid #ddd; background-color: transparent; border-radius: 5px; cursor: pointer; transition: all 0.3s ease;">25-35 pts</button>
                        <button class="points-btn" data-points="35+" style="flex: 1; padding: 8px; border: 2px solid #ddd; background-color: transparent; border-radius: 5px; cursor: pointer; transition: all 0.3s ease;">35+ pts</button>
                    </div>
                </div>
                
                <button class="submit-prediction" style="width: 100%; padding: 10px; background-color: #e63946; color: white; border: none; border-radius: 5px; font-weight: bold; cursor: pointer; transition: all 0.3s ease;">Submit Prediction</button>
                
                <div style="margin-top: 15px; font-size: 12px; color: #666; text-align: center;">
                    <span>Community Prediction: Lakers by 4 pts (58% of votes)</span>
                </div>
            </div>
        </div>
        <div class="post-stats">
            <div class="reactions">
                <span><i class="fas fa-thumbs-up"></i> 342</span>
                <span><i class="fas fa-comment"></i> 56 comments</span>
            </div>
        </div>
        <div class="post-buttons">
            <button class="post-btn"><i class="far fa-thumbs-up"></i> Like</button>
            <button class="post-btn"><i class="far fa-comment"></i> Comment</button>
            <button class="post-btn"><i class="fas fa-share"></i> Share</button>
            <button class="post-btn"><i class="far fa-paper-plane"></i> Send</button>
        </div>
    `;
    
    // Add prediction interaction
    setTimeout(() => {
        // Team prediction buttons
        const predictionBtns = predictionWidget.querySelectorAll('.prediction-btn');
        predictionBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                predictionBtns.forEach(b => {
                    b.style.borderColor = '#ddd';
                    b.style.backgroundColor = 'transparent';
                    b.style.color = '#333';
                });
                
                if (this.dataset.team === 'lakers') {
                    this.style.borderColor = '#552583';
                    this.style.backgroundColor = 'rgba(85, 37, 131, 0.1)';
                    this.style.color = '#552583';
                } else {
                    this.style.borderColor = '#007A33';
                    this.style.backgroundColor = 'rgba(0, 122, 51, 0.1)';
                    this.style.color = '#007A33';
                }
            });
        });
        
        // Margin prediction buttons
        const marginBtns = predictionWidget.querySelectorAll('.margin-btn');
        marginBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                marginBtns.forEach(b => {
                    b.style.borderColor = '#ddd';
                    b.style.backgroundColor = 'transparent';
                    b.style.color = '#333';
                });
                
                this.style.borderColor = '#1d3557';
                this.style.backgroundColor = 'rgba(29, 53, 87, 0.1)';
                this.style.color = '#1d3557';
            });
        });
        
        // Points prediction buttons
        const pointsBtns = predictionWidget.querySelectorAll('.points-btn');
        pointsBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                pointsBtns.forEach(b => {
                    b.style.borderColor = '#ddd';
                    b.style.backgroundColor = 'transparent';
                    b.style.color = '#333';
                });
                
                this.style.borderColor = '#e63946';
                this.style.backgroundColor = 'rgba(230, 57, 70, 0.1)';
                this.style.color = '#e63946';
            });
        });
        
        // Submit button
        const submitBtn = predictionWidget.querySelector('.submit-prediction');
        if (submitBtn) {
            submitBtn.addEventListener('mouseenter', function() {
                this.style.backgroundColor = '#c1121f';
                this.style.transform = 'translateY(-2px)';
            });
            
            submitBtn.addEventListener('mouseleave', function() {
                this.style.backgroundColor = '#e63946';
                this.style.transform = 'translateY(0)';
            });
            
            submitBtn.addEventListener('click', function() {
                this.textContent = 'Prediction Submitted!';
                this.style.backgroundColor = '#457b9d';
                
                // Show points earned
                setTimeout(() => {
                    const pointsEarned = document.createElement('div');
                    pointsEarned.style.marginTop = '15px';
                    pointsEarned.style.padding = '10px';
                    pointsEarned.style.backgroundColor = 'rgba(69, 123, 157, 0.1)';
                    pointsEarned.style.borderRadius = '5px';
                    pointsEarned.style.textAlign = 'center';
                    pointsEarned.style.fontWeight = 'bold';
                    pointsEarned.style.color = '#457b9d';
                    pointsEarned.style.animation = 'bounce 1s';
                    pointsEarned.innerHTML = '<i class="fas fa-trophy" style="margin-right: 5px; color: #e63946;"></i> You earned 50 prediction points!';
                    
                    this.parentNode.appendChild(pointsEarned);
                }, 1000);
            });
        }
    }, 500);
    
    // Insert after the first post
    const firstPost = feedPosts.querySelector('.post');
    if (firstPost) {
        feedPosts.insertBefore(predictionWidget, firstPost);
    } else {
        feedPosts.appendChild(predictionWidget);
    }
}

/**
 * Add achievement badges to the profile card
 */
function addAchievementBadges() {
    const profileCard = document.querySelector('.profile-card');
    if (!profileCard) return;
    
    const profileStats = profileCard.querySelector('.profile-stats');
    if (!profileStats) return;
    
    const achievementSection = document.createElement('div');
    achievementSection.className = 'achievement-badges';
    achievementSection.style.padding = '15px 0';
    achievementSection.style.borderTop = '1px solid #eee';
    achievementSection.style.borderBottom = '1px solid #eee';
    achievementSection.style.margin = '10px 0';
    
    achievementSection.innerHTML = `
        <h4 style="font-size: 14px; margin-bottom: 10px;">Your Achievements</h4>
        <div style="display: flex; justify-content: space-between;">
            <div class="badge" style="display: flex; flex-direction: column; align-items: center; width: 33%;">
                <div style="width: 40px; height: 40px; border-radius: 50%; background-color: #e63946; display: flex; align-items: center; justify-content: center; margin-bottom: 5px;">
                    <i class="fas fa-trophy" style="color: white;"></i>
                </div>
                <span style="font-size: 12px; text-align: center;">Prediction Pro</span>
            </div>
            <div class="badge" style="display: flex; flex-direction: column; align-items: center; width: 33%;">
                <div style="width: 40px; height: 40px; border-radius: 50%; background-color: #1d3557; display: flex; align-items: center; justify-content: center; margin-bottom: 5px;">
                    <i class="fas fa-fire" style="color: white;"></i>
                </div>
                <span style="font-size: 12px; text-align: center;">Hot Streak</span>
            </div>
            <div class="badge" style="display: flex; flex-direction: column; align-items: center; width: 33%;">
                <div style="width: 40px; height: 40px; border-radius: 50%; background-color: #457b9d; display: flex; align-items: center; justify-content: center; margin-bottom: 5px;">
                    <i class="fas fa-comments" style="color: white;"></i>
                </div>
                <span style="font-size: 12px; text-align: center;">Top Commenter</span>
            </div>
        </div>
    `;
    
    // Insert after profile stats
    profileStats.parentNode.insertBefore(achievementSection, profileStats.nextSibling);
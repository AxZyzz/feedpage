/**
 * ZTrike Sports Widgets
 * Additional interactive sports widgets to enhance user engagement
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize sports widgets after the main UI is loaded
    setTimeout(initializeSportsWidgets, 500);
});

/**
 * Initialize all sports widgets
 */
function initializeSportsWidgets() {
    addPlayerStatsWidget();
    addUpcomingGamesWidget();
    addHighlightReelWidget();
    enhanceExistingElements();
    addSportsPollInteractivity();
}

/**
 * Add player statistics widget to the right sidebar
 */
function addPlayerStatsWidget() {
    const rightSidebar = document.querySelector('.right-sidebar');
    if (!rightSidebar) return;
    
    const statsWidget = document.createElement('div');
    statsWidget.className = 'card sports-card';
    statsWidget.style.marginBottom = '20px';
    
    statsWidget.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
            <h3 style="font-size: 16px; margin: 0;">Top Performers</h3>
            <span class="sports-badge">Stats</span>
        </div>
        
        <div class="athlete-profile" style="display: flex; margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #eee;">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Athlete" style="width: 50px; height: 50px; border-radius: 50%; margin-right: 15px;">
            <div>
                <h4 style="margin: 0 0 5px 0;">LeBron James</h4>
                <p style="margin: 0; font-size: 12px; color: #666;">Los Angeles Lakers</p>
                
                <div class="athlete-stats">
                    <div class="stat-box">
                        <div class="stat-value">28.4</div>
                        <div class="stat-label">PPG</div>
                    </div>
                    <div class="stat-box">
                        <div class="stat-value">8.3</div>
                        <div class="stat-label">RPG</div>
                    </div>
                    <div class="stat-box">
                        <div class="stat-value">6.8</div>
                        <div class="stat-label">APG</div>
                    </div>
                    <div class="stat-box">
                        <div class="stat-value">51.4</div>
                        <div class="stat-label">FG%</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="sports-stat">
            <i class="fas fa-basketball-ball sports-stat-icon"></i>
            <span>Points Leader</span>
            <span class="sports-stat-value">Joel Embiid (33.1)</span>
        </div>
        
        <div class="sports-stat">
            <i class="fas fa-chart-line sports-stat-icon"></i>
            <span>Assists Leader</span>
            <span class="sports-stat-value">Trae Young (10.8)</span>
        </div>
        
        <div class="sports-stat">
            <i class="fas fa-fist-raised sports-stat-icon"></i>
            <span>Rebounds Leader</span>
            <span class="sports-stat-value">Rudy Gobert (12.4)</span>
        </div>
        
        <a href="#" class="show-more" style="display: block; text-align: center; margin-top: 15px; color: #666; font-size: 14px;">See all stats <i class="fas fa-chevron-right"></i></a>
    `;
    
    // Insert after the live scores widget if it exists, otherwise at the beginning
    const liveScoresCard = rightSidebar.querySelector('.card:nth-child(2)');
    if (liveScoresCard) {
        liveScoresCard.parentNode.insertBefore(statsWidget, liveScoresCard.nextSibling);
    } else {
        rightSidebar.prepend(statsWidget);
    }
}

/**
 * Add upcoming games widget to the left sidebar
 */
function addUpcomingGamesWidget() {
    const leftSidebar = document.querySelector('.left-sidebar');
    if (!leftSidebar) return;
    
    const upcomingGamesWidget = document.createElement('div');
    upcomingGamesWidget.className = 'card sports-card';
    upcomingGamesWidget.style.marginBottom = '20px';
    
    upcomingGamesWidget.innerHTML = `
        <h3 style="font-size: 16px; margin-bottom: 15px;">Upcoming Games</h3>
        
        <div class="match-card">
            <div style="display: flex; align-items: center;">
                <img src="https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg" class="team-logo" alt="Lakers">
                <span style="margin-left: 10px; font-weight: bold;">LAL</span>
            </div>
            
            <div class="vs-badge">VS</div>
            
            <div style="display: flex; align-items: center;">
                <span style="margin-right: 10px; font-weight: bold;">BOS</span>
                <img src="https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg" class="team-logo" alt="Celtics">
            </div>
            
            <div style="margin-left: 15px; font-size: 12px; color: #666;">
                <div>Tomorrow</div>
                <div>8:30 PM</div>
            </div>
        </div>
        
        <div class="match-card">
            <div style="display: flex; align-items: center;">
                <img src="https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg" class="team-logo" alt="Heat">
                <span style="margin-left: 10px; font-weight: bold;">MIA</span>
            </div>
            
            <div class="vs-badge">VS</div>
            
            <div style="display: flex; align-items: center;">
                <span style="margin-right: 10px; font-weight: bold;">GSW</span>
                <img src="https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg" class="team-logo" alt="Warriors">
            </div>
            
            <div style="margin-left: 15px; font-size: 12px; color: #666;">
                <div>Sat, Jun 12</div>
                <div>7:00 PM</div>
            </div>
        </div>
        
        <a href="#" class="show-more" style="display: block; text-align: center; margin-top: 15px; color: #666; font-size: 14px;">See full schedule <i class="fas fa-chevron-right"></i></a>
    `;
    
    // Insert after the profile card
    const profileCard = leftSidebar.querySelector('.profile-card');
    if (profileCard) {
        profileCard.parentNode.insertBefore(upcomingGamesWidget, profileCard.nextSibling);
    } else {
        leftSidebar.prepend(upcomingGamesWidget);
    }
}

/**
 * Add highlight reel widget to the feed
 */
function addHighlightReelWidget() {
    const feedPosts = document.querySelector('.feed-posts');
    if (!feedPosts) return;
    
    const highlightWidget = document.createElement('div');
    highlightWidget.className = 'post card';
    
    highlightWidget.innerHTML = `
        <div class="post-header">
            <div class="post-user">
                <div class="user-pic">
                    <img src="https://randomuser.me/api/portraits/men/88.jpg" alt="User Picture">
                </div>
                <div class="user-info">
                    <h3>ZTrike Highlights</h3>
                    <p>Official ZTrike Sports Channel</p>
                    <span class="post-time">3h • <i class="fas fa-globe-americas"></i></span>
                </div>
            </div>
            <div class="post-actions">
                <button class="more-btn"><i class="fas fa-ellipsis-h"></i></button>
            </div>
        </div>
        <div class="post-content">
            <p>Check out the top 5 plays from last night's games! 🔥 #TopPlays #Basketball</p>
            
            <div class="highlight-reel">
                <img src="https://images.unsplash.com/photo-1518650868956-c1f7f5678c9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Basketball Highlight">
                <div class="play-button">
                    <i class="fas fa-play"></i>
                </div>
                <div class="highlight-overlay">
                    <h4>Top 5 Plays - May 28</h4>
                    <p>2:45 • 1.2M views</p>
                </div>
            </div>
        </div>
        <div class="post-stats">
            <div class="reactions">
                <span><i class="fas fa-thumbs-up"></i> 1.5K</span>
                <span><i class="fas fa-comment"></i> 87 comments</span>
            </div>
        </div>
        <div class="post-buttons">
            <button class="post-btn"><i class="far fa-thumbs-up"></i> Like</button>
            <button class="post-btn"><i class="far fa-comment"></i> Comment</button>
            <button class="post-btn"><i class="fas fa-share"></i> Share</button>
            <button class="post-btn"><i class="far fa-paper-plane"></i> Send</button>
        </div>
    `;
    
    // Add highlight reel interaction
    setTimeout(() => {
        const playButton = highlightWidget.querySelector('.play-button');
        if (playButton) {
            playButton.addEventListener('click', function() {
                alert('Video player would open here!');
            });
        }
    }, 500);
    
    // Insert after the first post
    const secondPost = feedPosts.querySelector('.post:nth-child(2)');
    if (secondPost) {
        feedPosts.insertBefore(highlightWidget, secondPost);
    } else {
        feedPosts.appendChild(highlightWidget);
    }
}

/**
 * Enhance existing elements with sports theme classes
 */
function enhanceExistingElements() {
    // Add sports-theme class to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.add('sports-theme');
    });
    
    // Add sports-theme class to post buttons
    const postBtns = document.querySelectorAll('.post-btn');
    postBtns.forEach(btn => {
        btn.classList.add('sports-theme');
    });
    
    // Add live indicator to live scores
    const liveScoresTitle = document.querySelector('.right-sidebar .card:nth-child(2) h3 + span');
    if (liveScoresTitle) {
        const liveIndicator = document.createElement('span');
        liveIndicator.className = 'live-indicator';
        liveScoresTitle.prepend(liveIndicator);
    }
}

/**
 * Add interactivity to sports polls
 */
function addSportsPollInteractivity() {
    const pollOptions = document.querySelectorAll('.poll-option');
    
    pollOptions.forEach(option => {
        // Create fill element for visual percentage
        const percentText = option.querySelector('span:last-child');
        if (percentText) {
            const percent = parseInt(percentText.textContent);
            
            const fillElement = document.createElement('div');
            fillElement.className = 'poll-option-fill';
            fillElement.style.width = percent + '%';
            
            option.style.position = 'relative';
            option.insertBefore(fillElement, option.firstChild);
            
            // Make text elements appear above the fill
            Array.from(option.querySelectorAll('span')).forEach(span => {
                span.classList.add('poll-option-text');
            });
        }
        
        // Add click interaction
        option.addEventListener('click', function() {
            pollOptions.forEach(opt => {
                opt.style.fontWeight = 'normal';
                opt.style.borderColor = '#ddd';
            });
            
            this.style.fontWeight = 'bold';
            this.style.borderColor = '#e63946';
            
            // Show animation
            this.style.animation = 'pulse 0.5s';
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        });
    });
}
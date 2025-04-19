// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize UI components
    initializeUI();
    
    // Add event listeners
    addEventListeners();
    
    // Initialize sports-specific features
    initializeSportsFeatures();
});

/**
 * Initialize UI components and animations
 */
function initializeUI() {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add dynamic sports-themed animation to posts
    const posts = document.querySelectorAll('.post');
    posts.forEach((post, index) => {
        post.style.opacity = '0';
        post.style.transform = 'translateY(20px) scale(0.98)';
        post.style.transition = 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease';
        
        // Stagger the animations with a bounce effect
        setTimeout(() => {
            post.style.opacity = '1';
            post.style.transform = 'translateY(0) scale(1)';
        }, 120 * index);
    });
    
    // Add subtle pulse animation to action buttons
    const actionBtns = document.querySelectorAll('.action-btn');
    actionBtns.forEach(btn => {
        btn.style.transition = 'transform 0.3s ease, background-color 0.3s ease';
    });
    
    // Initialize profile menu dropdown
    initializeDropdowns();
    
    // Add ZTrike branding animation
    const logo = document.querySelector('.logo h1');
    if (logo) {
        logo.style.transition = 'transform 0.5s ease, text-shadow 0.5s ease';
        logo.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
            this.style.textShadow = '0 0 10px rgba(230, 57, 70, 0.5)';
        });
        logo.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
            this.style.textShadow = 'none';
        });
    }
}

/**
 * Add event listeners to interactive elements
 */
function addEventListeners() {
    // Like button functionality with sports-themed animation
    const likeButtons = document.querySelectorAll('.post-btn:first-child');
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const icon = this.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                icon.style.color = '#e63946';
                
                // Add a small bounce animation
                icon.style.transition = 'transform 0.3s ease, color 0.3s ease';
                icon.style.transform = 'scale(1.3)';
                setTimeout(() => {
                    icon.style.transform = 'scale(1)';
                }, 300);
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                icon.style.color = '';
            }
        });
    });
    
    // Post input focus effect with sports theme colors
    const postInput = document.querySelector('.post-input input');
    if (postInput) {
        postInput.addEventListener('focus', function() {
            this.parentElement.style.boxShadow = '0 0 0 2px rgba(230, 57, 70, 0.5)';
            this.parentElement.style.borderColor = '#e63946';
            this.parentElement.style.transform = 'translateY(-2px)';
            this.parentElement.style.transition = 'all 0.3s ease';
        });
        
        postInput.addEventListener('blur', function() {
            this.parentElement.style.boxShadow = 'none';
            this.parentElement.style.borderColor = '#ddd';
            this.parentElement.style.transform = 'translateY(0)';
        });
    }
    
    // Connect button hover effect with sports theme
    const connectButtons = document.querySelectorAll('.connect-btn');
    connectButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#1d3557';
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#457b9d';
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Show more functionality
    const showMoreLinks = document.querySelectorAll('.show-more');
    showMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const parentCard = this.closest('.card');
            const hiddenItems = parentCard.querySelectorAll('.hidden-item');
            
            hiddenItems.forEach(item => {
                if (item.style.display === 'none' || !item.style.display) {
                    item.style.display = 'flex';
                    this.innerHTML = 'Show less <i class="fas fa-chevron-up"></i>';
                } else {
                    item.style.display = 'none';
                    this.innerHTML = 'Show more <i class="fas fa-chevron-down"></i>';
                }
            });
        });
    });
}

/**
 * Initialize dropdown menus
 */
function initializeDropdowns() {
    const profileMenu = document.querySelector('.profile-menu');
    
    if (profileMenu) {
        // Create dropdown element
        const dropdown = document.createElement('div');
        dropdown.className = 'profile-dropdown';
        dropdown.style.display = 'none';
        dropdown.style.position = 'absolute';
        dropdown.style.top = '100%';
        dropdown.style.right = '0';
        dropdown.style.backgroundColor = '#fff';
        dropdown.style.borderRadius = '8px';
        dropdown.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
        dropdown.style.width = '280px';
        dropdown.style.zIndex = '1000';
        dropdown.style.padding = '10px 0';
        dropdown.style.marginTop = '5px';
        
        // Add dropdown content
        dropdown.innerHTML = `
            <div style="padding: 15px; border-bottom: 1px solid #eee;">
                <div style="display: flex; align-items: center;">
                    <div style="width: 60px; height: 60px; border-radius: 50%; overflow: hidden; margin-right: 15px;">
                        <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Profile" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div>
                        <h3 style="font-size: 16px; margin-bottom: 5px;">John Doe</h3>
                        <p style="font-size: 14px; color: #666;">Senior Software Engineer at Tech Company</p>
                    </div>
                </div>
                <button style="width: 100%; padding: 8px 0; margin-top: 15px; background-color: #e63946; border: none; border-radius: 30px; color: #fff; font-weight: 600; cursor: pointer; transition: all 0.3s ease;">View Profile</button>
            </div>
            <ul style="list-style: none;">
                <li style="padding: 10px 15px; font-size: 14px; cursor: pointer; transition: background-color 0.3s ease;">Account</li>
                <li style="padding: 10px 15px; font-size: 14px; cursor: pointer; transition: background-color 0.3s ease;">Settings & Privacy</li>
                <li style="padding: 10px 15px; font-size: 14px; cursor: pointer; transition: background-color 0.3s ease;">Help</li>
                <li style="padding: 10px 15px; font-size: 14px; cursor: pointer; transition: background-color 0.3s ease;">Language</li>
            </ul>
            <div style="border-top: 1px solid #eee; padding: 10px 15px;">
                <p style="font-size: 14px; cursor: pointer;">Sign Out</p>
            </div>
        `;
        
        // Append dropdown to profile menu
        profileMenu.style.position = 'relative';
        profileMenu.appendChild(dropdown);
        
        // Toggle dropdown on click
        profileMenu.addEventListener('click', function(e) {
            e.stopPropagation();
            if (dropdown.style.display === 'none') {
                dropdown.style.display = 'block';
            } else {
                dropdown.style.display = 'none';
            }
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function() {
            dropdown.style.display = 'none';
        });
        
        // Prevent dropdown from closing when clicking inside it
        dropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
}

/**
 * Handle post interactions (like, comment, share)
 * @param {string} action - The action to perform
 * @param {HTMLElement} postElement - The post element
 */
function handlePostInteraction(action, postElement) {
    const postId = postElement.dataset.postId;
    
    // This would typically involve an API call
    console.log(`Performing ${action} on post ${postId}`);
    
    // For demonstration, we'll just update the UI
    switch(action) {
        case 'like':
            const likeCount = postElement.querySelector('.reactions span:first-child');
            const currentCount = parseInt(likeCount.textContent.match(/\d+/)[0]);
            likeCount.innerHTML = `<i class="fas fa-thumbs-up"></i> ${currentCount + 1}`;
            break;
            
        case 'comment':
            // Show comment form
            const commentForm = document.createElement('div');
            commentForm.className = 'comment-form';
            commentForm.innerHTML = `
                <div style="display: flex; padding: 10px 0;">
                    <div style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden; margin-right: 10px;">
                        <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Profile" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div style="flex: 1; position: relative;">
                        <input type="text" placeholder="Add a comment..." style="width: 100%; padding: 10px 15px; border: 1px solid #ddd; border-radius: 30px; outline: none;">
                        <button style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: none; border: none; color: #0077b5; cursor: pointer;"><i class="fas fa-paper-plane"></i></button>
                    </div>
                </div>
            `;
            
            // Add comment form after post buttons
            const postButtons = postElement.querySelector('.post-buttons');
            postButtons.parentNode.insertBefore(commentForm, postButtons.nextSibling);
            
            // Focus on input
            setTimeout(() => {
                commentForm.querySelector('input').focus();
            }, 0);
            break;
            
        case 'share':
            // Show share options
            alert('Share options would appear here');
            break;
    }
}

/**
 * Simulate loading more posts when scrolling
 */
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.body.scrollHeight;
    
    // If we're near the bottom of the page
    if (pageHeight - scrollPosition < 300) {
        // This would typically trigger an API call to load more posts
        // For demonstration, we'll just log a message
        console.log('Would load more posts here');
    }
});

/**
 * Add smooth hover effects to all cards with sports theme
 */
const allCards = document.querySelectorAll('.card');
allCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease, border-top 0.3s ease';
        this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
        this.style.borderTop = '3px solid #e63946';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.1)';
        this.style.borderTop = '3px solid transparent';
    });
});

/**
 * Initialize sports-specific features
 */
function initializeSportsFeatures() {
    // Add live scores widget to right sidebar
    const rightSidebar = document.querySelector('.right-sidebar');
    if (rightSidebar) {
        const liveScoresCard = document.createElement('div');
        liveScoresCard.className = 'card';
        liveScoresCard.style.marginBottom = '20px';
        
        liveScoresCard.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <h3 style="font-size: 16px; margin: 0;">Live Scores</h3>
                <span style="font-size: 12px; color: #e63946;">LIVE</span>
            </div>
            <div style="margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #eee;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                    <div style="display: flex; align-items: center;">
                        <span style="font-weight: bold; margin-right: 10px;">LAL</span>
                        <img src="https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg" style="width: 30px; height: 30px;">
                    </div>
                    <span style="font-weight: bold; font-size: 18px;">108</span>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div style="display: flex; align-items: center;">
                        <span style="font-weight: bold; margin-right: 10px;">GSW</span>
                        <img src="https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg" style="width: 30px; height: 30px;">
                    </div>
                    <span style="font-weight: bold; font-size: 18px;">104</span>
                </div>
                <div style="text-align: center; margin-top: 10px; font-size: 12px; color: #666;">
                    <span>Q4 - 2:45</span>
                </div>
            </div>
            <div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                    <div style="display: flex; align-items: center;">
                        <span style="font-weight: bold; margin-right: 10px;">MIA</span>
                        <img src="https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg" style="width: 30px; height: 30px;">
                    </div>
                    <span style="font-weight: bold; font-size: 18px;">92</span>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div style="display: flex; align-items: center;">
                        <span style="font-weight: bold; margin-right: 10px;">BOS</span>
                        <img src="https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg" style="width: 30px; height: 30px;">
                    </div>
                    <span style="font-weight: bold; font-size: 18px;">89</span>
                </div>
                <div style="text-align: center; margin-top: 10px; font-size: 12px; color: #666;">
                    <span>Q3 - 5:12</span>
                </div>
            </div>
            <a href="#" class="show-more" style="display: block; text-align: center; margin-top: 15px; color: #666; font-size: 14px;">See all games <i class="fas fa-chevron-right"></i></a>
        `;
        
        // Insert after the news card
        const newsCard = rightSidebar.querySelector('.news-card');
        if (newsCard) {
            newsCard.parentNode.insertBefore(liveScoresCard, newsCard.nextSibling);
        } else {
            rightSidebar.prepend(liveScoresCard);
        }
    }
    
    // Add sports poll to feed
    const feedPosts = document.querySelector('.feed-posts');
    if (feedPosts) {
        const pollPost = document.createElement('div');
        pollPost.className = 'post card';
        
        pollPost.innerHTML = `
            <div class="post-header">
                <div class="post-user">
                    <div class="user-pic">
                        <img src="https://randomuser.me/api/portraits/men/88.jpg" alt="User Picture">
                    </div>
                    <div class="user-info">
                        <h3>ZTrike Sports</h3>
                        <p>Official ZTrike Sports Account</p>
                        <span class="post-time">1h • <i class="fas fa-globe-americas"></i></span>
                    </div>
                </div>
                <div class="post-actions">
                    <button class="more-btn"><i class="fas fa-ellipsis-h"></i></button>
                </div>
            </div>
            <div class="post-content">
                <p>Who will win the championship this year? Vote in our poll! 🏆</p>
                <div style="margin-top: 15px;">
                    <div style="margin-bottom: 10px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; border: 1px solid #ddd; border-radius: 5px; cursor: pointer; transition: all 0.3s ease;" class="poll-option">
                            <span>Lakers</span>
                            <span>42%</span>
                        </div>
                    </div>
                    <div style="margin-bottom: 10px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; border: 1px solid #ddd; border-radius: 5px; cursor: pointer; transition: all 0.3s ease;" class="poll-option">
                            <span>Celtics</span>
                            <span>28%</span>
                        </div>
                    </div>
                    <div style="margin-bottom: 10px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; border: 1px solid #ddd; border-radius: 5px; cursor: pointer; transition: all 0.3s ease;" class="poll-option">
                            <span>Warriors</span>
                            <span>18%</span>
                        </div>
                    </div>
                    <div>
                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; border: 1px solid #ddd; border-radius: 5px; cursor: pointer; transition: all 0.3s ease;" class="poll-option">
                            <span>Heat</span>
                            <span>12%</span>
                        </div>
                    </div>
                </div>
                <p style="margin-top: 15px; font-size: 12px; color: #666;">1,245 votes • 2 days left</p>
            </div>
            <div class="post-stats">
                <div class="reactions">
                    <span><i class="fas fa-thumbs-up"></i> 328</span>
                    <span><i class="fas fa-comment"></i> 42 comments</span>
                </div>
            </div>
            <div class="post-buttons">
                <button class="post-btn"><i class="far fa-thumbs-up"></i> Like</button>
                <button class="post-btn"><i class="far fa-comment"></i> Comment</button>
                <button class="post-btn"><i class="fas fa-share"></i> Share</button>
                <button class="post-btn"><i class="far fa-paper-plane"></i> Send</button>
            </div>
        `;
        
        // Add poll interaction
        setTimeout(() => {
            const pollOptions = pollPost.querySelectorAll('.poll-option');
            pollOptions.forEach(option => {
                option.addEventListener('mouseenter', function() {
                    this.style.backgroundColor = 'rgba(230, 57, 70, 0.1)';
                    this.style.borderColor = '#e63946';
                });
                
                option.addEventListener('mouseleave', function() {
                    this.style.backgroundColor = 'transparent';
                    this.style.borderColor = '#ddd';
                });
                
                option.addEventListener('click', function() {
                    pollOptions.forEach(opt => {
                        opt.style.backgroundColor = 'transparent';
                        opt.style.borderColor = '#ddd';
                    });
                    
                    this.style.backgroundColor = 'rgba(230, 57, 70, 0.2)';
                    this.style.borderColor = '#e63946';
                    this.style.fontWeight = 'bold';
                    
                    // Show a thank you message
                    const thankYou = document.createElement('div');
                    thankYou.style.padding = '10px';
                    thankYou.style.backgroundColor = '#f8f9fa';
                    thankYou.style.borderRadius = '5px';
                    thankYou.style.marginTop = '10px';
                    thankYou.style.textAlign = 'center';
                    thankYou.style.animation = 'fadeIn 0.5s ease';
                    thankYou.innerHTML = 'Thanks for voting! Share this poll with your friends.';
                    
                    const pollContent = this.closest('.post-content');
                    if (!pollContent.querySelector('.thank-you-message')) {
                        thankYou.className = 'thank-you-message';
                        pollContent.appendChild(thankYou);
                    }
                });
            });
        }, 500);
        
        // Insert at the beginning of the feed
        const firstPost = feedPosts.querySelector('.post');
        if (firstPost) {
            feedPosts.insertBefore(pollPost, firstPost);
        } else {
            feedPosts.appendChild(pollPost);
        }
    }
}
        // function copyToClipboard(text, button) {
        //     navigator.clipboard.writeText(text).then(() => {
        //         // Show success feedback
        //         const originalText = button.innerHTML;
        //         button.innerHTML = '✅ Copied!';
        //         button.classList.add('copied');
                
        //         // Reset after 2 seconds
        //         setTimeout(() => {
        //             button.innerHTML = originalText;
        //             button.classList.remove('copied');
        //         }, 2000);
                
        //         // Show tooltip
        //         showTooltip(button, 'Copied!');
        //     }).catch(() => {
        //         // Fallback for older browsers
        //         const textArea = document.createElement('textarea');
        //         textArea.value = text;
        //         document.body.appendChild(textArea);
        //         textArea.select();
        //         document.execCommand('copy');
        //         document.body.removeChild(textArea);
                
        //         // Show success feedback
        //         const originalText = button.innerHTML;
        //         button.innerHTML = '✅ Copied!';
        //         button.classList.add('copied');
                
        //         setTimeout(() => {
        //             button.innerHTML = originalText;
        //             button.classList.remove('copied');
        //         }, 2000);
                
        //         showTooltip(button, 'Copied to clipboard!');
        //     });
        // }

        // function showTooltip(element, message) {
        //     const tooltip = document.createElement('div');
        //     tooltip.className = 'tooltip show';
        //     tooltip.textContent = message;
        //     element.style.position = 'relative';
        //     element.appendChild(tooltip);
            
        //     setTimeout(() => {
        //         tooltip.classList.remove('show');
        //         setTimeout(() => {
        //             if (tooltip.parentNode) {
        //                 tooltip.parentNode.removeChild(tooltip);
        //             }
        //         }, 300);
        //     }, 1500);
        // }




        // // Add scroll animations
        // const observerOptions = {
        //     threshold: 0.1,
        //     rootMargin: '0px 0px -50px 0px'
        // };

        // const observer = new IntersectionObserver((entries) => {
        //     entries.forEach(entry => {
        //         if (entry.isIntersecting) {
        //             entry.target.style.animationDelay = Math.random() * 0.3 + 's';
        //             entry.target.classList.add('fade-in');
        //         }
        //     });
        // }, observerOptions);

        // // Observe all glass cards after loading
        // setTimeout(() => {
        //     document.querySelectorAll('.glass-card').forEach(card => {
        //         observer.observe(card);
        //     });
        // }, 4000);

        // // Add smooth scrolling
        // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        //     anchor.addEventListener('click', function (e) {
        //         e.preventDefault();
        //         const target = document.querySelector(this.getAttribute('href'));
        //         if (target) {
        //             target.scrollIntoView({
        //                 behavior: 'smooth',
        //                 block: 'start'
        //             });
        //         }
        //     });
        // });

        
  // Update date and time
        function updateDateTime() {
            const now = new Date();
            const options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                timeZone: 'Asia/Kolkata'
            };
            document.getElementById('datetime').textContent = 
                now.toLocaleDateString('en-IN', options) + ' IST';
        }
        
        setInterval(updateDateTime, 1000);
        updateDateTime();

        // Copy to clipboard function
        function copyToClipboard(text, button) {
            navigator.clipboard.writeText(text).then(() => {
                const originalText = button.textContent;
                button.textContent = '✓ Copied!';
                button.classList.add('copied');
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.classList.remove('copied');
                }, 2000);
            }).catch(err => {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = text;
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                
                try {
                    document.execCommand('copy');
                    button.textContent = '✓ Copied!';
                    button.classList.add('copied');
                    
                    setTimeout(() => {
                        button.textContent = 'Copy';
                        button.classList.remove('copied');
                    }, 2000);
                } catch (err) {
                    console.error('Fallback: Could not copy text: ', err);
                }
                
                document.body.removeChild(textArea);
            });
        }

        // Create fireworks effect
        function createFirework() {
            const fireworksContainer = document.getElementById('fireworks');
            const firework = document.createElement('div');
            firework.className = 'firework';
            
            // Random position
            firework.style.left = Math.random() * 100 + 'vw';
            firework.style.top = Math.random() * 100 + 'vh';
            
            // Random colors for fireworks
            const colors = ['#ff9933', '#138808', '#000080', '#ffd700', '#ff6b6b', '#4ecdc4'];
            firework.style.background = colors[Math.random() * colors.length | 0];
            
            fireworksContainer.appendChild(firework);
            
            // Remove after animation
            setTimeout(() => {
                if (firework.parentNode) {
                    firework.parentNode.removeChild(firework);
                }
            }, 2000);
        }

        // Create fireworks periodically
        setInterval(createFirework, 3000);

        // Create initial burst of fireworks
        setTimeout(() => {
            for (let i = 0; i < 5; i++) {
                setTimeout(createFirework, i * 200);
            }
        }, 4000);

        // Add scroll animations
        function handleScrollAnimations() {
            const cards = document.querySelectorAll('.glass-card');
            
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                
                if (isVisible && !card.classList.contains('fade-in')) {
                    card.classList.add('fade-in');
                }
            });
        }

        window.addEventListener('scroll', handleScrollAnimations);
        window.addEventListener('load', handleScrollAnimations);

        // Special Independence Day greeting
        setTimeout(() => {
            console.log('🇮🇳 Happy Independence Day! Jai Hind! 🇮🇳');
        }, 5000);

        // Add special effects on hover for social buttons
        document.querySelectorAll('.social-btn').forEach(btn => {
            btn.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.05)';
            });
            
            btn.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Patriotic background color change on scroll
        let scrollTimer = null;
        window.addEventListener('scroll', () => {
            if (scrollTimer !== null) {
                clearTimeout(scrollTimer);
            }
            
            scrollTimer = setTimeout(() => {
                const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
                const hue = scrollPercent * 360;
                document.body.style.filter = `hue-rotate(${hue * 0.1}deg)`;
            }, 10);
        });

        // Add celebration sound effect (visual feedback)
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('copy-btn') || e.target.classList.contains('social-btn')) {
                // Create a small celebration effect
                const celebration = document.createElement('div');
                celebration.innerHTML = '🎉';
                celebration.style.position = 'fixed';
                celebration.style.left = e.clientX + 'px';
                celebration.style.top = e.clientY + 'px';
                celebration.style.fontSize = '24px';
                celebration.style.pointerEvents = 'none';
                celebration.style.zIndex = '10000';
                celebration.style.animation = 'celebrationPop 1s ease-out forwards';
                
                document.body.appendChild(celebration);
                
                setTimeout(() => {
                    document.body.removeChild(celebration);
                }, 1000);
            }
        });

        // Add CSS for celebration animation
        const celebrationStyle = document.createElement('style');
        celebrationStyle.textContent = `
            @keyframes celebrationPop {
                0% {
                    transform: scale(0) rotate(0deg);
                    opacity: 1;
                }
                50% {
                    transform: scale(1.2) rotate(180deg);
                    opacity: 1;
                }
                100% {
                    transform: scale(0) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(celebrationStyle);

        // Announcement Banner Close Functionality
        const closeBtn = document.getElementById('close-banner');
        const announcementBanner = document.getElementById('announcement-banner');

        if (closeBtn && announcementBanner) {
            closeBtn.addEventListener('click', function() {
                announcementBanner.style.display = 'none';
            });
        }

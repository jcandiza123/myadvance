// Token Verification System for PRO VERSION
(function() {
    const WORDPRESS_URL = 'https://gospelpianochord.com';
    
    // Elements
    const overlay = document.getElementById('tokenVerificationOverlay');
    const input = document.getElementById('tokenVerificationInput');
    const button = document.getElementById('tokenVerifyButton');
    const status = document.getElementById('tokenVerificationStatus');
    
    // Check if token is already verified
    function isTokenVerified() {
        return localStorage.getItem('pro_app_token_verified') === 'true';
    }
    
    // Show/hide overlay
    function showOverlay() {
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
        setTimeout(() => input.focus(), 300);
    }
    
    function hideOverlay() {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    }
    
    // Show status message
    function showStatus(message, type = 'info') {
        const colors = {
            error: '#ef4444',
            success: '#10b981',
            info: '#3b82f6'
        };
        status.style.color = colors[type];
        status.textContent = message;
    }
    
    // Generate unique device fingerprint
    function generateDeviceFingerprint() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        ctx.textBaseline = 'top';
        ctx.font = '14px Arial';
        ctx.fillText('Pro device fingerprint', 2, 2);
        
        const fingerprint = [
            navigator.userAgent,
            navigator.language,
            screen.width + 'x' + screen.height,
            new Date().getTimezoneOffset(),
            canvas.toDataURL(),
            navigator.hardwareConcurrency || 'unknown',
            navigator.platform,
            'pro_version'
        ].join('|');
        
        // Simple hash function
        let hash = 0;
        for (let i = 0; i < fingerprint.length; i++) {
            const char = fingerprint.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return 'PRO_' + Math.abs(hash).toString(36);
    }

    // Verify token with WordPress server
    async function verifyToken() {
        const token = input.value.trim();
        
        if (!token) {
            showStatus('Please enter a token', 'error');
            input.focus();
            return;
        }
        
        // Show loading
        button.textContent = 'Verifying...';
        button.disabled = true;
        showStatus('Verifying pro token...', 'info');
        
        try {
            const deviceId = generateDeviceFingerprint();
            
            const response = await fetch(WORDPRESS_URL + '/verify-token.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    token: token,
                    device_id: deviceId,
                    app_type: 'pro'
                })
            });
            
            const data = await response.json();
            
            if (response.ok && data.success) {
                // Success - save verification and hide overlay
                localStorage.setItem('pro_app_token_verified', 'true');
                localStorage.setItem('pro_app_token_used', token);
                localStorage.setItem('pro_app_device_id', deviceId);
                
                showStatus('✅ Pro access verified! Loading app...', 'success');
                
                setTimeout(() => {
                    hideOverlay();
                }, 1500);
                
            } else if (data.error === 'token_used') {
                showStatus('❌ Token already used on another device', 'error');
                input.select();
            } else {
                showStatus(data.message || 'Invalid or expired token', 'error');
                input.select();
            }
            
        } catch (error) {
            showStatus('Connection error. Please try again.', 'error');
            console.error('Token verification error:', error);
        }
        
        // Reset button
        button.textContent = 'Verify Pro Token';
        button.disabled = false;
    }
    
    // Event listeners
    button.addEventListener('click', verifyToken);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') verifyToken();
    });
    
    // Focus styling
    input.addEventListener('focus', () => {
        input.style.borderColor = '#6366f1';
        input.style.transform = 'translateY(-2px)';
    });
    input.addEventListener('blur', () => {
        input.style.borderColor = '#e5e7eb';
        input.style.transform = 'translateY(0)';
    });
    
    // Button hover effect
    button.addEventListener('mouseenter', () => {
        if (!button.disabled) button.style.transform = 'translateY(-2px)';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
    });
    
    // Initialize - show overlay if not verified
    if (!isTokenVerified()) {
        showOverlay();
    }
    
    // Add reset function to window (for testing)
    window.resetAppAccess = function() {
        localStorage.removeItem('pro_app_token_verified');
        localStorage.removeItem('pro_app_token_used');
        localStorage.removeItem('pro_app_device_id');
        input.value = '';
        showStatus('Access reset. Enter token again.', 'info');
        showOverlay();
    };
    
})();

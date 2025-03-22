export const template = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Metigan</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        body {
            font-family: 'Inter', Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
            color: #333;
            line-height: 1.6;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #0a0a14;
            color: #ffffff;
            background-image: 
                linear-gradient(rgba(128, 0, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(128, 0, 255, 0.1) 1px, transparent 1px);
            background-size: 20px 20px;
        }
        
        .email-header {
            padding: 20px;
            text-align: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .logo {
            max-width: 150px;
        }
        
        .email-body {
            padding: 40px 30px;
            text-align: center;
        }
        
        .welcome-message {
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 20px;
            line-height: 1.2;
        }
        
        .welcome-subtitle {
            font-size: 18px;
            color: #b388ff;
            margin-bottom: 30px;
            font-weight: 500;
        }
        
        .welcome-text {
            font-size: 16px;
            margin-bottom: 30px;
            color: rgba(255, 255, 255, 0.8);
        }
        
        .cta-button {
            display: inline-block;
            background-color: #b026ff;
            color: white;
            padding: 12px 30px;
            text-decoration: none;
            border-radius: 4px;
            font-weight: 600;
            margin: 20px 0 30px;
            transition: background-color 0.3s;
        }
        
        .cta-button:hover {
            background-color: #9900e6;
        }
        
        .feature-section {
            display: table;
            width: 100%;
            margin: 30px 0;
            table-layout: fixed;
        }
        
        .feature {
            display: table-cell;
            width: 33.33%;
            padding: 15px;
            text-align: center;
            vertical-align: top;
        }
        
        .feature-icon {
            width: 50px;
            height: 50px;
            margin: 0 auto 15px;
            background-color: rgba(176, 38, 255, 0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .feature-title {
            font-weight: 600;
            margin-bottom: 8px;
            color: #ffffff;
        }
        
        .feature-text {
            font-size: 14px;
            color: rgba(255, 255, 255, 0.7);
        }
        
        .email-footer {
            padding: 20px;
            text-align: center;
            font-size: 12px;
            color: rgba(255, 255, 255, 0.5);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .social-links {
            margin: 15px 0;
        }
        
        .social-link {
            display: inline-block;
            margin: 0 8px;
        }
        
        .footer-links {
            margin: 15px 0;
        }
        
        .footer-link {
            color: rgba(255, 255, 255, 0.7);
            text-decoration: none;
            margin: 0 10px;
        }
        
        .footer-link:hover {
            color: #b026ff;
        }
        
        @media only screen and (max-width: 600px) {
            .welcome-message {
                font-size: 24px;
            }
            
            .feature {
                display: block;
                width: 100%;
                margin-bottom: 20px;
            }
            
            .feature-section {
                display: block;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-header">
            <img src="https://res.cloudinary.com/dwsk5thfo/image/upload/v1742493241/mtavftwaiezanqr56tnf.png" alt="Metigan Logo" class="logo" width="120">
        </div>
        
        <div class="email-body">
            <div class="welcome-message">Welcome to Metigan!</div>
            <div class="welcome-subtitle">Mass Email Delivery, Simplified for Everyone</div>
            
            <p class="welcome-text">
                
                Thanks for subscribing to our newsletter! Each month, we'll deliver the latest email marketing trends, platform updates, and expert tips to help you maximize your campaigns.
            </p>
            
            <a href="https://home.metigan.com" class="cta-button">Get Started Now</a>
            
            <p class="welcome-text">
                With Metigan, you can send thousands of emails with ease. Schedule, track, and personalize 
                your campaigns with our powerful platform.
            </p>
            
            <div class="feature-section">
                <div class="feature">
                    <div class="feature-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 8V12L15 15" stroke="#b026ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <circle cx="12" cy="12" r="9" stroke="#b026ff" stroke-width="2"/>
                        </svg>
                    </div>
                    <div class="feature-title">Schedule</div>
                    <div class="feature-text">Plan and schedule your email campaigns in advance</div>
                </div>
                
                <div class="feature">
                    <div class="feature-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 9L12 15L21 9M5 20H19C20.1046 20 21 19.1046 21 18V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V18C3 19.1046 3.89543 20 5 20Z" stroke="#b026ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="feature-title">Send</div>
                    <div class="feature-text">Deliver thousands of emails with high deliverability</div>
                </div>
                
                <div class="feature">
                    <div class="feature-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 8H8V16H16V8Z" stroke="#b026ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3 8L8 3M16 3L21 8M21 16L16 21M8 21L3 16" stroke="#b026ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="feature-title">Track</div>
                    <div class="feature-text">Monitor opens, clicks, and engagement in real-time</div>
                </div>
            </div>
            
            <p class="welcome-text">
                Join our community on WhatsApp for exclusive updates and support!
            </p>
            
            <a href="https://whatsapp.com/channel/0029VbAHdsMEKyZO1kO7VO1U" class="cta-button">Join Now </a>
        </div>
        
        <div class="email-footer">
           
            <p>
                &copy; 2025 Metigan. All rights reserved.<br>
                
            </p>
        </div>
    </div>
</body>
</html>`
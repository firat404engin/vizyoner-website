// Main JavaScript file for Vizyoner Bakış Eğitim ve Danışmanlık website

document.addEventListener('alpine:init', () => {
    // Define Alpine.js data and functions
    Alpine.data('site', () => ({
        language: 'tr',
        isLoading: true,
        translations: {
            "tr": {
                "title": "Vizyoner Bakış Eğitim ve Danışmanlık",
                "loading": "Vizyoner Bakış Kalitesi Yükleniyor...",
                "home": "Ana Sayfa",
                "about": "Hakkımızda",
                "services": "Hizmetlerimiz",
                "contact": "İletişim",
                "languageToggle": "EN",
                "heroTitle": "Vizyoner bakış açısıyla gelişin, dönüşün ve emin adımlarla büyüyün!",
                "heroSubtitle": "25 yıllık deneyimimizle stratejik iş ortağınız olarak yanınızdayız.",
                "heroButton": "İletişime Geç",
                "aboutTitle": "Hakkımızda",
                "aboutHeading": "Vizyoner Bakış Eğitim ve Danışmanlık",
                "aboutText": "Uzun yıllara dayanan deneyim ve uzmanlıkla, işletmenizin başarısı için stratejik çözümler sunuyoruz. Müşteri odaklı yaklaşımımız ve yenilikçi bakış açımızla, işletmenizin potansiyelini maksimize etmenize yardımcı oluyoruz.",
                "missionTitle": "Misyonum",
                "missionText": "İşletmelerin sürdürülebilir büyümesini sağlamak için kaliteli ve yenilikçi danışmanlık hizmetleri sunmak.",
                "visionTitle": "Vizyonumuz",
                "visionText": "İş ortaklarımızın gelişim ve dönüşümleri için stratejik iş ortağı olarak destek veririz.",
                "purposeTitle": "Amacımız",
                "purposeText": "Stratejik yönetim, kurumsal gelişim ve insan kaynakları alanlarında yenilikçi çözümler sunarak kurum ve kuruluşların geleceğe güçlü adımlarla ilerlemesine rehberlik ederiz.",
                "workModelTitle": "Çalışma Modelimiz",
                "workModelText": "İhtiyaçlarınızı ve beklentilerinizi analitik bakış açısıyla analiz eder, ekosisteminizi ve varmak istediğiniz hedefi ve stratejik amaçları birlikte tespit eder ve yolculuğa başlarız.",
                "valuePropositionTitle": "Değer Önermemiz",
                "valueProposition1": "Kurumsal yapınızı stratejik hedeflerle uyumlu hale getirerek verimlilik ve etkinlik artışı sağlıyoruz.",
                "valueProposition2": "İnsan kaynakları yapınızı stratejik iş ortağına dönüştürerek, performans ve bağlılığı birlikte artırıyoruz.",
                "valueProposition3": "Başarıyı tesadüfe bırakmadan, hedeflerle hizalanan performans sistemleri kuruyoruz.",
                "servicesTitle": "Hizmetlerimiz",
                "service1Title": "Strateji Yönetimi Danışmanlığı",
                "service1Text": "Stratejik Yön Belirleme, Ekosistem Analizi, Hedef Belirleme, Hedeflerin Yayılımı",
                "service2Title": "Kurumsal Performans Yönetimi Danışmanlığı",
                "service2Text": "OKR (Objective Key Results), Balanced Scorecard (Dengelenmiş Kurum Karnesi)",
                "service3Title": "İnsan Kaynakları Danışmanlığı",
                "service3Text": "Yönetici Seçme ve Yerleştirme, 360 Derece Performans Yönetimi, Liderlik Gelişim Programları, yetkinlik bazlı İK modeli geliştirme, Norm kadro analizi ve iş gücü planlaması, iş analizi ve görev tanımlarının yeniden yapılandırılması, kariyer yönetimi ve yedekleme sistemlerinin kurulması",
                "service4Title": "Toplam Kalite Yönetimi Danışmanlığı",
                "service4Text": "EFQM Özdeğerlendirme ve EFQM Rehberliği",
                "service5Title": "Süreç Yönetimi Danışmanlığı",
                "service5Text": "Uygun süreç modelinin tasarımı, süreçlerin sahiplendirilmesi, süreçlerin yönetimi, süreç KPI larının belirlenmesi, süreçlerin iyileştirilmesi ve süreç optimizasyonu",
                "contactTitle": "İletişim",
                "contactInfo": "İletişim Bilgileri",
                "address": "Adres",
                "email": "E-posta",
                "phone": "Telefon",
                "sendMessage": "Mesaj Gönder",
                "name": "İsim",
                "namePlaceholder": "Adınız Soyadınız",
                "emailPlaceholder": "E-posta Adresiniz",
                "messagePlaceholder": "Mesajınız",
                "message": "Mesaj",
                "sendButton": "Gönder",
                "nameRequired": "İsim gereklidir",
                "emailRequired": "E-posta gereklidir",
                "emailInvalid": "Geçerli bir e-posta adresi girin",
                "messageRequired": "Mesaj gereklidir",
                "successMessage": "Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.",
                "copyright": "© 2025 Vizyoner Bakış Eğitim ve Danışmanlık. Tüm hakları saklıdır.",
                "designer": {
                  "name": "Fırat Engin",
                  "website": "https://firatengin-henna.vercel.app/"
              }
            },
            "en": {
                "title": "Vizyoner Bakış Eğitim ve Danışmanlık",
                "loading": "Loading Visionary Quality...",
                "home": "Home",
                "about": "About Us",
                "services": "Our Services",
                "contact": "Contact",
                "languageToggle": "TR",
                "heroTitle": "Develop, transform, and grow with a visionary perspective!",
                "heroSubtitle": "With 25 years of experience, we are by your side as your strategic business partner.",
                "heroButton": "Get in Touch",
                "aboutTitle": "About Us",
                "aboutHeading": "Vizyoner Bakış Eğitim ve Danışmanlık",
                "aboutText": "With years of experience and expertise, we offer strategic solutions for your business success. With our client-focused approach and innovative perspective, we help you maximize the potential of your business.",
                "missionTitle": "My Mission",
                "missionText": "To provide quality and innovative consulting services to ensure sustainable growth of businesses.",
                "visionTitle": "Our Vision",
                "visionText": "We provide support as a strategic business partner for the development and transformation of our business partners.",
                "purposeTitle": "Our Purpose",
                "purposeText": "We guide institutions and organizations to move forward with strong steps into the future by offering innovative solutions in strategic management, organizational development, and human resources.",
                "workModelTitle": "Our Methodology",
                "workModelText": "We analyze your needs and expectations with an analytical perspective, identify your ecosystem, your target, and strategic goals together, and start the journey.",
                "valuePropositionTitle": "Our Value Proposition",
                "valueProposition1": "We increase efficiency and effectiveness by aligning your corporate structure with strategic goals.",
                "valueProposition2": "We transform your human resources structure into a strategic business partner, improving performance and commitment together.",
                "valueProposition3": "We establish performance systems aligned with goals, not leaving success to chance.",
                "servicesTitle": "Our Services",
                "service1Title": "Strategy Management Consulting",
                "service1Text": "Strategic Direction Setting, Ecosystem Analysis, Target Setting, Target Deployment",
                "service2Title": "Corporate Performance Management Consulting",
                "service2Text": "OKR (Objective Key Results), Balanced Scorecard",
                "service3Title": "Human Resources Consulting",
                "service3Text": "Executive Recruitment and Placement, 360 Degree Performance Management, Leadership Development Programs, competency-based HR model development, Norm staff analysis and workforce planning, job analysis and restructuring of job descriptions, career management and backup systems establishment",
                "service4Title": "Total Quality Management Consulting",
                "service4Text": "EFQM Self-Assessment and EFQM Guidance",
                "service5Title": "Process Management Consulting",
                "service5Text": "Design of the appropriate process model, ownership of processes, management of processes, determination of process KPIs, improvement of processes and process optimization",
                "contactTitle": "Contact",
                "contactInfo": "Contact Information",
                "address": "Address",
                "email": "Email",
                "phone": "Phone",
                "sendMessage": "Send a Message",
                "name": "Name",
                "namePlaceholder": "Your Name",
                "emailPlaceholder": "Your Email",
                "messagePlaceholder": "Your Message",
                "message": "Message",
                "sendButton": "Send",
                "nameRequired": "Name is required",
                "emailRequired": "Email is required",
                "emailInvalid": "Enter a valid email address",
                "messageRequired": "Message is required",
                "successMessage": "Your message has been sent successfully. We will get back to you as soon as possible.",
                "copyright": "© 2025 Vizyoner Bakış Eğitim ve Danışmanlık. All rights reserved.",
                "designer": {
                  "name": "Fırat Engin",
                  "website": "https://firatengin-henna.vercel.app/"
              },
            }
        },
        scrollActive: false,
        
        init() {
            // Create loading screen particles
            this.createParticles();
            
            // Try to load translations from JSON
            fetch('js/translations.json')
                .then(response => response.json())
                .then(data => {
                    // Merge with default translations
                    this.translations = data;
                    console.log("Translations loaded successfully");
                })
                .catch(error => {
                    console.error("Error loading translations:", error);
                    // Continue with default translations if loading fails
                });
            
            // Check for saved language preference
            const savedLang = localStorage.getItem('language');
            if (savedLang) {
                this.language = savedLang;
            }
            
            // Check for saved dark mode preference
            const savedDarkMode = localStorage.getItem('darkMode');
            if (savedDarkMode === 'true') {
                this.darkMode = true;
                document.documentElement.classList.add('dark');
            }
            
            // Create a simulated loading delay
            setTimeout(() => {
                this.isLoading = false;
                this.animateOnScroll();
                
                // Set up scroll event listener for section detection
                window.addEventListener('scroll', () => {
                    this.checkActiveSection();
                    this.animateOnScroll();
                });
                
                // Initial check for active section
                this.checkActiveSection();
                
                // Make sidebar visible when loading is complete
                setTimeout(() => {
                    document.querySelector('.sidebar-nav').classList.add('visible');
                }, 300);
            }, 3000);
            
            // Handle scroll events for animation effects
            window.addEventListener('scroll', () => {
                this.scrollActive = window.scrollY > 100;
                this.animateOnScroll();
            });
            
            // Initialize animations
            setTimeout(() => {
                this.animateOnScroll();
            }, 3000);
        },
        
        createParticles() {
            const particlesContainer = document.querySelector('.loading-particles');
            if (!particlesContainer) return;
            
            const particleCount = 30;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                // Random position
                const randomX = Math.floor(Math.random() * 100);
                const randomY = Math.floor(Math.random() * 100);
                particle.style.left = `${randomX}%`;
                particle.style.top = `${randomY}%`;
                
                // Random size
                const size = Math.floor(Math.random() * 3) + 2; // 2-5px
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                // Random opacity
                const opacity = (Math.random() * 0.5) + 0.1; // 0.1-0.6
                particle.style.backgroundColor = `rgba(148, 163, 184, ${opacity})`;
                
                // Random animation delay and duration
                const delay = Math.random() * 5;
                const duration = Math.random() * 10 + 10; // 10-20s
                particle.style.animationDelay = `${delay}s`;
                particle.style.animationDuration = `${duration}s`;
                
                particlesContainer.appendChild(particle);
            }
        },
        
        checkActiveSection() {
            const sections = ['home', 'about', 'services', 'other-services', 'contact'];
            let currentSection = 'home';
            
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const windowHeight = window.innerHeight;
                    
                    // If the section is in view
                    if (rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.2) {
                        currentSection = section;
                        break;
                    }
                }
            }
            
            if (this.activeSection !== currentSection) {
                this.activeSection = currentSection;
            }
        },
        
        changeLanguage(lang) {
            this.language = lang;
            localStorage.setItem('language', lang);
        },
        
        toggleDarkMode() {
            this.darkMode = !this.darkMode;
            localStorage.setItem('darkMode', this.darkMode);
            
            if (this.darkMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        },
        
        t(key) {
            // Get translations for the current language
            const langTranslations = this.translations[this.language] || {};
            
            // Return the translation or the key if not found
            return langTranslations[key] || key;
        },
        
        animateOnScroll() {
            const elements = document.querySelectorAll('.animate-on-scroll');
            const windowHeight = window.innerHeight;
            
            elements.forEach(element => {
                const rect = element.getBoundingClientRect();
                
                // Check if element is visible
                if (rect.top <= windowHeight * 0.8) {
                    element.classList.add('animate-visible');
                }
            });
        },
        
        validateForm() {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            let isValid = true;
            
            // Reset error messages
            document.querySelectorAll('.error-message').forEach(el => {
                el.textContent = '';
            });
            
            // Validate required fields
            if (!name) {
                document.getElementById('name-error').textContent = this.t('requiredField');
                isValid = false;
            }
            
            if (!email) {
                document.getElementById('email-error').textContent = this.t('requiredField');
                isValid = false;
            } else if (!this.isValidEmail(email)) {
                document.getElementById('email-error').textContent = this.t('invalidEmail');
                isValid = false;
            }
            
            if (!subject) {
                document.getElementById('subject-error').textContent = this.t('requiredField');
                isValid = false;
            }
            
            if (!message) {
                document.getElementById('message-error').textContent = this.t('requiredField');
                isValid = false;
            }
            
            // If form is valid, show success message
            if (isValid) {
                // In a real application, you would send the form data to a server here
                document.getElementById('success-message').textContent = this.t('messageSent');
                document.getElementById('contact-form').reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    document.getElementById('success-message').textContent = '';
                }, 5000);
            }
            
            return isValid;
        },
        
        isValidEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }
    }));
});

// Add smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', () => {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for fixed header
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.querySelector('[x-data="{ open: true }"]');
                if (mobileMenu) {
                    Alpine.set(mobileMenu, 'open', false);
                }
            }
        });
    });
    
    // Initialize animation on scroll
    const animateElements = document.querySelectorAll('.service-card, .about-content, .contact-info');
    animateElements.forEach(element => {
        element.classList.add('animate-on-scroll');
    });
}); 
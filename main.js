// ========== 导航栏滚动效果 ==========
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ========== 移动端菜单切换 ==========
mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// 点击菜单项后关闭移动端菜单
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// ========== 滚动动画触发 ==========
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// 观察所有需要滚动动画的元素
const animateElements = document.querySelectorAll('.scroll-animate');
animateElements.forEach(el => observer.observe(el));

// ========== 粒子效果 ==========
const particlesContainer = document.getElementById('particles-container');
const particleCount = 50;

function createParticle() {
  const particle = document.createElement('div');
  particle.className = 'particle';
  particle.style.left = Math.random() * 100 + '%';
  particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
  particle.style.animationDelay = Math.random() * 5 + 's';
  particlesContainer.appendChild(particle);
  
  // 动画结束后移除并创建新粒子
  particle.addEventListener('animationend', () => {
    particle.remove();
    createParticle();
  });
}

// 初始化粒子
for (let i = 0; i < particleCount; i++) {
  setTimeout(() => createParticle(), i * 100);
}

// ========== 回到顶部按钮 ==========
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ========== 表单提交处理 ==========
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // 获取表单数据
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);
  
  console.log('表单数据:', data);
  
  // 显示成功提示
  showToast('消息已发送！我们会尽快与您联系。');
  
  // 重置表单
  contactForm.reset();
});

// ========== 提示消息函数 ==========
function showToast(message) {
  // 创建提示元素
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <i class="fas fa-check-circle mr-2"></i>
    ${message}
  `;
  document.body.appendChild(toast);
  
  // 显示动画
  setTimeout(() => {
    toast.classList.add('show');
  }, 100);
  
  // 3秒后隐藏并移除
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 3000);
}

// ========== 平滑滚动到锚点 ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.offsetTop - 80; // 减去导航栏高度
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ========== 数字计数动画 ==========
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

// 当统计数据进入视口时触发计数动画
const statCards = document.querySelectorAll('.stat-card');
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target.querySelector('.counter');
      if (counter && !counter.classList.contains('counted')) {
        const target = parseInt(counter.getAttribute('data-target'));
        animateCounter(counter, target);
        counter.classList.add('counted');
      }
    }
  });
}, { threshold: 0.5 });

statCards.forEach(card => statsObserver.observe(card));

// ========== 鼠标跟随效果（可选） ==========
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// ========== 键盘导航支持 ==========
document.addEventListener('keydown', (e) => {
  // ESC 键关闭移动端菜单
  if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden');
  }
  
  // 空格键或回车键触发回到顶部
  if ((e.key === ' ' || e.key === 'Enter') && document.activeElement === backToTopBtn) {
    e.preventDefault();
    backToTopBtn.click();
  }
});

// ========== 性能优化：防抖函数 ==========
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ========== 性能优化：节流函数 ==========
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// ========== 懒加载图片 ==========
const lazyImages = document.querySelectorAll('img[loading="lazy"]');
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        imageObserver.unobserve(img);
      }
    });
  });
  
  lazyImages.forEach(img => imageObserver.observe(img));
}

// ========== 页面加载完成 ==========
window.addEventListener('load', () => {
  console.log('RainBox 官网加载完成！');
  console.log('科技养虾，用心养人 🦐💙');
  
  // 移除加载动画（如果有）
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.style.opacity = '0';
    setTimeout(() => loader.remove(), 300);
  }
});

// ========== 错误处理 ==========
window.addEventListener('error', (e) => {
  console.error('页面错误:', e.error);
});

// ========== 离线检测 ==========
window.addEventListener('online', () => {
  showToast('网络连接已恢复');
});

window.addEventListener('offline', () => {
  showToast('网络连接已断开');
});

// ========== 复制文本功能 ==========
function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      showToast('已复制到剪贴板');
    }).catch(err => {
      console.error('复制失败:', err);
    });
  } else {
    // 降级方案
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      showToast('已复制到剪贴板');
    } catch (err) {
      console.error('复制失败:', err);
    }
    document.body.removeChild(textarea);
  }
}

// ========== 导出函数供全局使用 ==========
window.RainBox = {
  showToast,
  copyToClipboard,
  debounce,
  throttle
};

// ========== 开发模式日志 ==========
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
  console.log('%c RainBox 数字科技公司 ', 'background: linear-gradient(to right, #2196F3, #FF9800); color: white; font-size: 20px; padding: 10px;');
  console.log('%c 科技养虾，用心养人 🦐💙 ', 'color: #2196F3; font-size: 16px;');
  console.log('%c 成立于 2026 年 3 月 22 日 ', 'color: #666; font-size: 12px;');
  console.log('%c 12 个 AI Agent | 6 个核心部门 ', 'color: #666; font-size: 12px;');
}

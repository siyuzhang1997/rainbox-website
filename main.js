// ========== 数据配置 ==========

// 核心业务数据
const servicesData = [
  {
    icon: 'fa-robot',
    title: 'AI Agent研发',
    desc: '自主研发12个行业领先AI Agent，覆盖客服、营销、分析、运维等核心场景，实现业务流程智能自动化。',
    image: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/15292585-532c-4c34-b055-351928d8aa61/image_1774232701_1_3.jpg',
    color: 'tech-blue',
    tags: ['NLP', '多模态', '自主决策']
  },
  {
    icon: 'fa-arrows-spin',
    title: '数字化转型',
    desc: '为传统企业提供全链路数字化转型方案，从战略规划到技术落地，一站式助力企业拥抱数字时代。',
    image: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/f792a460-5027-43e3-b832-e3610f9d0459/image_1774232705_1_1.jpg',
    color: 'vibrant-orange',
    tags: ['流程再造', '数据中台', '云原生']
  },
  {
    icon: 'fa-building',
    title: '智能办公',
    desc: '打造新一代智能办公平台，融合AI助手、智能会议、协同文档等功能，让办公效率提升300%。',
    image: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/b1b12fdf-bf78-4737-a12c-64b77feb9738/image_1774232712_1_1.png',
    color: 'tech-blue',
    tags: ['智能协同', 'AI助手', '效率提升']
  },
  {
    icon: 'fa-microchip',
    title: '企业AI应用',
    desc: '为企业量身定制AI解决方案，涵盖智能客服、数据分析、预测决策等，释放AI在企业中的无限潜能。',
    image: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/ca5e205e-5ff6-43b6-9252-f2e178320642/image_1774232721_2_3.jpg',
    color: 'vibrant-orange',
    tags: ['定制开发', '智能决策', '数据驱动']
  }
];

// AI Agent数据
const agentsData = [
  { name: 'ChatBot Pro', desc: '智能客服Agent', icon: 'fa-comments', color: '#2196F3' },
  { name: 'DataMiner', desc: '数据分析Agent', icon: 'fa-chart-bar', color: '#FF9800' },
  { name: 'CodePilot', desc: '编程辅助Agent', icon: 'fa-code', color: '#2196F3' },
  { name: 'DocWizard', desc: '文档处理Agent', icon: 'fa-file-alt', color: '#FF9800' },
  { name: 'TaskFlow', desc: '流程自动化Agent', icon: 'fa-project-diagram', color: '#2196F3' },
  { name: 'SalesGuru', desc: '智能营销Agent', icon: 'fa-bullhorn', color: '#FF9800' },
  { name: 'SecurityGuard', desc: '安全监控Agent', icon: 'fa-shield-alt', color: '#2196F3' },
  { name: 'HR Buddy', desc: '人力资源Agent', icon: 'fa-users', color: '#FF9800' },
  { name: 'FinanceAI', desc: '财务分析Agent', icon: 'fa-calculator', color: '#2196F3' },
  { name: 'DesignMate', desc: '设计辅助Agent', icon: 'fa-palette', color: '#FF9800' },
  { name: 'MeetingAI', desc: '会议纪要Agent', icon: 'fa-video', color: '#2196F3' },
  { name: 'OpsBot', desc: '运维管理Agent', icon: 'fa-server', color: '#FF9800' }
];

// 团队数据
const teamData = [
  {
    name: '张明远',
    title: 'CEO / 创始人',
    desc: '前Google AI Lab研究员，15年AI领域深耕经验，领导团队攻克多项技术难关。',
    image: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/c7ce29e4-e1a7-42b1-8b51-df2f77f6f907/image_1774232726_1_3.jpg',
    social: { linkedin: '#', github: '#' }
  },
  {
    name: '李雨桐',
    title: 'CTO / 技术总监',
    desc: '清华大学计算机博士，专注NLP和多模态AI研究，拥有30+项技术专利。',
    image: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/98d07fd0-9756-4156-997b-57eabb17de93/image_1774232726_3_3.jpg',
    social: { linkedin: '#', github: '#' }
  },
  {
    name: '王思颖',
    title: 'COO / 运营总监',
    desc: '前腾讯产品VP，10年互联网运营管理经验，擅长企业级产品战略规划。',
    image: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/ec6eaa75-ec4e-46b3-93e2-f44db88fb0ed/image_1774232729_2_3.jpg',
    social: { linkedin: '#', github: '#' }
  },
  {
    name: '陈浩然',
    title: 'VP of Engineering',
    desc: '前阿里巴巴P9技术专家，分布式系统与云计算领域权威，主导多个亿级项目。',
    image: 'https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/c79c0677-e2db-40ca-ad37-f6b4d1bc176e/image_1774232726_4_1.jpg',
    social: { linkedin: '#', github: '#' }
  }
];

// 合作伙伴数据
const partnersData = [
  { name: '华为云', icon: 'fa-cloud' },
  { name: '腾讯', icon: 'fa-comment-dots' },
  { name: '阿里云', icon: 'fa-database' },
  { name: '百度AI', icon: 'fa-brain' },
  { name: '微软Azure', icon: 'fa-windows' },
  { name: '字节跳动', icon: 'fa-bolt' }
];


// ========== 渲染模块 ==========

// 渲染服务卡片
function renderServices() {
  const grid = document.getElementById('services-grid');
  if (!grid) return;
  grid.innerHTML = servicesData.map((s, i) => `
    <div class="service-card bg-white rounded-2xl shadow-lg overflow-hidden scroll-animate" style="animation-delay: ${i * 0.1}s">
      <div class="h-44 overflow-hidden">
        <img src="${s.image}" alt="${s.title}" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500">
      </div>
      <div class="p-6">
        <div class="service-icon w-14 h-14 bg-${s.color}/10 rounded-xl flex items-center justify-center mb-4">
          <i class="fas ${s.icon} text-${s.color} text-2xl"></i>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">${s.title}</h3>
        <p class="text-gray-500 text-sm leading-relaxed mb-4">${s.desc}</p>
        <div class="flex flex-wrap gap-2">
          ${s.tags.map(t => `<span class="px-2.5 py-1 bg-${s.color}/5 text-${s.color} rounded-full text-xs font-medium">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// 渲染Agent卡片
function renderAgents() {
  const grid = document.getElementById('agents-grid');
  if (!grid) return;
  grid.innerHTML = agentsData.map((a, i) => `
    <div class="agent-card bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 scroll-animate" style="animation-delay: ${i * 0.05}s">
      <div class="flex items-center gap-3 mb-3">
        <div class="w-10 h-10 rounded-lg flex items-center justify-center" style="background: ${a.color}20">
          <i class="fas ${a.icon}" style="color: ${a.color}"></i>
        </div>
        <div>
          <h4 class="font-semibold text-sm">${a.name}</h4>
          <p class="text-gray-400 text-xs">${a.desc}</p>
        </div>
      </div>
      <div class="w-full bg-white/10 rounded-full h-1.5">
        <div class="h-full rounded-full transition-all duration-1000" style="width: ${70 + Math.random() * 30}%; background: linear-gradient(to right, ${a.color}, ${a.color}cc)"></div>
      </div>
      <p class="text-xs text-gray-500 mt-1.5 text-right">活跃度 ${Math.floor(70 + Math.random() * 30)}%</p>
    </div>
  `).join('');
}

// 渲染团队
function renderTeam() {
  const grid = document.getElementById('team-grid');
  if (!grid) return;
  grid.innerHTML = teamData.map((t, i) => `
    <div class="team-card bg-white rounded-2xl shadow-lg overflow-hidden scroll-animate" style="animation-delay: ${i * 0.1}s">
      <div class="relative h-56 overflow-hidden">
        <img src="${t.image}" alt="${t.name}" class="team-avatar w-full h-full object-cover">
        <div class="team-overlay absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent flex items-end p-5">
          <div class="flex gap-3">
            <a href="${t.social.linkedin}" class="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-tech-blue transition-colors">
              <i class="fab fa-linkedin text-sm"></i>
            </a>
            <a href="${t.social.github}" class="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
              <i class="fab fa-github text-sm"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="p-5">
        <h4 class="text-lg font-bold text-gray-900">${t.name}</h4>
        <p class="text-tech-blue text-sm font-medium mb-2">${t.title}</p>
        <p class="text-gray-500 text-sm leading-relaxed">${t.desc}</p>
      </div>
    </div>
  `).join('');
}

// 渲染合作伙伴
function renderPartners() {
  const container = document.getElementById('partners');
  if (!container) return;
  container.innerHTML = partnersData.map(p => `
    <div class="partner-logo flex flex-col items-center gap-2 px-6 py-4 bg-white rounded-xl shadow-sm">
      <i class="fas ${p.icon} text-3xl text-gray-400"></i>
      <span class="text-sm text-gray-500 font-medium">${p.name}</span>
    </div>
  `).join('');
}


// ========== 交互模块 ==========

// 导航栏滚动效果
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  
  const handleScroll = () => {
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

// 移动端菜单
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  // 点击菜单项关闭
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
}

// 数字递增动画
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  let animated = false;

  const animateCounters = () => {
    if (animated) return;
    const heroSection = document.getElementById('hero');
    if (!heroSection) return;
    
    const rect = heroSection.getBoundingClientRect();
    if (rect.bottom < window.innerHeight + 200) {
      animated = true;
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
          current += step;
          if (current < target) {
            counter.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target + (target === 99 ? '' : '+');
          }
        };
        requestAnimationFrame(updateCounter);
      });
    }
  };

  window.addEventListener('scroll', animateCounters, { passive: true });
  // 首次加载也检测
  setTimeout(animateCounters, 1000);
}

// 滚动动画观察器
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.scroll-animate').forEach(el => {
    observer.observe(el);
  });
}

// 粒子效果
function initParticles() {
  const container = document.getElementById('particles-container');
  if (!container) return;

  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (8 + Math.random() * 12) + 's';
    particle.style.animationDelay = Math.random() * 10 + 's';
    particle.style.width = (2 + Math.random() * 4) + 'px';
    particle.style.height = particle.style.width;
    container.appendChild(particle);
  }
}

// 回到顶部
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// 表单提交
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // 显示提交成功提示
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = '<i class="fas fa-check-circle mr-2"></i> 感谢您的咨询，我们将尽快与您联系！';
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3000);

    form.reset();
  });
}

// 平滑滚动导航
function initSmoothNav() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const navHeight = document.getElementById('navbar').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}


// ========== 初始化 ==========
function init() {
  // 渲染动态内容
  renderServices();
  renderAgents();
  renderTeam();
  renderPartners();

  // 初始化交互
  initNavbar();
  initMobileMenu();
  initCounters();
  initParticles();
  initBackToTop();
  initContactForm();
  initSmoothNav();

  // 延迟初始化滚动动画（等待DOM渲染完成）
  requestAnimationFrame(() => {
    initScrollAnimations();
  });
}

// DOM加载完成后初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

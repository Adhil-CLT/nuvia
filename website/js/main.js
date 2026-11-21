/**
 * NUViA — Official Website Interactive Engine
 * Controls:
 * 1. Hero Video Centerpiece (Autoplay, Demo Switcher, Sound Toggle)
 * 2. Master Gallery Screen Showcase (Uncropped Real Device Viewport)
 * 3. Download Platform Switcher (Android Mobile & Android TV)
 * 4. GitHub Releases & Single-Click Download Routing
 * 5. Smooth Anchor Scrolling
 */

// Screen definitions for Master Gallery
const SCREEN_DATA = {
  home: {
    src: 'assets/home-screen.jpg',
    tag: 'Curated Discovery',
    title: 'Home Feed & Liquid Glass Dock',
    lead: 'A pristine dark home feed tailored for quick music discovery. Highlights "Top Picks for You" with rich album artwork, recent tracks, and the signature floating Liquid Glass navigation dock.',
    boxes: [
      {
        title: 'Liquid Glass Floating Dock',
        desc: 'Haze-powered translucent glass pill with active green indicator, instant section hopping, and dedicated search launcher.'
      },
      {
        title: 'Floating Mini-Player',
        desc: 'Seamless track controls hover gracefully over your feed without blocking content.'
      }
    ],
    footer: 'Material 3 extracted color palette with Telegram-style Haze glass',
    aura: 'radial-gradient(circle, rgba(56, 189, 248, 0.32) 0%, rgba(6, 214, 160, 0.15) 50%, transparent 75%)'
  },
  lyrics: {
    src: 'assets/lyrics-screen.jpg',
    tag: 'Syllable-Level Timing',
    title: 'Apple-Style Animated Lyrics',
    lead: 'Full-screen animated lyrics with micro-timed syllable illumination and reactive artwork color glow. Sing along word-for-word with fluid physics transitions.',
    boxes: [
      {
        title: 'Word-Synced Highlighting',
        desc: 'Syllable-level micro-timing synced to the exact vocal rhythm with dynamic scale and glow. Credit to binimum.'
      },
      {
        title: '12+ Global Providers',
        desc: 'Aggregated from lrc.red, LRCLIB, BiniLyrics, BetterLyrics, PaxSenix, LyricsPlus, SimpMusic, Unison, Megalobiz, KuGou, Musixmatch & Genius.'
      }
    ],
    footer: 'Lyrics engine credit to binimum (am-lyrics)',
    aura: 'radial-gradient(circle, rgba(14, 165, 233, 0.38) 0%, rgba(2, 132, 199, 0.2) 50%, transparent 75%)'
  },
  canvas: {
    src: 'assets/canvas-player.jpg',
    tag: 'Visual Immersion',
    title: 'Edge-to-Edge Artwork Canvas',
    lead: 'Album covers stretch to the absolute borders of your OLED display. Powered by Telegram-style Haze frosted glass and dynamic Material 3 palette extraction.',
    boxes: [
      {
        title: 'New Player Themes',
        desc: 'Switch seamlessly between Default, Simple, and Legacy layouts with full-screen edge cover options.'
      },
      {
        title: 'Disable Blend Effects',
        desc: 'Render player icons, typography, and menus in pure solid white for high-contrast visibility.'
      }
    ],
    footer: 'Full-bleed canvas and lighter frost shader mode',
    aura: 'radial-gradient(circle, rgba(56, 189, 248, 0.35) 0%, rgba(168, 85, 247, 0.2) 50%, transparent 75%)'
  },
  queue: {
    src: 'assets/queue-screen.jpg',
    tag: 'Seamless Flow',
    title: 'Automix [Beta] & Gapless Crossfade',
    lead: 'DJ-style beat-matched transitions with tempo-stretching, plus 0–12s adjustable true crossfade. Music never stops, never skips a beat.',
    boxes: [
      {
        title: 'Automix Overview',
        desc: 'Inspect upcoming beat-matched transition points and tempo curves directly inside the song menu.'
      },
      {
        title: 'Music-Only Video Conversion',
        desc: 'Plays music videos as audio-only with the next track converted ahead of time so crossfade always works.'
      }
    ],
    footer: 'Hardware beat-detection and time-stretching engine',
    aura: 'radial-gradient(circle, rgba(6, 214, 160, 0.3) 0%, rgba(56, 189, 248, 0.18) 50%, transparent 75%)'
  },
  library: {
    src: 'assets/library-screen.jpg',
    tag: 'Complete Ecosystem',
    title: 'Connected Insights & Platform Sync',
    lead: 'Review your weekly listening minutes, top songs, and member history. Connect your favorite platforms without vendor lock-in or tracking.',
    boxes: [
      {
        title: 'Spotify Playlist Import',
        desc: 'Import and play your Spotify Liked Songs and public playlists instantly without login friction.'
      },
      {
        title: 'Discord & Scrobbling',
        desc: 'Broadcast live Rich Presence to Discord, plus real-time scrobbling to Last.fm and ListenBrainz.'
      }
    ],
    footer: 'Local media integration and foreground playback service',
    aura: 'radial-gradient(circle, rgba(245, 158, 11, 0.28) 0%, rgba(239, 68, 68, 0.15) 50%, transparent 75%)'
  },
  actions: {
    src: 'assets/actions-menu.jpg',
    tag: 'Audiophile Control',
    title: 'Frosted Glass Sheet & Audio Routing',
    lead: 'Quickly configure output routing, Bit-Perfect USB exclusive mode, equalizer presets, and download qualities in a responsive frosted glass sheet.',
    boxes: [
      {
        title: 'Hardware Stream Routing',
        desc: 'Toggle bit-perfect AAudio and USB direct output with sample rate matching up to 192kHz.'
      },
      {
        title: 'Quality Pickers',
        desc: 'Multi-tier source selection for addons with separate quality ceilings for Wi-Fi and mobile data.'
      }
    ],
    footer: 'Bit-perfect hardware driver credit to Mornye',
    aura: 'radial-gradient(circle, rgba(168, 85, 247, 0.32) 0%, rgba(56, 189, 248, 0.15) 50%, transparent 75%)'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initHeroVideo();
  initMasterGallery();
  initDownloadTabs();
  initSmoothScroll();
  initMobileMenu();
  initAmbientParallax();
});

/* ==========================================================================
   1. Hero Live Video (Autoplay, Demo Switcher, Sound Toggle)
   ========================================================================== */
function initHeroVideo() {
  const video = document.getElementById('heroVideoPlayer');
  const pills = document.querySelectorAll('.video-demo-pill');
  const soundBtn = document.getElementById('videoSoundToggle');
  const mutedIcon = document.getElementById('soundMutedIcon');
  const unmutedIcon = document.getElementById('soundUnmutedIcon');

  if (!video) return;

  // Video Demo switcher
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      if (pill.classList.contains('active')) return;

      const src = pill.getAttribute('data-src');
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const isMuted = video.muted;
      video.src = src;
      video.muted = isMuted;
      video.play().catch(() => {});
    });
  });

  // Sound toggle button
  if (soundBtn && mutedIcon && unmutedIcon) {
    soundBtn.addEventListener('click', () => {
      video.muted = !video.muted;
      if (video.muted) {
        mutedIcon.style.display = 'block';
        unmutedIcon.style.display = 'none';
      } else {
        mutedIcon.style.display = 'none';
        unmutedIcon.style.display = 'block';
      }
    });
  }

  // Auto-pause video when scrolled off-screen to preserve resources
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.25 });
    observer.observe(video);
  }
}

/* ==========================================================================
   2. Master Screen Gallery (Uncropped Real Device Viewport)
   ========================================================================== */
function initMasterGallery() {
  const tabs = document.querySelectorAll('.gallery-tab');
  const screenImg = document.getElementById('masterScreenImg');
  const aura = document.getElementById('stageAura');
  const tag = document.getElementById('narrativeTag');
  const title = document.getElementById('narrativeTitle');
  const lead = document.getElementById('narrativeLead');
  const grid = document.getElementById('narrativeGrid');
  const footer = document.getElementById('narrativeFooter');

  if (!tabs.length || !screenImg) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      if (tab.classList.contains('active')) return;

      const screenKey = tab.getAttribute('data-screen');
      const data = SCREEN_DATA[screenKey];
      if (!data) return;

      // Update active tab state
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      // Smooth image transition
      screenImg.classList.add('switching');
      setTimeout(() => {
        screenImg.src = data.src;
        screenImg.alt = data.title;
        screenImg.classList.remove('switching');

        if (tag) tag.textContent = data.tag;
        if (title) title.textContent = data.title;
        if (lead) lead.textContent = data.lead;

        if (grid && data.boxes) {
          grid.innerHTML = data.boxes.map(b => `
            <div class="narrative-box">
              <div class="box-title">${b.title}</div>
              <div class="box-desc">${b.desc}</div>
            </div>
          `).join('');
        }

        if (footer && data.footer) {
          footer.innerHTML = `
            <div class="credit-pill">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              <span>${data.footer}</span>
            </div>
          `;
        }

        if (aura && data.aura) {
          aura.style.background = data.aura;
        }
      }, 150);
    });
  });
}

/* ==========================================================================
   3. Download Platform Tabs (Mobile & TV)
   ========================================================================== */
function initDownloadTabs() {
  const buttons = document.querySelectorAll('.dl-tab-pill');
  const panels = document.querySelectorAll('.dl-pane');

  if (!buttons.length || !panels.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');

      buttons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      panels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   4. Smooth Anchor Scrolling with Floating Island Offset
   ========================================================================== */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = 90;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
          top: top,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ==========================================================================
   5. Mobile Menu Toggle & Navigation Drawer
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileMenuDrawer');
  const navLinks = document.querySelectorAll('.mobile-nav-link, .drawer-btn-primary, .drawer-btn-secondary');

  if (!toggleBtn || !drawer) return;

  function toggleMenu(open) {
    const isOpen = open !== undefined ? open : !drawer.classList.contains('open');
    if (isOpen) {
      drawer.classList.add('open');
      toggleBtn.classList.add('open');
      toggleBtn.setAttribute('aria-expanded', 'true');
      drawer.setAttribute('aria-hidden', 'false');
    } else {
      drawer.classList.remove('open');
      toggleBtn.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
    }
  }

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu(false);
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (drawer.classList.contains('open') && !drawer.contains(e.target) && !toggleBtn.contains(e.target)) {
      toggleMenu(false);
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      toggleMenu(false);
    }
  });
}

/* ==========================================================================
   6. Ambient Light Parallax Flow (Mouse & Scroll Reactions)
   ========================================================================== */
function initAmbientParallax() {
  const orbs = document.querySelectorAll('.aura-orb');
  if (!orbs.length) return;

  let ticking = false;

  window.addEventListener('pointermove', (e) => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const xPct = (e.clientX / window.innerWidth - 0.5) * 50;
      const yPct = (e.clientY / window.innerHeight - 0.5) * 50;

      orbs.forEach((orb, i) => {
        const factor = (i + 1) * 0.35;
        orb.style.transform = `translate3d(${xPct * factor}px, ${yPct * factor}px, 0)`;
      });
      ticking = false;
    });
  }, { passive: true });
}

// Mobile menu
const menu = document.querySelector('.menu');
const links = document.querySelector('.links');
menu.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  links.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
}));

// Hairline under the nav once the page scrolls
const nav = document.querySelector('.nav');
const onScroll = () => nav.classList.toggle('scrolled', scrollY > 8);
addEventListener('scroll', onScroll, { passive: true });
onScroll();

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

// Gentle entrance for section content
const targets = document.querySelectorAll('.block > *, .specs, .frame, .rows > li, .cols > *');
targets.forEach(el => el.classList.add('reveal'));
if (reduced || !('IntersectionObserver' in window)) {
  targets.forEach(el => el.classList.add('in'));
} else {
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: .1, rootMargin: '0px 0px -40px 0px' });
  targets.forEach(el => io.observe(el));
}

// Sparse starfield
const sky = document.querySelector('.sky');
const ctx = sky.getContext('2d');
let stars = [];
function sizeSky() {
  const dpr = Math.min(devicePixelRatio || 1, 2);
  sky.width = innerWidth * dpr;
  sky.height = innerHeight * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const count = Math.round(innerWidth * innerHeight / 9000);
  stars = Array.from({ length: count }, () => ({
    x: Math.random() * innerWidth,
    y: Math.random() * innerHeight,
    r: Math.random() < .9 ? .6 : 1.1,
    a: .15 + Math.random() * .45,
    s: .4 + Math.random() * 1.2,
    gold: Math.random() < .08
  }));
}
function drawSky(t = 0) {
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  for (const st of stars) {
    const tw = reduced ? 1 : .6 + .4 * Math.sin(t / 1000 * st.s + st.x);
    ctx.fillStyle = st.gold ? `rgba(240,204,88,${st.a * tw})` : `rgba(247,242,233,${st.a * tw})`;
    ctx.fillRect(st.x, st.y, st.r, st.r);
  }
  if (!reduced) requestAnimationFrame(drawSky);
}
sizeSky();
drawSky();
addEventListener('resize', sizeSky);

// Enquiry form — posts to the same endpoint as the current site
const form = document.querySelector('#contact-form');
const status = form.querySelector('.status');
const submit = form.querySelector('button[type="submit"]');
form.addEventListener('submit', async e => {
  e.preventDefault();
  if (!form.checkValidity()) {
    status.textContent = 'Please add your name, a valid email and a short note (15+ characters).';
    return;
  }
  submit.disabled = true;
  submit.textContent = 'Sending…';
  status.textContent = '';
  const data = Object.fromEntries(new FormData(form).entries());
  try {
    const res = await fetch('/api/enquiries', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data)
    });
    const body = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(body.error || 'Submission failed. Please email info@accelpro.academy.');
    status.textContent = body.message || 'Thank you. Your enquiry has been received.';
    form.reset();
  } catch (err) {
    // Network failures surface as TypeError; show the friendly fallback for those.
    status.textContent = err instanceof TypeError ? 'Submission failed. Please email info@accelpro.academy.' : err.message;
  } finally {
    submit.disabled = false;
    submit.textContent = 'Send enquiry';
  }
});

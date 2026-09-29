const emotions = {
  怒: { type: '立场型', purpose: '建立人设、替用户说话', advice: '亮态度、划边界、替用户说话', frequency: '每周 1–2 条' },
  喜: { type: '结果型', purpose: '晒成果、给希望', advice: '晒战绩、晒学员案例，给希望', frequency: '每周 1 条' },
  哀: { type: '故事型', purpose: '拉信任、讲经历', advice: '讲转折、讲真实经历，让人看见你的来路', frequency: '每两周 1 条' },
  惧: { type: '痛点型', purpose: '制造紧迫感、引流', advice: '点出风险，但不要持续制造焦虑', frequency: '发售前集中用' },
  爱: { type: '陪伴型', purpose: '拉近距离、社群维护', advice: '多回应、多分享幕后，让用户感到被接住', frequency: '每周 1 条' },
  恶: { type: '筛选型', purpose: '建立高端感、筛选客户', advice: '说清楚不服务谁，建立边界与专业感', frequency: '发售前集中用' },
  欲: { type: '向往型', purpose: '制造渴望、品牌片', advice: '展示理想结果，让用户看见想成为的自己', frequency: '每月 1 条' }
};

const questions = [
  ['行业与产品', '你的行业赛道是？', [['美业 / 护肤 / 穿搭 / 医美', '喜+2，欲+1，爱+1'], ['教育 / 知识付费 / 技能培训', '惧+2，喜+1，怒+1'], ['疗愈 / 心理咨询 / 身心灵', '爱+2，哀+1，喜+1'], ['自媒体教学 / IP孵化 / 操盘手', '怒+2，恶+1，喜+1'], ['其他行业', '根据你的产品和用户判断']]],
  ['行业与产品', '你的核心产品主要帮用户解决什么？', [['帮人赚钱 / 提升收入', '怒+2，恶+1，喜+1'], ['帮人变美 / 变好 / 变健康', '喜+2，欲+1，爱+1'], ['帮人安心 / 缓解焦虑 / 疗愈', '爱+2，哀+1'], ['帮人省时间 / 避坑 / 少走弯路', '惧+1，怒+1，恶+1']]],
  ['行业与产品', '你的客单价属于？', [['高客单价（1 万以上）', '恶+2，怒+1，喜+1'], ['中客单价（3000–1 万）', '喜+1，欲+1，爱+1'], ['低客单价（3000 以下）', '爱+2，哀+1，惧+1']]],
  ['行业与产品', '你的交付方式是？', [['一对一深度服务（陪跑 / 私教 / 咨询）', '恶+1，爱+1，喜+1'], ['一对多课程 / 训练营', '惧+1，喜+1，怒+1'], ['社群 / 会员制陪伴', '爱+2，哀+1'], ['内容 / 工具 / 模板类产品', '喜+1，欲+1，惧+1']]],
  ['用户心理', '你的用户最怕失去什么？', [['怕失去钱 / 机会', '惧+2'], ['怕被人评判 / 不被接纳', '爱+1，哀+2'], ['怕走弯路 / 被割韭菜', '怒+2，恶+1'], ['怕平庸 / 没结果', '喜+1，欲+2']]],
  ['用户心理', '你的用户最想得到什么？', [['想赚钱 / 想成功', '怒+1，喜+2，欲+1'], ['想变美 / 变自信', '喜+2，欲+2'], ['想安心 / 想被理解', '爱+2，哀+1'], ['想少走弯路 / 想有人带', '惧+1，恶+1，喜+1']]],
  ['用户心理', '你的用户做决策时，最大的障碍是？', [['怕花钱没效果', '惧+1，喜+1'], ['怕被人笑话', '爱+1，哀+1'], ['怕遇到不靠谱的人', '怒+1，恶+1'], ['怕错过机会', '欲+1，惧+1']]],
  ['个人特质', '你平时的说话风格是？', [['语速快、犀利、一针见血', '怒+2，恶+1'], ['语速慢、温柔、娓娓道来', '爱+2，哀+1'], ['轻快、幽默、有感染力', '喜+2，欲+1'], ['沉稳、权威、逻辑严密', '惧+1，恶+1，喜+1']]],
  ['个人特质', '你生气的时候通常会？', [['直接表达，不怕冲突', '怒+2，恶+1'], ['忍着不说，自己消化', '哀+2，爱+1'], ['用幽默化解', '喜+1，欲+1'], ['冷静分析，讲道理', '惧+1，恶+1']]],
  ['个人特质', '你讲自己经历时，更偏向？', [['平静叙述，像讲故事', '哀+2，爱+1'], ['有情绪起伏，像演讲', '怒+1，喜+1，欲+1'], ['轻描淡写，不渲染', '恶+1，喜+1'], ['逻辑清晰，像上课', '惧+1，恶+1']]],
  ['个人特质', '你的长相 / 气质更接近？', [['气场强、干练、有距离感', '恶+2，怒+1'], ['亲和、温暖、邻家感', '爱+2，哀+1'], ['阳光、活力、有能量', '喜+2，欲+1'], ['知性、专业、可信赖', '惧+1，喜+1']]],
  ['个人特质', '你面对镜头时，最自然的状态是？', [['直接开怼，敢说真话', '怒+2，恶+1'], ['温柔分享，像跟朋友聊天', '爱+2，哀+1'], ['自信展示，晒结果', '喜+2，欲+1'], ['严肃分析，给干货', '惧+1，恶+1']]],
  ['个人特质', '你更喜欢哪种表达方式？', [['讲观点、亮态度', '怒+2，恶+1'], ['讲故事、讲经历', '哀+2，爱+1'], ['讲结果、讲案例', '喜+2，欲+1'], ['讲方法、讲逻辑', '惧+1，恶+1']]],
  ['八字五行 · 可跳过', '你的日主五行是？', [['火（丙、丁）', '怒+2，喜+1'], ['土（戊、己）', '恶+1，喜+1'], ['木（甲、乙）', '怒+1，欲+1'], ['水（壬、癸）', '哀+1，爱+1'], ['金（庚、辛）', '惧+1，恶+1']]],
  ['八字五行 · 可跳过', '你的八字身强还是身弱？', [['身强', '怒+1，喜+1，恶+1'], ['身弱', '哀+1，爱+1，惧+1'], ['不知道，跳过本题', '']]]
];

let current = 0;
let answers = Array.from({ length: questions.length }, () => []);
const scores = () => Object.fromEntries(Object.keys(emotions).map(key => [key, 0]));
const $ = id => document.getElementById(id);
const scoreFromText = text => { const result = {}; [...text.matchAll(/([怒喜哀惧爱恶欲])\+(\d)/g)].forEach(match => { result[match[1]] = Number(match[2]); }); return result; };

function show(id) { ['introView', 'quizView', 'resultView'].forEach(view => $(view).classList.toggle('hidden', view !== id)); }
function showToast(message) { const toast = $('toast'); toast.textContent = message; toast.classList.add('visible'); clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove('visible'), 2400); }
function makeShareUrl(includeAnswers = false) { const url = new URL(window.location.href); url.hash = ''; if (includeAnswers) url.searchParams.set('answers', answers.map(selection => selection.length ? selection.reduce((mask, index) => mask | (1 << index), 0) : 'x').join('.')); return url.toString(); }
async function shareUrl(url, message) { try { if (navigator.share) { await navigator.share({ title: '创始人 IP 情绪风格测评', text: message, url }); } else { await navigator.clipboard.writeText(url); showToast('分享链接已复制，发给学员即可'); } } catch (error) { if (error.name !== 'AbortError') { try { await navigator.clipboard.writeText(url); showToast('分享链接已复制'); } catch (clipboardError) { showToast('请复制浏览器地址栏链接分享'); } } } }
function loadSharedResult() { const encoded = new URLSearchParams(window.location.search).get('answers'); if (!encoded || !/^[0-9x]+(?:\.[0-9x]+)*$/.test(encoded)) return false; const tokens = encoded.includes('.') ? encoded.split('.') : [...encoded]; if (tokens.length !== questions.length) return false; if (tokens.some((token, index) => token !== 'x' && Number(token) > (1 << questions[index][2].length) - 1)) return false; answers = tokens.map((token, index) => { if (token === 'x') return []; const mask = Number(token); return Array.from({ length: questions[index][2].length }, (_, optionIndex) => optionIndex).filter(optionIndex => mask & (1 << optionIndex)); }); renderResults(); show('resultView'); $('headerStatus').textContent = '已打开分享结果'; return true; }
function renderQuestion() {
  const [section, title, options] = questions[current];
  $('sectionLabel').textContent = `${current < 4 ? '第一部分' : current < 7 ? '第二部分' : current < 13 ? '第三部分' : '第四部分'} · ${section}`;
  $('questionTitle').textContent = title; $('currentNumber').textContent = String(current + 1).padStart(2, '0'); $('progressBar').style.width = `${((current + 1) / questions.length) * 100}%`;
  $('options').innerHTML = options.map((option, index) => `<div class="option ${answers[current].includes(index) ? 'selected' : ''}" data-index="${index}"><span class="option-letter">${answers[current].includes(index) ? '✓' : String.fromCharCode(65 + index)}</span><div class="option-copy"><strong>${option[0]}</strong><small>${option[1] || '本题不计分'}</small></div></div>`).join('');
  document.querySelectorAll('.option').forEach(option => option.addEventListener('click', () => { const index = Number(option.dataset.index); answers[current] = answers[current].includes(index) ? answers[current].filter(selected => selected !== index) : [...answers[current], index]; renderQuestion(); }));
  $('prevButton').disabled = current === 0; $('nextButton').disabled = answers[current].length === 0; $('nextButton').innerHTML = current === questions.length - 1 ? '查看结果 <span>↗</span>' : '下一题 <span>→</span>';
}
function calculate() { const total = scores(); answers.forEach((selection, questionIndex) => selection.forEach(answer => Object.entries(scoreFromText(questions[questionIndex][2][answer][1])).forEach(([emotion, value]) => { total[emotion] += value; }))); return Object.entries(total).sort((a, b) => b[1] - a[1]); }
function renderResults() {
  const ranked = calculate(); const primary = ranked[0][0]; const support = ranked.slice(1, 3).map(item => item[0]); const avoid = ranked.slice(-2).map(item => item[0]); const max = ranked[0][1] || 1;
  $('resultTitle').textContent = `${primary} × ${support.join(' × ')} 配方`; $('resultSubtitle').textContent = `${emotions[primary].type}为主，${emotions[support[0]].type}与${emotions[support[1]].type}辅助`;
  $('scoreBars').innerHTML = ranked.map(([emotion, score]) => `<div class="score-bar-row"><strong>${emotion}</strong><div class="score-bar-track"><div class="score-bar-fill" style="width:${Math.max(5, score / max * 100)}%"></div></div><span>${score}</span></div>`).join('');
  $('primaryEmotion').textContent = `${primary} · ${emotions[primary].type}`; $('supportEmotions').textContent = support.map(emotion => `${emotion} · ${emotions[emotion].type}`).join(' + '); $('contentRatio').textContent = '60% + 25% + 15%';
  $('contentAdvice').innerHTML = [primary, ...support].map((emotion, index) => `<div class="advice-item"><strong>${[60, 25, 15][index]}% ${emotion} · ${emotions[emotion].type}</strong><span>${emotions[emotion].advice}。${emotions[emotion].purpose}，建议${emotions[emotion].frequency}。</span></div>`).join(''); $('avoidAdvice').textContent = `${avoid.join('、')}：分数较低，暂时不要把它们当作主要表达。你的内容更适合从「${emotions[primary].type}」出发，保持真实比刻意补齐所有情绪更重要。`; $('completionCopy').textContent = `完成度 ${Math.round(answers.filter(selection => selection.length).length / questions.length * 100)}%`; $('signalCopy').textContent = ranked[0][1] - ranked[1][1] >= 3 ? '情绪信号清晰' : '情绪组合丰富'; $('emotionTags').innerHTML = ranked.slice(0, 4).map(([emotion, score], index) => `<span class="emotion-tag tag-${index}">${emotion} · ${emotions[emotion].type}<b>${score}</b></span>`).join('');
  const profile = [['行业赛道', answerText(0)], ['核心产品', answerText(1)], ['客单价', answerText(2)], ['用户最怕', answerText(4)], ['用户最想要', answerText(5)], ['说话风格', answerText(7)], ['气质类型', answerText(10)], ['主情绪', `${primary} · ${emotions[primary].type}`], ['辅助情绪 1', `${support[0]} · ${emotions[support[0]].type}`], ['辅助情绪 2', `${support[1]} · ${emotions[support[1]].type}`], ['避开情绪', avoid.join('、')], ['主推视频类型', emotions[primary].type], ['内容配比', `${primary} 60% + ${support[0]} 25% + ${support[1]} 15%`]];
  $('profileGrid').innerHTML = profile.map((item, index) => `<div class="profile-item ${index === 12 ? 'wide' : ''}"><span>${item[0]}</span><strong>${item[1]}</strong></div>`).join(''); $('headerStatus').textContent = '测评已完成';
}
function answerText(index) { const selection = answers[index]; return selection.length ? selection.map(answer => questions[index][2][answer][0]).join('、') : '未填写'; }
function downloadResult() { const canvas = document.createElement('canvas'); canvas.width = 1200; canvas.height = 760; const context = canvas.getContext('2d'); context.fillStyle = '#202320'; context.fillRect(0, 0, canvas.width, canvas.height); context.fillStyle = '#d8ef72'; context.fillRect(70, 72, 95, 10); context.fillStyle = '#f4f1ea'; context.font = '700 24px sans-serif'; context.fillText('FOUNDER IP PROFILE', 70, 145); context.font = '600 58px serif'; context.fillText($('resultTitle').textContent, 70, 215); context.fillStyle = '#aeb3a9'; context.font = '20px sans-serif'; context.fillText($('resultSubtitle').textContent, 70, 255); const rows = [...document.querySelectorAll('.score-bar-row')]; rows.forEach((row, index) => { const y = 335 + index * 38; context.fillStyle = '#f4f1ea'; context.font = '700 18px sans-serif'; context.fillText(row.children[0].textContent, 75, y); context.fillStyle = '#424940'; context.fillRect(125, y - 14, 700, 11); context.fillStyle = '#d8ef72'; context.fillRect(125, y - 14, 700 * parseFloat(row.children[1].firstElementChild.style.width) / 100, 11); context.fillStyle = '#aeb3a9'; context.font = '16px sans-serif'; context.fillText(row.children[2].textContent, 850, y); }); context.fillStyle = '#ff795f'; context.font = '700 22px sans-serif'; context.fillText('内容配比  60% + 25% + 15%', 70, 680); context.fillStyle = '#aeb3a9'; context.font = '16px sans-serif'; context.fillText('创始人 IP 情绪风格测评 · 保存于你的内容档案', 70, 720); const link = document.createElement('a'); link.download = '创始人IP情绪风格测评结果.png'; link.href = canvas.toDataURL('image/png'); link.click(); }

$('startButton').addEventListener('click', () => { current = 0; answers = Array.from({ length: questions.length }, () => []); show('quizView'); $('headerStatus').textContent = '正在测评'; renderQuestion(); }); $('shareTestButton').addEventListener('click', () => shareUrl(makeShareUrl(), '来测测你的创始人 IP 情绪风格')); $('shareResultButton').addEventListener('click', () => shareUrl(makeShareUrl(true), '这是我的创始人 IP 情绪风格结果')); $('prevButton').addEventListener('click', () => { if (current > 0) { current--; renderQuestion(); } }); $('nextButton').addEventListener('click', () => { if (current < questions.length - 1) { current++; renderQuestion(); } else { renderResults(); show('resultView'); window.scrollTo({ top: 0, behavior: 'smooth' }); } }); $('restartButton').addEventListener('click', () => { show('introView'); $('headerStatus').textContent = '准备开始'; window.history.replaceState({}, '', window.location.pathname); window.scrollTo({ top: 0, behavior: 'smooth' }); }); $('saveImageButton').addEventListener('click', downloadResult); loadSharedResult();
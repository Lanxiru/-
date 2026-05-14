const fields = {
  projectName: document.querySelector('#projectName'),
  siteContext: document.querySelector('#siteContext'),
  brief: document.querySelector('#brief'),
  constraints: document.querySelector('#constraints'),
  stage: document.querySelector('#stage'),
  imageType: document.querySelector('#imageType'),
  style: document.querySelector('#style'),
};

const promptOutput = document.querySelector('#promptOutput');
const localPreview = document.querySelector('#localPreview');
const preview = document.querySelector('#preview');
const cardTemplate = document.querySelector('#summaryCardTemplate');

const sample = {
  projectName: '滨水老厂区更新设计',
  siteContext: '某城市中心区滨水老厂区，基地约 12 公顷，北侧临城市主路，南侧临河。',
  brief: '要求保留两栋红砖厂房，导入社区服务、创意办公、商业配套和滨水公园。成果包括总平面、功能分析、交通分析、鸟瞰图和节点效果图。老师强调工业记忆、公共开放性和慢行连续性。',
  constraints: '保留两栋厂房；南侧水岸不可改变；北侧设置主要车行入口；滨水空间需要连续开放；建筑高度从水岸向城市道路逐步升高。',
  stage: '概念方案',
  imageType: '鸟瞰效果图',
  style: '教学汇报风格、蓝绿生态、工业记忆、清晰图例、柔和日光',
};

function valueOf(key) {
  return fields[key].value.trim() || '待补充';
}

function buildAgentRequest() {
  const payload = {
    role: '城乡规划方案共创与图像提示词转换智能体',
    current_stage: valueOf('stage'),
    project: {
      name: valueOf('projectName'),
      site_context: valueOf('siteContext'),
      brief: valueOf('brief'),
      constraints: valueOf('constraints'),
      preferred_style: valueOf('style'),
    },
    requested_output: {
      image_type: valueOf('imageType'),
      include: [
        '已知条件与未知条件表',
        '基地问题—机会—设计回应矩阵',
        '2–3 个可比较概念方案',
        '规范风险待核查清单',
        '中文与英文图像生成提示词',
        '负面提示词和现状约束提醒',
      ],
    },
    instructions: [
      '如果信息不足，请先提出不超过 5 个关键问题，并给出可先假设的推进版本。',
      '涉及规范时只做风险提示，不编造地方条文或审批结论。',
      '必须尊重用户写明的基地边界、保留建筑、水体、道路红线和生态保护要素。',
      '输出要包含可画成图的轴线、节点、分区、流线、图例和表达建议。',
    ],
  };

  return `请基于 prompts/system_prompt.md 的角色要求处理以下项目资料。\n\n${JSON.stringify(payload, null, 2)}`;
}

function renderSummary() {
  const cards = [
    ['项目名称', valueOf('projectName')],
    ['基地背景', valueOf('siteContext')],
    ['当前阶段', valueOf('stage')],
    ['图像类型', valueOf('imageType')],
    ['关键约束', valueOf('constraints')],
    ['表达风格', valueOf('style')],
  ];

  localPreview.innerHTML = '';
  cards.forEach(([title, content]) => {
    const node = cardTemplate.content.cloneNode(true);
    node.querySelector('h3').textContent = title;
    node.querySelector('p').textContent = content;
    localPreview.appendChild(node);
  });
}

document.querySelector('#generate').addEventListener('click', () => {
  promptOutput.textContent = buildAgentRequest();
  renderSummary();
});

document.querySelector('#loadSample').addEventListener('click', () => {
  Object.entries(sample).forEach(([key, value]) => {
    fields[key].value = value;
  });
  promptOutput.textContent = buildAgentRequest();
  renderSummary();
});

document.querySelector('#copyPrompt').addEventListener('click', async () => {
  await navigator.clipboard.writeText(promptOutput.textContent);
  document.querySelector('#copyPrompt').textContent = '已复制';
  setTimeout(() => {
    document.querySelector('#copyPrompt').textContent = '复制';
  }, 1200);
});

document.querySelector('#siteImage').addEventListener('change', (event) => {
  const [file] = event.target.files;
  if (!file) return;
  preview.src = URL.createObjectURL(file);
  preview.hidden = false;
});

document.querySelectorAll('.tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach((item) => item.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach((item) => item.classList.remove('active'));
    tab.classList.add('active');
    document.querySelector(`#${tab.dataset.tab}`).classList.add('active');
  });
});

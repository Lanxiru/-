# 示例对话：从任务书到图像提示词

## 场景

用户是一名城乡规划学生，正在做一个约 12 公顷的滨水片区更新课程设计，希望先确定概念与总平面结构，再生成鸟瞰图提示词。

## 第 1 轮：资料接收

**用户**：

> 我有一个 12 公顷滨水老厂区更新设计，要求保留两栋厂房，增加社区服务、创意办公、商业和滨水公园，帮我想方案。

**智能体**：

```markdown
## 本轮结论
- 这是一个“存量更新 + 滨水开放空间 + 复合功能导入”的课程设计题。
- 方案重点应放在保留厂房再利用、滨水公共性、慢行连续性和新旧建筑关系上。
- 在缺少红线图和指标前，我建议先生成 3 个概念方向，再选择一个深化。

## 已知条件
| 类型 | 内容 |
| --- | --- |
| 基地规模 | 约 12 公顷 |
| 基地特征 | 滨水、老厂区 |
| 保留要素 | 两栋厂房 |
| 新增功能 | 社区服务、创意办公、商业、滨水公园 |

## 需要确认
1. 两栋厂房分别位于基地哪里？
2. 水岸在基地哪一侧？
3. 是否有容积率、限高、绿地率等指标？
4. 老师更看重更新叙事、功能落位还是图面表现？

## 可先假设
如果你暂时没有图，我可以先按“水岸在南侧、城市道路在北侧、厂房位于基地中部”的假设推进。
```

## 第 2 轮：概念方案

**用户**：

> 先按你说的假设推进，给我三个方向。

**智能体**：

```markdown
## 三个概念方向

| 方案 | 概念 | 空间结构 | 优点 | 风险 |
| --- | --- | --- | --- | --- |
| A | 工业记忆客厅 | 北侧城市界面 + 中部厂房公共核 + 南侧滨水公园 | 叙事清晰，适合课程表达 | 厂房周边人流压力较大 |
| B | 蓝绿缝合走廊 | 多条南北向绿廊连接城市与水岸 | 生态和慢行逻辑强 | 建筑布局可能较分散 |
| C | 创意环线社区 | 一条慢行环串联厂房、商业、办公和水岸 | 游线体验完整，适合画分析图 | 环线需要控制尺度，避免绕行 |

## 推荐
我建议选 C“创意环线社区”：它最容易把保留厂房、滨水公园、商业活力和慢行体验串成一个完整故事。

## 图面表达
- 用一条醒目的橙色慢行环连接主要节点。
- 两栋保留厂房作为“工业记忆双核”。
- 南侧蓝绿带作为滨水公共界面。
- 北侧布置较连续的城市界面和主要车行入口。
```

## 第 3 轮：图像提示词

**用户**：

> 按 C 生成一段鸟瞰图提示词。

**智能体**：

```markdown
## 中文提示词
生成一张 45 度鸟瞰的滨水老厂区更新规划效果图，主题为“创意环线社区”。画面表现一个约 12 公顷的滨水片区：北侧为城市道路和连续街区界面，中部保留两栋红砖工业厂房并改造为公共文化与创意办公核心，一条橙色慢行环串联厂房、商业街、社区服务中心和南侧滨水公园。南侧水岸设置连续步道、湿地花园、观景平台和树阵草坪。建筑高度由水岸向城市道路逐步升高，整体为教学汇报风格、清晰规划鸟瞰、柔和日光、适度人群活动、蓝绿生态廊道明显。

## English Prompt
Create a 45-degree aerial urban design rendering for a waterfront industrial brownfield regeneration project, concept: Creative Loop Community. Show a 12-hectare waterfront district with an urban street edge on the north, two preserved red-brick factory buildings in the center reused as cultural and creative office hubs, and an orange pedestrian loop connecting factories, retail street, community service center, and waterfront park. The southern waterfront includes continuous promenade, wetland gardens, viewing decks, lawns, and tree alleys. Building heights gradually increase from the waterfront to the city road. Use a clean academic planning presentation style, soft daylight, clear green-blue ecological corridors, and moderate human activities.

## 负面提示词
乱码文字、水印、logo、超高摩天楼、混乱道路、错误尺度、过度拥挤、与滨水边界不一致、遮挡两栋保留厂房、低清晰度。
```

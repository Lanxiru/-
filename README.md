# 城乡规划方案智能体

这是一个面向城乡规划学习与方案推敲的中文智能体提示词包。它帮助学生把“基地任务书、现状图、规范约束、设计偏好”转化为可讨论的规划策略、空间方案、示意图生成提示词与复盘清单。

> 重要说明：本智能体用于教学、概念方案与表达辅助，不替代注册规划师、建筑师、结构/消防/交通/市政等专业审查；涉及强制性规范、地方控规、红线与审批要求时，需要以当地最新法定文件和主管部门意见为准。

## 适用场景

- 课程设计：居住区、校园、街区更新、村庄规划、滨水空间、公园与公共服务设施等。
- 方案共创：一边聊天梳理功能、指标、交通、景观与空间结构，一边迭代总平面草案。
- 现状图解读：基于用户上传的基地现状图、航拍图、地形图、控规图或任务书截图，提取边界、出入口、道路、水系、建筑、绿地与限制条件。
- 图像生成：把方案转化为适合 Midjourney、Stable Diffusion、DALL·E 或其他图像模型的中文/英文提示词。

## 快速开始

1. 复制 `prompts/system_prompt.md` 作为智能体的系统提示词。
2. 让用户按 `templates/project_brief_template.md` 补充任务书与基地信息。
3. 如有现状图，按 `templates/site_image_review_template.md` 引导用户上传并标注关键要素。
4. 按 `docs/workflow.md` 逐轮完成：任务解析 → 现状诊断 → 概念生成 → 方案深化 → 规范自检 → 图像提示词输出。
5. 用 `templates/image_prompt_template.md` 将最终方案转换为图像生成提示词。
6. 如果要搭建成平台智能体，参考 `docs/agent_blueprint.md` 与 `configs/agent_config.example.json`。
7. 如果不确定是否需要接入模型，先看 `docs/model_usage.md`。
8. 如果要做成可操作网页，先运行 `web/index.html` 静态原型，并参考 `docs/frontend_implementation.md`。
9. 如果想确认产品完成度和使用步骤，阅读 `docs/user_guide.md`。

## 文件结构

```text
prompts/system_prompt.md              # 智能体核心系统提示词
docs/workflow.md                      # 对话式规划方案工作流
docs/output_spec.md                   # 输出格式与质量标准
docs/agent_blueprint.md               # 可落地为自定义智能体的产品蓝图
docs/model_usage.md                   # 模型调用需求与部署方式说明
docs/frontend_implementation.md        # 前端网页界面实施方案
docs/user_guide.md                    # 产品完成度与使用指南
web/                                  # 可操作静态网页原型与运行说明
scripts/start_web.sh                  # 一键启动网页原型
examples/conversation_example.md       # 从任务书到图像提示词的示例对话
configs/agent_config.example.json      # 智能体平台配置示例
templates/project_brief_template.md   # 基地任务书信息采集模板
templates/site_image_review_template.md # 现状图读图模板
templates/image_prompt_template.md    # 方案转图像提示词模板
```

## 推荐使用方式

- 每次只推进一个设计问题，例如“总平面结构”“交通流线”“功能分区”“节点意向图”。
- 让智能体先给出 2–3 个可比较方案，再选择一个方案深化。
- 对任何“必须满足规范”的结论，都要求智能体标注“依据类型、待核实文件、风险点”。
- 图像生成前先确认图纸类型：总平面、鸟瞰、剖透视、轴测、分析图、节点效果图或概念拼贴。

## 搭建成智能体的建议

- 将 `prompts/system_prompt.md` 设置为系统提示词。
- 将 `docs/agent_blueprint.md`、`docs/workflow.md`、`docs/output_spec.md` 和 `templates/` 目录作为知识库。
- 将 `examples/conversation_example.md` 作为 few-shot 示例，帮助智能体学习从任务书到方案再到图像提示词的完整语气和结构。
- 如果平台支持图片理解，要求用户优先上传带比例尺、北箭头和红线边界的现状图。
- 最小可用版本只需要文本大语言模型；读图需要多模态视觉模型；直接出图才需要图像生成模型。


## 当前完成度

本仓库已经完成 MVP 级产品设计和可操作静态网页原型：你可以用提示词包直接辅助课程设计，也可以运行 `web/` 原型整理任务书、现状图和模型请求。它还不是完整上线版产品；真实 AI 调用、用户登录、数据库、图片生成历史和 CAD/GIS 能力需要后续接入后端实现。详细使用路径见 `docs/user_guide.md`。

## 前端网页原型

仓库提供了一个不依赖构建工具的静态网页原型，可用于体验资料录入、现状图预览、阶段选择和模型请求生成：

```bash
./scripts/start_web.sh
```

也可以直接运行：

```bash
python3 -m http.server 8000 --bind 0.0.0.0 --directory web
```

本机可打开 `http://localhost:8000` 使用；如果在容器、Codespaces 或远程服务器中运行，请打开平台提供的端口转发地址。该原型不会在浏览器中直接调用 AI 模型；正式部署时应通过后端 API 安全调用模型。

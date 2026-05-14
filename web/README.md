# Web 原型运行说明

这个目录是城乡规划方案智能体的静态网页原型，不需要安装依赖。

## 启动方式

推荐使用一键脚本。在仓库根目录运行：

```bash
./scripts/start_web.sh
```

它默认等价于：

```bash
python3 -m http.server 8000 --bind 0.0.0.0 --directory web
```

然后根据你的环境打开对应地址：

- 本机直接运行：`http://127.0.0.1:8000` 或 `http://localhost:8000`
- VS Code Dev Container / Codespaces / 远程容器：打开编辑器提示的 **Forwarded Port / Ports / 端口转发** 地址
- 云服务器：打开服务器公网地址加端口，例如 `http://服务器IP:8000`，并确认安全组或防火墙允许该端口

## ERR_CONNECTION_REFUSED 排查

如果浏览器显示 `ERR_CONNECTION_REFUSED`，通常表示浏览器没有连到正在运行的服务。按顺序检查：

1. 确认终端里的 `python3 -m http.server ...` 进程仍在运行，不要关闭该终端。
2. 确认访问端口和启动端口一致，默认是 `8000`。
3. 如果在容器或远程环境中运行，不要只依赖 `127.0.0.1`，请使用端口转发地址，并用 `--bind 0.0.0.0` 启动。
4. 如果端口被占用，换一个端口，例如：

```bash
PORT=8080 ./scripts/start_web.sh
```

或直接使用 Python 命令：

```bash
python3 -m http.server 8080 --bind 0.0.0.0 --directory web
```

5. 用命令确认服务是否可访问：

```bash
python3 - <<'PY'
from urllib.request import urlopen
with urlopen('http://127.0.0.1:8000', timeout=5) as response:
    print(response.status, response.headers.get_content_type())
PY
```

## 当前原型边界

该网页只在本地整理任务书、现状图预览和模型请求，不会直接调用 AI 模型。正式产品应通过后端 API 调用文本模型、多模态视觉模型或图像生成模型。

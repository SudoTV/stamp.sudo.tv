---
title: 创建贴纸
layout: base
localization: zh-CN
---

# {{ page.title }}

在开始之前，请先了解我们的贡献政策：

{% include navigation/absolute-link.html
    external=true
    with-origin=true
    href="https://sudo.tv/contribute"
    title="SudoTV 贡献"
    description="了解为 SudoTV 计划添砖加瓦"
%}

## 贴纸图标

您需要准备一个贴纸图标。图标应该符合以下要求：

- **尺寸**: 360 * 144 像素
- **格式**: PNG, JPG, JPEG 或 WEBP
- **风格**: 像素画，简笔画或漫画风格
- **大小**: 小于或等于 100 KB
- **版权**: 发布于一个 Creative Common 许可证
- **合规**: 必须在 SudoTV 项目提供服务的国家合法
- **免责**: 不包含任何可能导致争议的内容
- **托管**: SudoTV 计划或社区认可的托管服务

## 创建贴纸

{% include stamp/earn.html
    stamp0=site.data.stamp.stamp-designer
%}

为了创建贴纸，您需要为 [SudoTV 贴纸的 GitHub 仓库](https://github.com/SudoTV/stamp.sudo.tv) 创建一个拉取请求。

如果您需要了解更多关于 GitHub 和拉取请求的内容，访问 [有关 GitHub 的主题](https://resource.sudo.tv/topic/github)。

您需要创建三个文件来添加一个贴纸。

1. 在代码仓库的 `/_data/stamp/` 路径下，创建一个名为 `<STAMP-IDENTIFIER>.yml` 的文件，并写入如下内容：

{% include copyable/copyable-highlight.html
    no-dynamic-warning=true
    language="yml"
    file="create-stamp.yml"
%}

{:start="2"}
1. 在代码仓库的 `/en-US/stamp/` 路径下，创建一个名为 `<STAMP-IDENTIFIER>.md` 的文件，并写入如下内容：

{% capture en-US-text %}
{% raw %}

---
title: <STAMP-LOCAL-NAME> - SudoTV Stamp
layout: base
localization: en-US
---

{% include stamp/stamp.html
    stamp=site.data.stamp.<STAMP-IDENTIFIER>
%}

{% endraw %}
{% endcapture %}

{% include copyable/copyable-text-highlight.html
    language="markdown"
    text=en-US-text
%}

{:start="3"}
1. 在代码仓库的 `/zh-CN/stamp/` 路径下，创建一个名为 `<STAMP-IDENTIFIER>.md` 的文件，并写入如下内容：

{% capture zh-CN-text %}
{% raw %}

---
title: <STAMP-LOCAL-NAME> - SudoTV 贴纸
layout: base
localization: zh-CN
---

{% include stamp/stamp.html
    stamp=site.data.stamp.<STAMP-IDENTIFIER>
%}

{% endraw %}
{% endcapture %}

{% include copyable/copyable-text-highlight.html
    language="markdown"
    text=zh-CN-text
%}
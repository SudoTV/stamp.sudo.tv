---
title: 创建画像
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

## 创建画像

{% include stamp/earn.html
    stamp0=site.data.stamp.i-create-my-own-profile
%}

### 使用向导脚本创建画像

在仓库工作区下：

{% include copyable/copyable-text-highlight.html
    shell="any-terminal"
    language="shell"
    text="make init-profile"
%}

跟随向导，所有创建画像需要的文件都将被自动创建并自动打开。

在您完成配置编辑之后，您就可以提交您的更改了！

### 手动创建画像

为了创建画像，您需要为 [SudoTV 贴纸的 GitHub 仓库](https://github.com/SudoTV/stamp.sudo.tv) 创建一个拉取请求。

如果您需要了解更多关于 GitHub 和拉取请求的内容，访问 [有关 GitHub 的主题](https://resource.sudo.tv/topic/github)。

您需要创建三个文件来添加一个画像。

1. 在代码仓库的 `/_data/hi/` 路径下，创建一个名为 `<YOUR-GITHUB-USERNAME>.yml` 的文件，并写入如下内容：

{% include copyable/copyable-highlight.html
    language="yml"
    file="create-profile.yml"
%}

{:start="2"}
1. 在代码仓库的 `/en-US/hi/` 路径下，创建一个名为 `<YOUR-GITHUB-USERNAME>.md` 的文件，并写入如下内容：

{% capture en-US-text %}
{% raw %}

---
title: <YOUR-NAME>'s Profile - SudoTV Stamp
layout: base
localization: en-US
---

{% include stamp/hi-profile.html
    viewer=site.data.hi.<YOUR-GITHUB-USERNAME>
%}

{% endraw %}
{% endcapture %}

{% include copyable/copyable-text-highlight.html
    language="markdown"
    text=en-US-text
%}

{:start="3"}
1. 在代码仓库的 `/zh-CN/hi/` 路径下，创建一个名为 `<YOUR-GITHUB-USERNAME>.md` 的文件，并写入如下内容：

{% capture zh-CN-text %}
{% raw %}

---
title: <YOUR-NAME> 的画像 - SudoTV 贴纸
layout: base
localization: zh-CN
---

{% include stamp/hi-profile.html
    viewer=site.data.hi.<YOUR-GITHUB-USERNAME>
%}

{% endraw %}
{% endcapture %}

{% include copyable/copyable-text-highlight.html
    language="markdown"
    text=zh-CN-text
%}
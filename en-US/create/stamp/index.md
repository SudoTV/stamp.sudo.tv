---
title: Create Stamp
layout: base
localization: en-US
---

# {{ page.title }}

Before getting started, please view our contribution policy.

{% include navigation/absolute-link.html
    external=true
    with-origin=true
    href="https://sudo.tv/contribute"
    title="SudoTV Contribute"
    description="Learn more about make contribution to the SudoTV Project"
%}

## Stamp Icon

A stamp icon will be needed for your design. The icon should be meet the following requirements:

- **Dimension**: Exactly 360 * 144 pixels
- **Format**: PNG, JPG, JPEG or WEBP
- **Style**: Pixel art, stick figure or comic style
- **Size**: Smaller or equal 100 KB
- **Copyright**: Licensed under a Creative Commons license
- **Legal**: Must be legal in the country of the SudoTV Project serving
- **Disclaim**: Not include controversial content
- **Hosting**: By SudoTV Project or community approved hosting service

## Create Stamp

To create a stamp, you will need to create a pull request for [SudoTV Stamp GitHub Repository](https://github.com/SudoTV/stamp.sudo.tv).

Visit [GitHub Topics](https://resource.sudo.tv/topic/github) if you need more information about GitHub and pull requests.

Three files need to be created for a stamp.

1. Under repository, path `/_data/stamp/`, create a file named `<STAMP-IDENTIFIER>.yml`. Add the following content:

{% include copyable/copyable-highlight.html
    no-dynamic-warning=true
    language="yml"
    file="create-stamp.yml"
%}

{:start="2"}
1. Under repository, path `/en-US/stamp/`, create a file named as `<STAMP-IDENTIFIER>.md`. Add the following content:

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
1. Under repository, path `/zh-CN/stamp/`, create a file named `<STAMP-IDENTIFIER>.md`. Add the following content:

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
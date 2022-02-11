---
title: 贴纸列表
layout: base
localization: zh-CN
---

# {{ page.title }}

## 贴纸

{% include navigation/absolute-link.html
    href="/create/stamp"
    title="创建贴纸"
    description="查看创建贴纸的方式"
%}

{% include navigation/absolute-link.html
    external=true
    with-origin=true
    href="https://sudo.tv/reprint/stamp"
    title="如何转载贴纸"
    description="查看您转载 SudoTV 贴纸的权利和限制"
%}

## 贴纸列表

<ul class="stamp-hi-flex">
    {% for stamp in site.data.stamp %}

    {% assign stampKey=stamp[0] %}
    {% assign stampValue=stamp[1] %}

    {% if stampKey == 'docs' %}

    {% else %}

    <li>
        {% include stamp/thumbnail/large.html
            stamp=stampValue  
        %}
    </li>

    {% endif %}
    {% endfor %}
</ul>
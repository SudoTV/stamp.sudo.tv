---
title: Stamp List
layout: base
localization: en-US
---

# {{ page.title }}

## Stamps

{% include navigation/absolute-link.html
    href="/create/stamp"
    title="Create Stamp"
    description="View how to create stamps"
%}

## Stamp List

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
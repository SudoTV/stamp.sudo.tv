---
title: 通过邮件获得贴纸
layout: base
localization: zh-CN
---

# {{ page.title }}

一些贴纸可以通过邮件的方式取得。比如说这个贴纸可以成为你获得的第一个贴纸。点击贴纸可以了解到更多有关它的信息。

{% include stamp/thumbnail/medium.html
    stamp=site.data.stamp.email-acquirer
%}

在每一个贴纸的详细页面，都有一个获得贴纸方式的部分，它看起来像这样：

<blockquote>
{% assign methods=page.localization %}

{% include stamp/method-text.html
    methods=site.data.stamp.email-acquirer.methods
%}
</blockquote>

如果邮件是其中一个获取方式，发送一封包含您想获得的贴纸信息的邮件到 [stamp@sudo.tv](mailto://stamp@sudo.tv) 来取得。

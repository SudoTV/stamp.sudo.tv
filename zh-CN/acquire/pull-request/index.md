---
title: 通过拉取请求获得贴纸
layout: base
localization: zh-CN
---

# {{ page.title }}

一些贴纸可以通过拉取请求的方式取得。比如说这个贴纸可以成为你获得的第一个贴纸。点击贴纸可以了解到更多有关它的信息。

{% include stamp/earn.html
    stamp0=site.data.stamp.pull-request-acquirer
%}

在每一个贴纸的详细页面，都有一个获得贴纸方式的部分，它看起来像这样：

<blockquote>
{% assign methods=page.localization %}

{% include stamp/method-text.html
    methods=site.data.stamp.pull-request-acquirer.methods
%}
</blockquote>

如果拉取请求是其中一个获取方式，提交一个拉取请求来获得对应贴纸。如果您有任何关于贴纸的疑问，您可以发送邮件到 [stamp@sudo.tv](mailto://stamp@sudo.tv) 来联系我们。

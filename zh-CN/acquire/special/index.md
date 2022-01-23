---
title: 通过特别活动获得贴纸
layout: base
localization: zh-CN
---

# {{ page.title }}

一些贴纸可以通过特别活动的方式取得。特别活动相比其它方式是非常少见的。在有特别活动的时间段您可以在 [SudoTV 主站](https://sudo.tv) 上看到非常明显的活动信息。

在每一个贴纸的详细页面，都有一个获得贴纸方式的部分，它看起来像这样：

<blockquote>
{% assign methods=page.localization %}

{% include stamp/method-text.html
    methods=site.data.stamp.ghost.methods
%}
</blockquote>

如果特别活动是其中一个获取方式，您可以持续关注 [SudoTV 主站](https://sudo.tv) 上的活动信息。如果您有任何关于贴纸的疑问，您可以发送邮件到 [stamp@sudo.tv](mailto://stamp@sudo.tv) 来联系我们。

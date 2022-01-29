---
title: Create Profile
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

## Create Profile

{% include stamp/earn.html
    stamp0=site.data.stamp.i-create-my-own-profile
%}

### Create Profile with Wizard Script

Under the repository workspace:

{% include copyable/copyable-text-highlight.html
    shell="any-terminal"
    language="shell"
    text="make init-profile"
%}

Follow the wizard and everything you need for profile creation will be and opened automatically.

After config editing, you may now submit your change!

### Create Profile Manually

To create a profile, you will need to create a pull request for [SudoTV Stamp GitHub Repository](https://github.com/SudoTV/stamp.sudo.tv).

Visit [GitHub Topics](https://resource.sudo.tv/topic/github) if you need more information about GitHub and pull requests.

Three files need to be created for a profile.

1. Under repository, path `/_data/hi/`, create a file named `<YOUR-GITHUB-USERNAME>.yml`. Add the following content:

{% include copyable/copyable-highlight.html
    language="yml"
    file="create-profile.yml"
%}

{:start="2"}
1. Under repository, path `/en-US/hi/`, create a file named as `<YOUR-GITHUB-USERNAME>.md`. Add the following content:

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
1. Under repository, path `/zh-CN/hi/`, create a file named `<YOUR-GITHUB-USERNAME>.md`. Add the following content:

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
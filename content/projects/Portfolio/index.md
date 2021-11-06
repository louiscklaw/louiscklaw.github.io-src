---
title: 'my portfolio'
description: 'the making of my portfolio'
tags: ['hugo', 'javascript', 'cypress', 'workbox']
---

![](./screenshot.png)

## background information:

This is my portfolio. This website contains my project information.

## build flow:

In general, the build should be process under 
  1. build
  1. test
  1. merge
  1. deploy

## Test ? how to test ?

### visual regression test / viewport

{{< WikiLink "viewport" "https://en.wiktionary.org/wiki/viewport" >}} and visual regression is used to test how page look lik under difference device:

#### for example
| devices ? view port      | screenshot |
| ----------- | ----------- |
| ipad_mini      | {{< figure src="./images/cypress_ipad_mini.gif" width="200px">}}       |
| iphone x   | {{< figure src="./images/cypress_iphone_x.gif" width="200px">}}        |
| macbook 13   | {{< figure src="./images/cypress_macbook_13.gif" width="200px">}}        |
 
### page transverse

page transverse test is used to simulate user browse the page/apps under test:

#### for example
| path      | screenshot |
| ----------- | ----------- |
| project      | {{< figure src="./images/cypress_page_transverse.gif" width="200px">}}       |
| project (zh_tw)   | {{< figure src="./images/cypress_iphone_x.gif" width="200px">}}        |

## tools used:

- {{< NewWindowLink "https://gohugo.io/" >}}
- {{< NewWindowLink "https://www.cypress.io/" >}}

## references / repositories:
- current tryout {{< GithubRepoLink "louiscklaw/louiscklaw.github.io-src" "louiscklaw/louiscklaw.github.io-src" >}}
- old tryout {{< GithubRepoLink "louiscklaw/portfolio-gatsby" "louiscklaw/portfolio-gatsby" >}}

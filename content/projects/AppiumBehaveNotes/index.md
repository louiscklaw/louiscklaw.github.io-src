+++
title = "appium behave notes"
description = "A brief description of Hugo Shortcodes"
tags = [
    "shortcodes",
    "privacy",
]
+++

## Purpose

to test mobile apps of hk observatory environment:

- linux
- appium
- python 3.6.1, behave, python-appium-client

## <!--more-->

<img src="./youtube_split_view_tryout.png" />

## TO SETUP:

```bash
$ pip install -r requirements.txt
```

## To execute:

```bash
$ virtualenv venv
$ source venv/bin/activate
```

## Install python libraries:

```bash
$ pip install -r requirements.txt

```

start appium -> connect to android / genymotion appium:

```bash
$ python behave
$ behave ./features/HKOApp_9DayForecast.feature
```

## Stack on mac machine:

```bash
brew cask install visual-studio-code
brew install zsh-history-substring-search
brew install zsh
brew install zsh-lovers
brew install zsh-autosuggestions
brew install zsh-navigation-tools
brew install zsh-completions
brew install zsh-syntax-highlighting
brew install zsh-git-prompt
brew install zshdb
brew install git-flow

```

## Demo:

passing example

failing example

## SYSTEM STRUCTURE:

system structure:

Behave grammer:

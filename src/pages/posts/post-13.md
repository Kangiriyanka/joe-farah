---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Shell and Git Fun"
pubDate: 2025-11-11T9:39:05-04:00
description: 'Migrating shell and git notes'
tags: ["programming"]
postSlug: 'post-13'
---



## Intro

Learn more shortcuts and patience with the documentation. 

&nbsp;



## Shell

### Terminology

Directory: file that contains pointers (inodes) to other files.

&nbsp;


### Commands



<u>man</u>

```bash
man [command-name]
```

&nbsp;

<u>du</u>

If I enter man du<sup><a href="#footnotes" class="secondary-a"> 1.</a> </sup>, we can read the synopsis: 

<span class="bold-rounded">
du [-Aclnx] [-H | -L | -P] [-g | -h | -k | -m] [-a | -s | -d <u>depth</u>] 
</span>

&nbsp;


1. You can choose to stick the flags together if they're inside brackets. All of these  are valid:
- du -h -d -k
- du -h -d - k
- du -hd -k

2. Flags with arguments will have underlines next to them. For du, look at depth.

- du -hd1
- du -hd 1 

&nbsp;

<u>find</u>

The find command wasn't that straightforward to me by simply looking at its description. I had to see what primaries meant in that context, but it turns out they're just expressions specific to the  <u> find </u> command.  An expression is a combination (primaries in this example) of expressions and operators that evaluate to true or false.

&nbsp;



<span class="bold-rounded">
find [-H | -L | -P] [-EXdsx] [-f <u>path</u>] <u>path</u> <u>...</u> [expression]
</span>


&nbsp;
1. ...  means you can repeat the previous argument
2. \[expression]:  something like -type f (returns true if it's a file)



&nbsp;

What do these commands do? 
```bash
# You can also write it like: du -h -d -1 
du -hd1 | sort -n
```

<details>
<summary >Show Answer</summary>
 
 Sort the file sizes at depth 1 (immediate subdirectories). | is passing the input from one command to the other.

</details>

&nbsp;


```bash
# -type, -name -exec are all primaries
find . -type d -name '202*' -exec rm -r {} \;
```
<details>
<summary >Show Answer</summary>
 
 Find all the directories  with 202* and remove them.

 1. -exec utility [argument ...] ;
 2. You need the \, otherwise shell will treat it the semicolon as the start of a different command
 

</details>
&nbsp;




```bash
find . -type f \( -name "*.aif" -o -name "*.wav" \) -exec mv {} . \;
```

<details>
<summary >Show Answer</summary>
 
 Move .aif and .wav files to the current directory
1. "If the string “{}” appears anywhere in the utility name or the arguments it is replaced by the pathname of the current file." This just means {} is the result of what you found.

</details>


&nbsp;

```bash
mv *svg* SVG/
```
<details>
<summary >Show Answer</summary>
 
 Move any file containing svg to the SVG/ folder

</details>
&nbsp;

### Applications


Aliases saves some time to open and boot up projects. These are some of mine:

```bash
alias py=/usr/bin/python3
alias refresh='source ~/.zshrc'
alias editshell='vi ~/.zshrc'
alias editgit='vi ~/.gitconfig'
alias nrb='npm run backend'
alias nrd='npm run dev'
alias guitar='cd /Users/kanleafsnail/Desktop/Through/Projects/Python\ Projects/tkinter_music_theory && source .venv/bin/activate && python3 -m package.gui.guitar_gui'
alias diarydb='cd /Users/kanleafsnail/Desktop/Through/Projects/React\ Projects/Diary/diary/backend/instance && sqlite3 diary    .db'
alias ios='open /Users/kanleafsnail/Desktop/Through/Projects/iOS\ Projects/'
alias joe='cd /Users/joesnail/Through/Projects/joefarah/joe-farah && nrd'

```
&nbsp;

Echoing quotes every time I open my terminal
```bash
quotes=(
  "Be more patient when you're looking at documentation, it will save hours."
  "Every line is susceptible to ERROR."
  "How do I even start to think about this?"
  "The hidden secrets of the problem: What can I use?"
  "Do I really know what this function is doing?"
  "What's the initial configuration of my problem?"
  "Do I need more variables, do I need less variables?"
  "Is my order correct?"
  "Are you going too fast?"
  "Is it a logical error, a language error?"
  "Say the English before you say the code"
  "Relax through the edge cases"
  "Sometimes, your initial approach is just plain wrong. Nothing wrong with that. It's just learning."
)

# Show all
for q in "${quotes[@]}"; do
    echo "$q"
done

# Show random
echo "${quotes[RANDOM % ${#quotes[@]} + 1]}"
```


&nbsp;


```bash
count_items_in_directory() {
  # Prompt user for directory path
  read "dir_path?Enter the directory path: "

  # Check if the directory exists
  if [ -d "$dir_path" ]; then
    # List directories under the specified directory with item counts
    find "$dir_path" -mindepth 1 -maxdepth 1 -type d -exec sh -c 'echo -n "{}: " && find "{}" -mindepth 1 | wc -l' \;
  else
    echo "Directory '$dir_path' does not exist."
  fi
}

```
Modulo Practice Script
```bash
while true; do
    a=$(( RANDOM % 41 - 20 ))
    b=$(( RANDOM % 21 - 10 ))
    [[ $b -eq 0 ]] && b=1
    
    read -p "What is $a mod $b? " answer
    [[ "$answer" == "exit" ]] && break
    
    result=$(( a % b ))
    [[ "$answer" -eq "$result" ]] && echo "Correct!" || echo "Wrong: $result"
done
```

&nbsp;

Creating commands 
```bash
"create-env":

"cd backend && test -f .env || echo \"SECRET_KEY= #fill\\nADMIN="" \\nEMAIL="" #fill\\nPASSWORD= #fill\\nDATABASE_URL=sqlite:///gamelibrary.db\\nDATABASE_TRACKING=False\\nFLASK_APP=gameok.py\\nFLASK_ENV=development\\nFLASK_DEBUG=1\" > .env"

```

&nbsp;

## Git

  
### Terminology

- Fetch: get the changes from the remote but don't do anything yet
- Pull: Fetch and merge
- Fork: Make a repo on your GitHub Account
- Clone: Make a copy on your machine
- Pull Request: Asks the original repo owner to merge your branch into theirs.

### Commands 

Help

```bash
git <command> --help

```
&nbsp;


Rebase
```bash
# implicit If I am on branch A.

git rebase main

# explicit
git rebase main A



```
Show 
```bash
git show --pretty="" --name-only
```

Diff 
```bash
git diff --pretty="" --name-only
```
Branch Management
```bash
git branch -m old new   
git branch -d branch-name    # Checkout the branch first
git checkout -b new-branch   
git branch -f main HEAD~3    # Moving a branch pointer

```

&nbsp;

Remote

```bash
git remote add origin <link>
git remote -v 

```

Cherry-pick: git cherry-pick will plop down a commit from anywhere in the tree onto HEAD (as long as that commit isn't an ancestor of HEAD).

```bash
git cherry-pick [commits]
``` 


&nbsp;


Reflog 
```bash 
# Shows where all your head were pointing in the past.
HEAD@{#} <-- number of moves ago
```

&nbsp;

Revert: creates a new commit that reverse the changes of that commit
```bash
git revert <commit-hash>
```

&nbsp;


### Aliases

Show aliases
git config
```bash
# Applies to my system account (whoami)
git config --global --get-regexp alias
```

&nbsp;

```bash
st= status
cm-no-edit= !git add . && git commit --amend --no-edit
ptr= push origin main
f-ptr= push --force origin main
tree= log --all --graph --decorate --oneline
```


&nbsp;


### Applications

Rebasing and squashing
```bash
git rebase -i HEAD{@} # of commits
# interactive menu: squash
git rebase --continueP
```

Squash all commits 
```bash
git reset --soft $(git rev-list --max-parents=0 HEAD)
git commit -m "What did you do!"
```

View repository size
```bash
# v: verbose  H: human-readable
git count-objects -vH
```

Removing large files from a git history with <a class="secondary-a"  href="https://htmlpreview.github.io/?https://github.com/newren/git-filter-repo/blob/docs/html/git-filter-repo.html"> git-filter-repo </a>



Updates were rejected because the remote contains work that you do not have locally: git pull first

&nbsp;
```bash
git filter-repo --path large-file.zip --invert-paths --all
# Accidentally commited large videos 
git filter-repo --path videos.mp4 --invert-paths
```

&nbsp;

Remove File from Staging
```bash
git ls-files
git rm --cached filename
```

&nbsp;




### Procreate Animations

  
I made these  based on progit documentation.

- <a href="https://jumpshare.com/share/2nXVZns9NTI7VET2kD1l?b=ATDZ9pBQP6EwdXywf8xg" class="secondary-a"> Merge </a>

- <a href="https://jumpshare.com/share/0o3am6gIqDWSHxgo9NP0?b=ATDZ9pBQP6EwdXywf8xg" class="secondary-a"> Merge Conflict </a>

- <a href="https://jumpshare.com/share/nRTfmoSBAeM4xBReUVjg?b=ATDZ9pBQP6EwdXywf8xg" class="secondary-a"> Reset </a>

- <a href="https://jumpshare.com/share/6rYBmldObHwZiypk9eUD?b=ATDZ9pBQP6EwdXywf8xg" class="secondary-a"> Pull </a>


## Shortcuts

Shell:
<div class="shortcuts-box">

<div class="shortcut-card"> 
    Clear line 
</div>
<div class="shortcut-card"> Clear terminal </div>
<div class="shortcut-card"> Cancel command </div>
<div class="shortcut-card"> Move to beginning </div>
<div class="shortcut-card"> Move to end </div>
<div class="shortcut-card"> Del  after cursor </div>
<div class="shortcut-card"> Del  before cursor </div>
<div class="shortcut-card"> Word navigation </div>

</div>

Mac:
<div class="shortcut-card"> Change desktops </div>



&nbsp;


## Resources

Git: 
- <a class="secondary-a" href="https://learngitbranching.js.org/"> Git Branching </a>
- <a href="https://git-scm.com/learn" class="secondary-a"> Progit </a>


&nbsp;

## Footnotes

1. Another <a class="secondary-a" href="https://en.wikipedia.org/wiki/Mandu_(food)"> man du </a>

<style>

    .shortcut-card {
        width: 10rem;
        height: 2rem;
        margin: 2px;
        border-radius: 0.2rem;
        background: #6c8d66ff;
        text-align: center;
    }

    .shortcut-card::after {
        position: absolute;
        
    }



</style>